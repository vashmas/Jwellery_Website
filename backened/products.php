<?php
require 'config.php';

// GET - products lao
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    
    // Single product by ID
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $result = mysqli_query($conn, "SELECT * FROM products WHERE id=$id");
        $product = mysqli_fetch_assoc($result);
        echo json_encode($product);
    } 
    // Sare products
    else {
        $result = mysqli_query($conn, "SELECT * FROM products ORDER BY created_at DESC");
        $products = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $products[] = $row;
        }
        echo json_encode($products);
    }
}

// POST - product add karo
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $name     = mysqli_real_escape_string($conn, $data['name']);
    $price    = $data['price'];
    $category = mysqli_real_escape_string($conn, $data['category']);
    $desc     = mysqli_real_escape_string($conn, $data['description']);
    $image    = mysqli_real_escape_string($conn, $data['image']);

    $query = "INSERT INTO products (name, price, category, description, image) 
              VALUES ('$name', '$price', '$category', '$desc', '$image')";

    if (mysqli_query($conn, $query)) {
        echo json_encode(["message" => "Product added!", "id" => mysqli_insert_id($conn)]);
    } else {
        echo json_encode(["error" => "Failed to add product"]);
    }
}

// DELETE - product delete karo
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $id = $_GET['id'];
    
    // Pehle image ka naam lao
    $result = mysqli_query($conn, "SELECT image FROM products WHERE id=$id");
    $row = mysqli_fetch_assoc($result);
    
    // Image file bhi delete karo
    if ($row['image']) {
        $imagePath = 'uploads/' . $row['image'];
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }
    }

    if (mysqli_query($conn, "DELETE FROM products WHERE id=$id")) {
        echo json_encode(["message" => "Product deleted!"]);
    } else {
        echo json_encode(["error" => "Failed to delete"]);
    }
}
?>