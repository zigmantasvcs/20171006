<nav>
  <div class="nav-wrapper">
    <a href="#!" class="brand-logo"><?php echo "Sveiki, ".$_SESSION["username"]."!"; ?></a>
    <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
    <ul class="side-nav" id="mobile-demo">
      <li><a href="calculator.php">Skaičiuotuvas</a></li>
      <li><a href="calendar.php">Kalendorius</a></li>
      <li><a href="api/logout.php">Atsijungti</a></li>
    </ul>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="calculator.php">Skaičiuotuvas</a></li>
      <li><a href="calendar.php">Kalendorius</a></li>
      <li><a href="api/logout.php">Atsijungti</a></li>
    </ul>
  </div>
</nav>
