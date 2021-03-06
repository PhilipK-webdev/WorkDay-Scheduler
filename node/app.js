$(document).ready(function () {

    var currentTime = moment();    // currentTime 
    var startTime = moment('09:00 am', "hh:mm a"); // beginning of the day
    var endTime = moment('5:00 pm', "hh:mm a"); // end of the day
    var arrHoursMoment = []; // Array of hours
    var arrHtml = [];

    // set the time on p element using moment()
    setInterval(function () {

        $("#currentDay").text(moment().format("LL HH:mm:ss"));
    }, 1000);


    // using format of 24 hours to display on the page
    arrHoursMoment.push(startTime.format("HH"));
    for (var i = 1; i < 9; i++) {


        arrHoursMoment.push(startTime.add(i, "hours").subtract(i - 1, "hours").format("HH"));
    }

    startTime = moment('09:00 am', "hh:mm a"); //update the start time - after the for loop
    // parse all the variables that using moment()
    var parseCurrentTime = parseInt(currentTime.hours());
    var parseStartTime = parseInt(startTime.hours());
    var parseEndTime = parseInt(endTime.hours());
    var parseArrHoursMoment = [];

    // create dynamic html file
    for (var i = 0; i < arrHoursMoment.length; i++) {
        parseArrHoursMoment[i] = parseInt(arrHoursMoment[i]);
        arrHtml.push(`
        <div class="row text-center">
        <div class="col">
            <div class="div hour">
            <span class="show-hour"><i class="fas fa-business-time">${arrHoursMoment[i] + ":00"}</i></span>
        </div>
        </div>
        <div class="col-10">
            <textarea class="textDisplay" data-id="${i}"  cols="30" rows="10"></textarea>
        </div>
        <div class="col text-center">
        <button class="saveBtn" data-id=${i}><i class="far fa-save"> Save</i></button>
        </div>
        </div>`);
        $(".container").append(arrHtml[i]);
    }

    var classGet;
    var textDisplayArr = $(".textDisplay");
    // conditions to set the background color of the textarea
    for (var i = 0; i < parseArrHoursMoment.length; i++) {

        if (parseCurrentTime > parseArrHoursMoment[i]) {

            //if the textarea is colored past,
            //     // that means that you cannot write any events or meetings 
            //     //in this specific textarea
            textDisplayArr.eq(i).addClass("past");

        } else if (parseCurrentTime === parseArrHoursMoment[i]) {

            textDisplayArr.eq(i).addClass("present");

        } else {

            textDisplayArr.eq(i).addClass("future");
        }
    }

    var arrText = [];
    for (var i = 0; i < textDisplayArr.length; i++) {

        arrText.push(parseInt(textDisplayArr.eq(i).attr("data-id")));
    }

    // setting the local storage
    $(document).on("click", ".saveBtn", function () {

        var getIdBtn = parseInt($(this).attr("data-id"));

        for (var i = 0; i < arrText.length; i++) {

            if (getIdBtn === arrText[i]) {

                var hours = arrHoursMoment[i] + ":00";
                var value = textDisplayArr.eq(i).val();
                window.localStorage.setItem(hours, JSON.stringify(value));
            }
        }

    });
    // get from local storage
    for (var i = 0; i < arrText.length; i++) {

        var hours = arrHoursMoment[i] + ":00";
        var value = JSON.parse(window.localStorage.getItem(hours));
        textDisplayArr.eq(i).val(value);

    }

    // making new btn to delete the data from local storage and getting ready the page for next day.
    $(".container").prepend(`<div class="col-12 text-right">
    <i class="fas fa-eraser"><input class="btn btn-primary" type="reset" value="Reset"></input></i>
      </div>`)

    // delete btn
    $(".btn").on("click", function () {

        window.localStorage.clear();
        for (var i = 0; i < textDisplayArr.length; i++) {

            textDisplayArr.eq(i).val("");
        }

    });
});






