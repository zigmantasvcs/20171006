<?php
	require_once('../connection/connect.php');

	$stmt = $conn->prepare(
    "INSERT INTO calendar_events
      (date, description, name)
		VALUES
      (?, ?, ?)");

	$stmt->bind_param(
    "sss",
    $date,
    $description,
    $name
    );

	$date = $_POST["date"];
	$description = $_POST["description"];
  $name = $_POST["name"];

	// set parameters and execute
	if ($stmt->execute()) {
    // Nukreipiame į kitą svetainę
		header('Location: /calendar.php');
	} else {
	   echo $stmt->error;
	}

	require_once('../connection/disconnect.php');

	//header('Location: /LAYOUT/asmeninis/index.php');
?>
