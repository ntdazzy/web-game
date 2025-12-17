<?php

/**
 * Database Manager
 * Handles database connection, migration, and table management
 */

class DatabaseManager
{
    private $connection;
    private $config;

    public function __construct($config = null, $existingConnection = null)
    {
        $this->config = $config;
        $this->connection = $existingConnection;
    }

    public function init()
    {
        if (!$this->connection) {
            $this->connect();
        }
        $this->runMigrationsOnce();
    }

    public function connect()
    {
        $dbConfig = $this->config->getDatabaseConfig();

        $this->connection = new mysqli(
            $dbConfig['host'],
            $dbConfig['user'],
            $dbConfig['pass'],
            $dbConfig['name']
        );

        if ($this->connection->connect_error) {
            throw new Exception("Database connection failed: " . $this->connection->connect_error);
        }

        $this->connection->set_charset($dbConfig['charset']);
        date_default_timezone_set('Asia/Ho_Chi_Minh');
    }

    public function getConnection()
    {
        return $this->connection;
    }

    public function escape($string)
    {
        return mysqli_real_escape_string($this->connection, $string);
    }

    public function query($sql)
    {
        if (!$this->connection) {
            throw new Exception("Database connection not established");
        }
        return $this->connection->query($sql);
    }

    public function prepare($sql)
    {
        return $this->connection->prepare($sql);
    }

    public function fetch($sql)
    {
        $result = $this->query($sql);
        return $result ? $result->fetch_assoc() : null;
    }

    public function fetchAll($sql)
    {
        $result = $this->query($sql);
        $data = [];
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }
        return $data;
    }

    private function checkAndCreateTables()
    {
        $tables = $this->getRequiredTables();

        foreach ($tables as $tableName => $schema) {
            if (!$this->tableExists($tableName)) {
                $this->createTable($tableName, $schema);
            } else {
                $this->checkTableStructure($tableName, $schema);
            }
        }
    }

    private function runMigrationsOnce()
    {
        $flagPath = $this->getSchemaFlagPath();
        // If already initialized once, skip heavy checks
        if (file_exists($flagPath)) {
            return;
        }

        // First-time initialization
        $this->checkAndCreateTables();

        // Mark as initialized
        @file_put_contents($flagPath, date('c'));
    }

    private function getSchemaFlagPath()
    {
        // Project root: two levels up from core/Database
        $root = realpath(__DIR__ . '/../..');
        if ($root === false) {
            $root = __DIR__;
        }
        return $root . DIRECTORY_SEPARATOR . '.schema';
    }

    private function getRequiredTables()
    {
        return [
            // Keep only payment-related tables as requested
            'history_card' => [
                'id' => 'INT PRIMARY KEY AUTO_INCREMENT',
                'username' => 'VARCHAR(50) NOT NULL',
                'telco' => 'VARCHAR(20) NOT NULL',
                'amount' => 'INT NOT NULL',
                'amount_received' => 'INT DEFAULT 0',
                'serial' => 'VARCHAR(50) NOT NULL',
                'code' => 'VARCHAR(50) NOT NULL',
                'request_id' => 'VARCHAR(50) NOT NULL',
                'status' => 'ENUM("pending", "success", "error") DEFAULT "pending"',
                'created_at' => 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
            ],
            'history_bank' => [
                'id' => 'INT PRIMARY KEY AUTO_INCREMENT',
                'username' => 'VARCHAR(50) NOT NULL',
                'code' => 'VARCHAR(100) NOT NULL',
                'amount_vnd' => 'INT NOT NULL',
                'amount_ruby' => 'INT NOT NULL',
                'description' => 'TEXT',
                'status' => 'ENUM("pending", "success", "error") DEFAULT "pending"',
                'created_at' => 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
            ]
        ];
    }

    private function tableExists($tableName)
    {
        $result = $this->query("SHOW TABLES LIKE '$tableName'");
        return $result && $result->num_rows > 0;
    }

    private function createTable($tableName, $schema)
    {
        // Check if table already exists
        if ($this->tableExists($tableName)) {
            error_log("Table $tableName already exists, skipping creation");
            return;
        }

        $columns = [];
        $foreignKeys = [];

        foreach ($schema as $column => $definition) {
            if ($column === '_foreign_keys' && is_array($definition)) {
                $foreignKeys = array_merge($foreignKeys, $definition);
            } elseif (strpos($definition, 'FOREIGN KEY') === 0) {
                $foreignKeys[] = $definition;
            } else {
                $columns[] = "`$column` $definition";
            }
        }

        $sql = "CREATE TABLE IF NOT EXISTS `$tableName` (" . implode(', ', $columns);

        if (!empty($foreignKeys)) {
            $sql .= ', ' . implode(', ', $foreignKeys);
        }

        $sql .= ") ENGINE=InnoDB DEFAULT CHARSET=utf8";

        if ($this->query($sql)) {
            error_log("Table $tableName created successfully");
        } else {
            // Check if error is due to table already exists
            if (strpos($this->connection->error, 'already exists') !== false) {
                error_log("Table $tableName already exists, skipping creation");
            } else {
                error_log("Error creating table $tableName: " . $this->connection->error);
            }
        }
    }

    private function checkTableStructure($tableName, $expectedSchema)
    {
        $existingColumns = $this->getTableColumns($tableName);
        $expectedColumns = array_keys($expectedSchema);

        // Check for missing columns
        foreach ($expectedColumns as $column) {
            // Skip special keys like _foreign_keys
            if ($column === '_foreign_keys' || is_array($expectedSchema[$column])) {
                continue;
            }

            // Only add column if it doesn't exist
            if (!in_array($column, $existingColumns)) {
                $this->addColumn($tableName, $column, $expectedSchema[$column]);
            }
        }
    }

    private function getTableColumns($tableName)
    {
        $result = $this->query("DESCRIBE `$tableName`");
        $columns = [];
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $columns[] = $row['Field'];
            }
        }
        return $columns;
    }

    private function addColumn($tableName, $column, $definition)
    {
        // Check if column already exists
        $existingColumns = $this->getTableColumns($tableName);
        if (in_array($column, $existingColumns)) {
            error_log("Column $column already exists in table $tableName, skipping");
            return;
        }

        $sql = "ALTER TABLE `$tableName` ADD COLUMN `$column` $definition";
        if ($this->query($sql)) {
            error_log("Column $column added to table $tableName");
        } else {
            if (strpos($this->connection->error, 'Duplicate column name') !== false) {
                return;
            } else {
                error_log("Error adding column $column to table $tableName: " . $this->connection->error);
            }
        }
    }

    public function dropTable($tableName)
    {
        $sql = "DROP TABLE IF EXISTS `$tableName`";
        return $this->query($sql);
    }

    public function recreateTable($tableName, $schema)
    {
        $this->dropTable($tableName);
        $this->createTable($tableName, $schema);
    }
}
