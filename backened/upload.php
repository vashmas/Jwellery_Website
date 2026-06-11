<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $uploadDir = 'uploads/';
    
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $file = $_FILES['image'];
    $fileName = time() . '_' . $file['name'];
    $filePath = $uploadDir . $fileName;

    if (move_uploaded_file($file['tmp_name'], $filePath)) {
        echo json_encode([
            "success" => true,
            "filename" => $fileName
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Upload failed"
        ]);
    }
}
?>