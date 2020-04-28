// const moment = require("moment");

// 

$(document).ready(function () {

    var currentTime = moment();    // 
    var startTime = moment('09:00 am', "hh:mm a");
    var endTime = moment('5:00 pm', "hh:mm a")
    var arrHoursMoment = [];
    var arrHtml = [];
    arrHoursMoment.push(startTime.format("HH"));

    for (var i = 1; i < 9; i++) {


        arrHoursMoment.push(startTime.add(i, "hours").subtract(i - 1, "hours").format("HH"));
    }

    startTime = moment('09:00 am', "hh:mm a");

    var parseCurrentTime = parseInt(currentTime.hours());
    var parseStartTime = parseInt(startTime.hours());
    var parseEndTime = parseInt(endTime.hours());
    var parseArrHoursMoment = [];

    for (var i = 0; i < arrHoursMoment.length; i++) {

        parseArrHoursMoment[i] = parseInt(arrHoursMoment[i]);
    }

    console.log(typeof parseArrHoursMoment);

    for (var i = 0; i < arrHoursMoment.length; i++) {


        arrHtml.push(`

       <div class="row text-center">
       <div class="col">
        <div class="div hour">
          <span class="show-hour">${arrHoursMoment[i]}</span>
     </div>
     </div>
       <div class="col-10">
        <textarea class="textDisplay" data-id="${i}"  cols="30" rows="10"></textarea>
     </div>
     <div class="col text-center">
    <button class="saveBtn" data-id=${i}></button>
      </div>
    </div>`);

        $(".container").append(arrHtml[i]);

    }

    var classGet;
    for (var i = 0; i < parseArrHoursMoment.length; i++) {

        if (parseCurrentTime > parseArrHoursMoment[i]) {
            classGet = $(".textDisplay").eq(i).attr("class");
            if (classGet === "textDisplay") {
                $(".textDisplay").eq(i).addClass("past");
            }

        } else if (parseCurrentTime === parseArrHoursMoment[i]) {

            $(".textDisplay").eq(i).addClass("present");
            classGet = $(".textDisplay").eq(i).attr("class");
            console.log(classGet);
        } else {

            $(".textDisplay").eq(i).addClass("future");
        }
    }

    var getIdText = $(".textDisplay");
    var arrText = [];
    for (var i = 0; i < getIdText.length; i++) {

        arrText.push(parseInt(getIdText.eq(i).attr("data-id")));
    }

    $(document).on("click", ".saveBtn", function () {

        var getIdBtn = parseInt($(this).attr("data-id"));

        for (var i = 0; i < arrText.length; i++) {

            if (getIdBtn === arrText[i]) {

                var hours = arrHoursMoment[i];
                var value = getIdText.eq(i).val();
                window.localStorage.setItem(hours, JSON.stringify(value));
            }
        }

    });

    for (var i = 0; i < arrText.length; i++) {

        var hours = arrHoursMoment[i];
        var value = JSON.parse(window.localStorage.getItem(hours));
        getIdText.eq(i).val(value);

    }

    $(".container").prepend(`<div class="col-12 text-right">
    <input class="btn btn-primary" type="reset" value="Reset"></input>
      </div>`)

    $(".btn").on("click", function () {

        window.localStorage.clear();
        for (var i = 0; i < getIdText.length; i++) {

            getIdText.eq(i).val("");
        }

    });
});






