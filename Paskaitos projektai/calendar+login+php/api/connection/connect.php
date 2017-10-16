<?php
	// Apsirašome parametrus
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "test";

	// Sukuriamas prisijungimas
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Patikriname prisijungimą
	if($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
?>
