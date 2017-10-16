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
          <div id="login" class="col s12">
            <form class="col s12" action="api/user/read.php" method="POST">
              <div class="row">
                <div class="input-field col s12">
                  <input name="username" id="username" type="text" class="validate">
                  <label for="username">Username</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input name="password" id="password" type="password" class="validate">
                  <label for="password">Password</label>
                </div>
              </div>
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>
