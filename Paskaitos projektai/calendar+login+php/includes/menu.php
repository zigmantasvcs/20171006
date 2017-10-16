<?php
  session_start();
  if(isset($_SESSION["username"])){
    require_once("registeredmenu.php");
  }
  else{
    require_once("notregisteredmenu.php");
  }

?>
