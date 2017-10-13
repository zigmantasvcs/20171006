function init(){
  var menuo = $("<h1></h1>").text(GetMonth());
  $("#calendar").append(menuo);

  var weekCount = GetWeekCountForCurrentMonth();
  console.log(weekCount);

  var firstWeekDay = GetFirstMonthWeekDay();

  var monthDays = GetLastMonthDay();

  var counter = 1;
  var diena = 1;
  for(var i=0;i<weekCount;i++){
    var week = $("<div></div>");
    week.attr("class", "week");

    for(var j=1;j<=7;j++){
      var day = $("<div></div>");
      day.addClass("day");
      if(counter >= firstWeekDay && diena <= monthDays){
        day.text(diena);

        day.on("click", function(){
          var info = $(this).text();

          $(".dayDetails")
            .css({visibility:"visible" }) // komentaras
            .animate({
              width: $("#calendar").width(),
              height: $("#calendar").height()
            },500)

        });


        diena++;
      }
      counter++;
      week.append(day);

    }

    $("#calendar").append(week);
  }

}


function GetWeekCountForCurrentMonth(){
  var lastMonthDay = GetLastMonthDay();
  var firstMonthWeekDay = GetFirstMonthWeekDay();
  var weeks = (firstMonthWeekDay + lastMonthDay)/7;
  console.log(Math.ceil(weeks));
  return Math.ceil(weeks);
}

function GetFirstMonthWeekDay(){
  var firstMonthDay = GetFirstMonthDay();
  var firstMonthWeekDay = firstMonthDay.getDay(); // grazina savaites diena
  if(firstMonthWeekDay == 0){
    firstMonthWeekDay = 7;
  }
  return firstMonthWeekDay;
}

function GetFirstMonthDay(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var firstMonthDay = new Date(year, month, 1);
  return firstMonthDay;
}

function GetLastMonthDay(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();

  var lastDay = new Date(year, month+1, 0); // tokiu budu gaunama einamajo menesio paskutine diena

  return lastDay.getDate();
}

function GetMonth(){
  var months = ["Sausis", "Vasaris",
  "Kovas", "Balandis", "Gegužė", "Birželis",
  "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis",
  "Lapkritis", "Gruodis"];

  var date = new Date();
  return months[date.getMonth()];
}
