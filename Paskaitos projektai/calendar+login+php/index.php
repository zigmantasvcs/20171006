<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="css/materialize.css">
	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/materialize.js"></script>

    <script>
      $(document).ready(function(){
        $(".button-collapse").sideNav();
      });
    </script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <?php
          require_once('includes/menu.php');
        ?>
      </div>

      <div class="row">
        <div class="col s12" >
          <div id="calculator" class="col s12">

          </div>
        </div>
      </div>
    </div>

  </body>
</html>
