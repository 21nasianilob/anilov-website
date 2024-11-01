<?php
// Database connection details
$host = "localhost";
$db = "personal_website";
$user = "your_username";
$pass = "your_password";

// Create a connection
$conn = new mysqli($host, $user, $pass, $db);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and get form input values
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $message = $conn->real_escape_string($_POST['message']);

    // Insert data into the contact_messages table
    $sql = "INSERT INTO contact_messages (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
