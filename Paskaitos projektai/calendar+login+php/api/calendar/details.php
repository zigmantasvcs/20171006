<?php
  session_start();

	require_once('../connection/connect.php');

	if ($stmt = $conn->prepare("SELECT description, name FROM calendar_events WHERE date = (?)")) {

    $stmt->bind_param(
      "s",
      $date);

    $date = $_POST["date"];

    $stmt->execute();
    $result = $stmt->get_result();

    $resultToReturn = array();

    while ($myrow = $result->fetch_assoc()) {
      $event = new stdClass();
      $event->name = $myrow["name"];
      $event->description = $myrow["description"];
      array_push($resultToReturn, $event);
    }

    $myJSON = json_encode($resultToReturn);

    echo $myJSON;

    /* close statement */
    $stmt->close();
	}

	require_once('../connection/disconnect.php');
?>
