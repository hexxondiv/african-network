<?php
session_start();

// Define the base URL
$base_url = 'http://localhost/anrd/cert/';
//$base_url = 'https://neadafrica.com/cert/';


// Check for ref parameter in GET or POST request
if (isset($_GET['ref']) || isset($_POST['ref'])) {
    $ref = isset($_GET['ref']) ? htmlspecialchars($_GET['ref']) : htmlspecialchars($_POST['ref']);
    $file_path = "../pdfs/{$ref}.pdf";  // Adjust the path to point to the correct location

    // Check if the file exists
    if (file_exists($file_path)) {
        // Set headers for file download
        header('Content-Type: application/pdf');
        header('Content-Disposition: inline; filename="' . basename($file_path) . '"'); // Use 'inline' to display in browser
        header('Content-Length: ' . filesize($file_path));
        readfile($file_path);
        exit;
    } else {
        $_SESSION['error'] = "No PDF found for the reference number: $ref";
        header("Location: $base_url");
        exit();
    }
} else {
    // Redirect to base URL if no ref parameter
    header("Location: $base_url");
    exit();
}
?>



