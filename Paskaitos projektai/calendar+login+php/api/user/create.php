<?php
	require_once('../connection/connect.php');

	$stmt = $conn->prepare(
    "INSERT INTO users
      (name, surname, username, password, email, created)
		VALUES
      (?, ?, ?, ?, ?, now())");

	$stmt->bind_param(
    "sssss",
    $name,
    $surname,
    $username,
    $hashed_password,
    $email);

	$name = $_POST["name"];
	$surname = $_POST["surname"];
  $username = $_POST["username"];
  $password = $_POST["password"];
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);
  $email = $_POST["email"];

	// set parameters and execute
	if ($stmt->execute()) {
    // Nukreipiame į kitą svetainę
		header('Location: /login.php');
	} else {
	   echo $stmt->error;
	}

	require_once('../connection/disconnect.php');


	//header('Location: /LAYOUT/asmeninis/index.php');
?>
