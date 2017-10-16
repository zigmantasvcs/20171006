<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="css/materialize.css">
    <link rel="stylesheet" href="css/calendar.css">
	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/materialize.js"></script>
    <script src="js/calendar.js"></script>

    <script>
      $(document).ready(function(){

        $('.datepicker').pickadate({
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 15, // Creates a dropdown of 15 years to control year,
          today: 'Šiandien',
          clear: 'Išvalyti',
          close: 'Gerai',
          monthsFull: [ 'Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis' ],
          monthsShort: [ 'Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rgp', 'Rgs', 'Spa', 'Lap', 'Gru' ],
          weekdaysFull: [ 'Sekmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Pirmadienis' ],
          weekdaysShort: [ 'Sek', 'Ant', 'Tre', 'Ket', 'Pen', 'Šeš', 'Pir' ],

          closeOnSelect: false, // Close upon selecting a date,
          format: 'yyyy-mm-dd',
          firstDay: true
        });

        $(".button-collapse").sideNav();
        init();


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
        <div class="col s12">
          <form class="col s12" action="api/calendar/create.php" method="POST">
            <div class="row">
              <div class="input-field col s2">
                <input name="date" id="date" type="text" class="datepicker">
                <label for="date">Date</label>
              </div>
              <div class="input-field col s2">
                <input name="name" id="name" type="text" class="validate">
                <label for="name">Name</label>
              </div>
              <div class="input-field col s6">
                <input name="description" id="description" type="text" class="validate">
                <label for="description">Description</label>
              </div>
              <div class="input-field col s2">
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i class="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <div id="calendar">
            <div class="dayDetails">
            </div>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>
