<?php

/**
 * Ranking Manager
 * Handles top money, top power, and top task rankings
 */

class RankingManager
{
    private $database;

    public function __construct($database = null)
    {
        $this->database = $database;
    }

    /**
     * Get top money ranking (based on danap field)
     */
    public function getTopMoney($limit = 10)
    {
        $sql = "SELECT player.name, SUM(account.danap) AS danap, account.username 
                FROM account 
                JOIN player ON account.id = player.account_id 
                WHERE account.is_admin = 0 
                GROUP BY player.name 
                ORDER BY danap DESC 
                LIMIT " . intval($limit);

        $result = $this->database->query($sql);

        $data = [];
        $rank = 1;
        if ($result) {
            while ($row = mysqli_fetch_assoc($result)) {
                $row['rank'] = $rank++;
                $row['name'] = htmlspecialchars($row['name']);
                $row['username'] = htmlspecialchars($row['username']);
                $data[] = $row;
            }
        }

        return $data;
    }

    /**
     * Get top power ranking (based on data_point JSON field)
     */
    public function getTopPower($limit = 10)
    {
        $sql = "SELECT name, gender, 
                CAST(JSON_UNQUOTE(JSON_EXTRACT(data_point, '$[1]')) AS SIGNED) AS second_value,
                CAST(JSON_UNQUOTE(JSON_EXTRACT(JSON_UNQUOTE(JSON_EXTRACT(pet, '$[1]')), '$[1]')) AS SIGNED) AS pet_power,
                (CAST(JSON_UNQUOTE(JSON_EXTRACT(data_point, '$[1]')) AS SIGNED) + 
                 COALESCE(CAST(JSON_UNQUOTE(JSON_EXTRACT(JSON_UNQUOTE(JSON_EXTRACT(pet, '$[1]')), '$[1]')) AS SIGNED), 0)) AS total_power
                FROM player JOIN account ON account.id = player.account_id 
                WHERE account.is_admin = 0 
                ORDER BY total_power DESC 
                LIMIT " . intval($limit);

        $result = $this->database->query($sql);

        $data = [];
        $rank = 1;
        if ($result) {
            while ($row = mysqli_fetch_assoc($result)) {
                $row['rank'] = $rank++;
                $row['name'] = htmlspecialchars($row['name']);
                $data[] = $row;
            }
        }

        return $data;
    }

    /**
     * Get top task ranking (based on data_task JSON field)
     */
    public function getTopTask($limit = 10)
    {
        $sql = "SELECT 
                p.name, 
                CAST(JSON_UNQUOTE(JSON_EXTRACT(p.data_task, '$[0]')) AS UNSIGNED) AS task_id,
                CAST(JSON_UNQUOTE(JSON_EXTRACT(p.data_task, '$[1]')) AS UNSIGNED) AS task_branch,
                CAST(JSON_UNQUOTE(JSON_EXTRACT(p.data_task, '$[2]')) AS UNSIGNED) AS task_progress,
                t.name AS task_name
            FROM 
                player p
            JOIN account ON account.id = p.account_id
            LEFT JOIN 
                task_main_template t 
                ON t.id = CAST(JSON_UNQUOTE(JSON_EXTRACT(p.data_task, '$[0]')) AS UNSIGNED)
            WHERE account.is_admin = 0
            ORDER BY 
                task_id DESC, 
                task_branch DESC,
                task_progress DESC
            LIMIT " . intval($limit);

        $result = $this->database->query($sql);

        $data = [];
        $rank = 1;
        if ($result) {
            while ($row = mysqli_fetch_assoc($result)) {
                $row['rank'] = $rank++;
                $row['name'] = htmlspecialchars($row['name']);
                $row['task_name'] = htmlspecialchars($row['task_name']);
                $data[] = $row;
            }
        }

        return $data;
    }

    /**
     * Get user's rank in specific category
     */
    public function getUserRank($username, $type = 'money')
    {
        if (!$username) {
            $username = $_SESSION['account'] ?? null;
        }

        if (!$username) {
            return null;
        }

        switch ($type) {
            case 'money':
                return $this->getUserMoneyRank($username);
            case 'power':
                return $this->getUserPowerRank($username);
            case 'task':
                return $this->getUserTaskRank($username);
            default:
                return null;
        }
    }

    /**
     * Get user's money rank (based on danap)
     */
    private function getUserMoneyRank($username)
    {
        $username = $this->database->escape($username);
        $sql = "SELECT COUNT(*) + 1 as rank 
                FROM account a1 
                JOIN player p1 ON a1.id = p1.account_id 
                WHERE a1.danap > (
                    SELECT a2.danap 
                    FROM account a2 
                    JOIN player p2 ON a2.id = p2.account_id 
                    WHERE a2.username = '$username' AND a2.is_admin = 0
                ) AND a1.is_admin = 0";

        $result = $this->database->query($sql);
        if ($result) {
            $row = mysqli_fetch_assoc($result);
            return $row ? $row['rank'] : null;
        }
        return null;
    }

