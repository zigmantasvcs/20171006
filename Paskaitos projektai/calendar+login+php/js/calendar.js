function init(){
  AppendMonthName($("#calendar"))
  AppendDays($("#calendar"));
}

function AppendMonthName(element){
  var einamasisMenuo = GetMonth();
  var menuo = GetDiv();
  var heading = GetHeading(3);
  heading.append(einamasisMenuo);
  menuo.html(heading);
  $(element).append(menuo);
}

function AppendDays(element){
  var pirmojiMenesioSavaitesDiena = GetFirstMonthDayWeekDay();
  var paskutineMenesioDiena = GetLastMonthDay();

  var trigger = false;
  var einamojiDiena = 0;
  var savaiciuSkaicius = GetWeekCountForCurrentMonth();

  for(var i=0;i<savaiciuSkaicius;i++){

    var weekBox = GetWeek()

    for(var j=1;j<=7;j++){
      var dayBox = GetDay();
      var trigger = GetTrigger(j, pirmojiMenesioSavaitesDiena, einamojiDiena, paskutineMenesioDiena, trigger);
      if(trigger){
        einamojiDiena++;
        dayBox.attr("id", "day"+einamojiDiena);
        AddClassWeek(dayBox, j);
        dayBox.append("<div class='dayNumber'>"+einamojiDiena+"</div>");
        CreateDayClickEvent(dayBox, einamojiDiena);

        ///////////////////////////////////////////////
        GetEvents(GetDate(einamojiDiena), dayBox, einamojiDiena); //
        /////////////////////////////////////////////////
      }

      weekBox.append(dayBox);
    }

    // ikeliame savetes elementa i calendoriaus elementa
    $(element).append(weekBox);

    // atvaizduojame su animacija dienas
    $(".day").each(function(index) {
        $(this).delay(40*index).fadeIn(300);
    });
  }
}

function GetTrigger(iterrator, pirmojiMenesioSavaitesDiena, einamojiDiena, paskutineMenesioDiena, trigger){
  var localTrigger = trigger;
  if(iterrator == pirmojiMenesioSavaitesDiena){ // skaiciuojam kada prasideda pirma diena pirmoje savaiteje
    localTrigger = true;
  }

  if(einamojiDiena == paskutineMenesioDiena){ // skaiciuojama kada baigesi diena menesio
    localTrigger = false;
  }
  return localTrigger;
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
  return diena;
}

function CreateDayClickEvent(dayElement, dayNumber){
  dayElement.on("click", function(){
    var id = $(this).attr("id");
    var info = GetDayInfo(id);

    $(".dayDetails").html("");
    $(".dayDetails").append(info);

//////////////////////////////////////////
    GetEventsDetails(ParseDay(id));
/////////////////////////////////////////
    $(".dayDetails").css({visibility:"visible"}).animate({
      width: $("#calendar").width(),
      height: $("#calendar").height()
    }, 500);
  });
}

function GetEvents(date, dienaElement, day){
   $.ajax({
        url:"api/calendar/list.php", //the page containing php script
        type: "post", //request type,
        dataType: 'json',
        data: {date: date},
        success:function(result){
          var ids = [];
          $.each(result, function(index, value){
            $(dienaElement).append("<div class='event'>"+value.name+"</div>");
            ids.push(value.id);
          });
       },
     });
}

function GetEventsDetails(day){
   $.ajax({
        url:"api/calendar/details.php", //the page containing php script
        type: "post", //request type,
        dataType: 'json',
        data: {date: GetDate(day) },
        success:function(result){
          var dl = $("<dl></dl>");
          $.each(result, function(index, value){
            var dt = $("<dt></dt>");
            var dd = $("<dd></dd>");
            dt.append(value.name);
            dd.append(value.description);
            dl.append(dt);
            dl.append(dd);
          });
          $(".dayDetails").append(dl);
       }
     });
}

function GetDayInfo(id){
  var day = ParseDay(id);
  var div = GetDiv();
  var heading = GetHeading(3);
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

function GetDate(einamojiDiena){
  if(String(einamojiDiena).length == 1){
    einamojiDiena = '0'+ einamojiDiena;
  }
  var data = new Date();
  var month = data.getMonth() + 1;

  if(String(month).length == 1){
    month = '0' + month;
  }

  return data.getFullYear() + '-' + month + '-' + einamojiDiena;
}
