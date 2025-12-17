<?php

/**
 * Response Utility
 * Handles response formatting and redirection
 */

class Response
{

    /**
     * Send JSON response
     */
    public static function json($data, $status = 200)
    {
        http_response_code($status);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit;
    }

    /**
     * Send SweetAlert response
     */
    public static function sweetAlert($icon, $title, $message, $redirect = null, $shouldExit = true)
    {
        $redirectScript = $redirect ? ".then(function() { window.location.href = '$redirect'; })" : "";

        echo "
        <script>
            (function() {
                function showAlert() {
                    if (typeof Swal !== 'undefined' && Swal && typeof Swal.fire === 'function') {
                        Swal.fire({
                            icon: '$icon',
                            title: '$title',
                            text: '$message',
                            confirmButtonText: 'OK'
                        })$redirectScript;
                    }
                }

                if (typeof Swal === 'undefined') {
                    var scriptEl = document.createElement('script');
                    scriptEl.src = '/assets/js/sweetalert2@11.js';
                    scriptEl.async = true;
                    scriptEl.onload = showAlert;
                    (document.head || document.documentElement).appendChild(scriptEl);
                } else {
                    showAlert();
                }
            })();
        </script>";
        if ($shouldExit) {
            exit;
        }
    }

    /**
     * Redirect to URL
     */
    public static function redirect($url)
    {
        header("Location: $url");
        exit;
    }

    /**
     * Send JavaScript redirect
     */
    public static function jsRedirect($url)
    {
        echo "<script>window.location.href = '$url';</script>";
        exit;
    }

    /**
     * Send success response
     */
    public static function success($message, $data = null, $redirect = null)
    {
        $response = [
            'success' => true,
            'message' => $message,
            'data' => $data
        ];

        if ($redirect) {
            $response['redirect'] = $redirect;
        }

        return $response;
    }

    /**
     * Send error response
     */
    public static function error($message, $code = 400, $data = null)
    {
        return [
            'success' => false,
            'message' => $message,
            'code' => $code,
            'data' => $data
        ];
    }
}
