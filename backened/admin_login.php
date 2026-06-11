<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $username = $data['username'];
    $password = $data['password'];

    // Simple admin credentials
    if ($username === 'admin' && $password === 'vsjwellers123') {
        echo json_encode([
            "success" => true,
            "message" => "Login successful",
            "token" => "vs_admin_token"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Invalid credentials"
        ]);
    }
}
?>