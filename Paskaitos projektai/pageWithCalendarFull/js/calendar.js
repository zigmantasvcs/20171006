function init(){
	
  var savaiciuSkaicius = GetWeekCountForCurrentMonth();
  var pirmojiMenesioSavaitesDiena = GetFirstMonthDayWeekDay();
  var paskutineMenesioDiena = GetLastMonthDay();
  var pirmojiMenesioDiena = GetFirstMonthDay();
  var einamasisMenuo = GetMonth();

  console.log("Savaiciu skaicius: " + savaiciuSkaicius);
  console.log("Pirmoji menesio savaites diena: " + pirmojiMenesioSavaitesDiena);
  console.log("Paskutine menesio diena: " + paskutineMenesioDiena);
  console.log("Pirmoji menesio diena: " + GetFirstMonthDay());
  console.log("Einamasis menuo: " + GetMonth());

  // pavadinimas mėnesio
  var menuo = GetDiv();
  var heading = GetHeading(1);
  heading.append(einamasisMenuo);
  menuo.html(heading);
  $("#calendar").append(menuo);

  //
  var trigger = false;
  var einamojiDiena = 0;
  for(var i=0;i<savaiciuSkaicius;i++){

    var savaite = GetWeek()

    for(var j=1;j<=7;j++){
      var diena = GetDay();

      if(j == pirmojiMenesioSavaitesDiena){ // skaiciuojam kada prasideda pirma diena pirmoje savaiteje
        trigger = true;
      }

      if(einamojiDiena == paskutineMenesioDiena){ // skaiciuojama kada baigesi diena menesio
        trigger = false;
      }

      if(trigger){
        einamojiDiena++;
        diena.attr("id", "day"+einamojiDiena);

        AddClassWeek(diena, j);

        if(j == 1){
          diena.addClass("monday");
        }

        diena.text(einamojiDiena);
      }
      savaite.append(diena)

    }

    $("#calendar").append(savaite);

    $(".day").each(function(index) {
        $(this).delay(40*index).fadeIn(300);
    });
  }
}

function AddClassWeek(element, weekDay){
  switch (weekDay) {
    case 1:
      element.addClass("monday");
      break;
    case 6:
      element.addClass("saturday");
      break;
    case 7:
      element.addClass("sunday");
      break;
  }
}

function GetDay(){
  var diena = GetDiv();
  diena.hide();
  diena.attr("class", "day");

  diena.on("click", function(){

    var info = GetDayInfo($(this).attr("id"));
    $(".dayDetails").append(info);

    $(".dayDetails").css({visibility:"visible"}).animate({
      width: $("#calendar").width(),
      height: $("#calendar").height()
    }, 500);
  });
  return diena;
}

function GetDayInfo(id){
  var day = ParseDay(id);
  var div = GetDiv();
  var heading = GetHeading(1);
  heading.append(day + " mėnesio diena.");
  div.append(heading);
  return div;
}

function ParseDay(idvalue){
  return idvalue.replace('day', '');
}

function GetWeek(){
  var week = GetDiv();
  week.attr("class", "week");
  return week;
}

function GetDiv(){
  return $("<div></div>");
}

function GetHeading(size){

  if(size > 6){
    return $("<h6></h6>");
  }

  if(size < 1){
    return $("<h1></h1>");
  }

  return $("<h"+size+"></h"+size+">");
}

// Savaiciu skaicius einamajam menesiui
function GetWeekCountForCurrentMonth() {
    var firstMonthDay = GetFirstMonthDay();
    var lastMonthDay = GetLastMonthDay();
	alert(firstMonthDay.getDay());
    var used = GetFirstMonthDayWeekDay() + lastMonthDay;
    return Math.ceil(used / 7); // i didziaja puse apvalina
}

function GetFirstMonthDayWeekDay(){
  var firstMonthDay = GetFirstMonthDay();
  var firstMonthDayWeekDay = firstMonthDay.getDay();
  if(firstMonthDayWeekDay == 0){
    firstMonthDayWeekDay = 7;
  }

  return firstMonthDayWeekDay;
}

function GetLastMonthDay(){
  var date = new Date(), y = date.getFullYear(), m = date.getMonth();
  var lastDay = new Date(y, m+1, 0);

  return lastDay.getDate();
}

function GetFirstMonthDay(){
  var date = new Date(), y = date.getFullYear(), m = date.getMonth();
  return new Date(y, m, 1);
}

function GetMonth(){
  var months = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"];
  var date = new Date();
  return months[date.getMonth()];
}
