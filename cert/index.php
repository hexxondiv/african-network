<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEAD Certificate Verification</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="icon" type="image/x-icon" href="logo.png"> <!-- Favicon link -->
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
    // Define the base URL
//    $base_url = 'http://localhost/anrd/cert/';
    $base_url = 'https://neadafrica.com/cert/';
    $home_url = 'https://neadafrica.com/';
    ?>
    
    <div class="center-container col-md-12 card">
        <div class="text-center">
            <!-- Logo Header -->
            <a href="<?php echo $home_url?>"><img src="logo.png" alt="Logo" class="mb-4" style="max-width: 150px;"></a>
           
            <h4 class="text-muted">Network for Educational Advancement and Development</h4>
            <h3>Certificate Verification Portal</h3>
            <form method="POST" action="verify/" onsubmit="showSpinner()">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name="ref" placeholder="Enter Certificate Reference Number" required>
                    <div class="input-group-append">
                        <button class="btn btn-success" type="submit">Search</button>
                    </div>
                </div>
            </form>

            <div id="spinner" class="spinner-container">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

            <?php
            if (isset($_SESSION['error'])) {
                echo "<div class='alert alert-danger'>{$_SESSION['error']}</div>";
                unset($_SESSION['error']);
            }
            ?>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
    <script>
        function showSpinner() {
            document.getElementById('spinner').style.display = 'flex';
        }
    </script>
</body>
</html>




