<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "esport_reg";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed"]);
    exit();
}

$sql = "SELECT COUNT(*) AS count FROM registrations";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

echo json_encode(["count" => $row['count']]);

$conn->close();
?>
