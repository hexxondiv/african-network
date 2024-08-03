<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEAD Certificate Verification</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="icon" type="image/x-icon" href="../logo.png"> <!-- Favicon link -->
    <style>
        .center-container {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .spinner-container {
            display: none;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.7);
        }
    </style>
</head>
<body>
<?php
session_start();
// Define the base URLs
$home_url = 'https://neadafrica.com/';
//$base_url = 'http://localhost/anrd/cert/';
//$cert_url = 'http://localhost/anrd/cert/verify';
$base_url = 'https://neadafrica.com/cert/';
$cert_url = 'https://neadafrica.com/cert/verify';

// Check for ref parameter in GET or POST request
if (isset($_GET['ref']) || isset($_POST['ref'])) {
    $ref = isset($_GET['ref']) ? htmlspecialchars($_GET['ref']) : htmlspecialchars($_POST['ref']);
    $file_path = "../pdfs/{$ref}.pdf";  // Adjust the path to point to the correct location

    // Check if the file exists
    if (file_exists($file_path)) {
        { ?>
            <!-- Show success card -->
            <div class="center-container col-md-12 card">
                <div class="text-center">
                    <!-- Logo Header -->
                    <a href="<?php echo $home_url ?>"><img src="../logo.png" alt="Logo" class="mb-4"
                                                           style="max-width: 150px;"></a>

                    <h4 class="text-muted">Network for Educational Advancement and Development</h4>
                    <h3>Certificate Verification Portal</h3>
                    <?php
                    echo "<div class='alert alert-success'>Certificate Verified for {$ref}.</div>";
                    echo "<form method='post' action='{$cert_url}/dl/'><input type='hidden' name='ref' value='{$ref}'><button type='submit' class='btn btn-success'>Download Certificate</button></form>";
                    ?>
                </div>
            </div>
        <?php }
    } else {
        $_SESSION['error'] = "No Certificate found for the reference number: $ref";
        header("Location: $base_url");
        exit();
    }
} else {
    // Redirect to base URL if no ref parameter
    header("Redirect: $base_url");
    exit();
}
?>
</body>
</html>
