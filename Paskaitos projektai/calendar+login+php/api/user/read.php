<?php
  session_start();

	require_once('../connection/connect.php');

	if ($stmt = $conn->prepare("SELECT username, password FROM users WHERE username=?")) {

    $stmt->bind_param(
      "s",
      $username);

    $username = $_POST["username"];

		$stmt->execute();
    $stmt->bind_result($username, $password);
    $row = $stmt->fetch();

    if (password_verify($_POST['password'], $password)){
      $_SESSION['username'] = $username;
    }

		/* close statement */
		$stmt->close();
    header('Location: /calendar.php');
	}

	require_once('../connection/disconnect.php');
?>