    /**
     * Get user's power rank (based on data_point JSON)
     */
    private function getUserPowerRank($username)
    {
        $username = $this->database->escape($username);
        $sql = "SELECT COUNT(*) + 1 as rank 
                FROM account a1 
                JOIN player p1 ON a1.id = p1.account_id 
                WHERE (CAST(JSON_UNQUOTE(JSON_EXTRACT(p1.data_point, '$[1]')) AS SIGNED) + 
                       COALESCE(CAST(JSON_UNQUOTE(JSON_EXTRACT(JSON_UNQUOTE(JSON_EXTRACT(p1.pet, '$[1]')), '$[1]')) AS SIGNED), 0)) > (
                    SELECT (CAST(JSON_UNQUOTE(JSON_EXTRACT(p2.data_point, '$[1]')) AS SIGNED) + 
                            COALESCE(CAST(JSON_UNQUOTE(JSON_EXTRACT(JSON_UNQUOTE(JSON_EXTRACT(p2.pet, '$[1]')), '$[1]')) AS SIGNED), 0))
                    FROM account a2 
                    JOIN player p2 ON a2.id = p2.account_id 
                    WHERE a2.username = '$username' AND a2.is_admin = 0
                ) AND a1.is_admin = 0";

        $result = $this->database->query($sql);
        if ($result) {
            $row = mysqli_fetch_assoc($result);
            return $row ? $row['rank'] : null;
        }
        return null;
    }

    /**
     * Get user's task rank (based on data_task JSON)
     */
    private function getUserTaskRank($username)
    {
        $username = $this->database->escape($username);
        $sql = "SELECT COUNT(*) + 1 as rank 
                FROM account a1 
                JOIN player p1 ON a1.id = p1.account_id 
                WHERE (CAST(JSON_UNQUOTE(JSON_EXTRACT(p1.data_task, '$[0]')) AS UNSIGNED) * 1000000 + 
                       CAST(JSON_UNQUOTE(JSON_EXTRACT(p1.data_task, '$[1]')) AS UNSIGNED) * 1000 + 
                       CAST(JSON_UNQUOTE(JSON_EXTRACT(p1.data_task, '$[2]')) AS UNSIGNED)) > (
                    SELECT (CAST(JSON_UNQUOTE(JSON_EXTRACT(p2.data_task, '$[0]')) AS UNSIGNED) * 1000000 + 
                            CAST(JSON_UNQUOTE(JSON_EXTRACT(p2.data_task, '$[1]')) AS UNSIGNED) * 1000 + 
                            CAST(JSON_UNQUOTE(JSON_EXTRACT(p2.data_task, '$[2]')) AS UNSIGNED))
                    FROM account a2 
                    JOIN player p2 ON a2.id = p2.account_id 
                    WHERE a2.username = '$username' AND a2.is_admin = 0
                ) AND a1.is_admin = 0";

        $result = $this->database->query($sql);
        if ($result) {
            $row = mysqli_fetch_assoc($result);
            return $row ? $row['rank'] : null;
        }
        return null;
    }

    /**
     * Get ranking statistics
     */
    public function getRankingStats()
    {
        $stats = [];

        // Total players
        $sql = "SELECT COUNT(*) as total FROM account WHERE is_admin = 0";
        $result = $this->database->query($sql);
        if ($result) {
            $row = mysqli_fetch_assoc($result);
            $stats['total_players'] = $row['total'];
        }

        // Total money in system (tongnap)
        $sql = "SELECT SUM(tongnap) as total_money FROM account WHERE is_admin = 0";
        $result = $this->database->query($sql);
        if ($result) {
            $row = mysqli_fetch_assoc($result);
            $stats['total_money'] = $row['total_money'] ?? 0;
        }

        // Average power (from JSON data_point)
        $sql = "SELECT AVG(CAST(JSON_UNQUOTE(JSON_EXTRACT(data_point, '$[1]')) AS SIGNED)) as avg_power 
                FROM player p JOIN account a ON p.account_id = a.id WHERE a.is_admin = 0";
        $result = $this->database->query($sql);
        if ($result) {
            $row = mysqli_fetch_assoc($result);
            $stats['avg_power'] = round($row['avg_power'] ?? 0);
        }

        // Average task progress (from JSON data_task)
        $sql = "SELECT AVG(CAST(JSON_UNQUOTE(JSON_EXTRACT(data_task, '$[2]')) AS UNSIGNED)) as avg_task_progress 
                FROM player p JOIN account a ON p.account_id = a.id WHERE a.is_admin = 0";
        $result = $this->database->query($sql);
        if ($result) {
            $row = mysqli_fetch_assoc($result);
            $stats['avg_task_progress'] = round($row['avg_task_progress'] ?? 0);
        }

        return $stats;
    }

    /**
     * Format power value for display
     */
    public function formatPower($value)
    {
        if ($value == '' || $value == null) {
            return 'Không có chỉ số sức mạnh';
        }

        if ($value > 1000000000) {
            return number_format($value / 1000000000, 1, '.', '') . ' tỷ';
        } elseif ($value > 1000000) {
            return number_format($value / 1000000, 1, '.', '') . ' Triệu';
        } elseif ($value >= 1000) {
            return number_format($value / 1000, 1, '.', '') . ' k';
        } else {
            return number_format($value, 0, ',', '');
        }
    }

    /**
     * Format money value for display
     */
    public function formatMoney($value)
    {
        return number_format($value, 0, ',', '.') . 'đ';
    }

    /**
     * Get planet name from gender
     */
    public function getPlanetName($gender)
    {
        switch ($gender) {
            case 0:
                return "Trái đất";
            case 1:
                return "Namec";
            case 2:
                return "Xayda";
            default:
                return "Không xác định";
        }
    }

    /**
     * Mask player name for privacy
     */
    public function maskPlayerName($name, $visibleChars = 3)
    {
        if (strlen($name) <= $visibleChars) {
            return $name;
        }
        return substr($name, 0, $visibleChars) . str_repeat('*', max(0, strlen($name) - $visibleChars));
    }
}
