// const moment = require("moment");

// 

$(document).ready(function () {


    // var time = [
    //     {
    //         year: moment().startOf('year').format("YYYY"),
    //         month: moment().startOf("month").format("MM"),
    //         day: moment().startOf("day").format("DD"),
    //         hour: moment().startOf("hour").format("h a")
    //     },
    // ];

    // var time = moment().toObject();

    // $("#currentDay").text(moment().format("MM/DD/YYYY"));
    // console.log(moment().fromNow());
    // console.log(time.years);
    // var timeInt = parseInt(time[0].year);
    // console.log(typeof timeInt);

    // var time = moment().startOf('day');
    // var time = moment().startOf('minute')
    // console.log(time);
    // var endOfMonth = moment().endOf('Month').format("MM");
    // console.log(endOfMonth);

    var arrHours = [];


    for (var i = 24; i > 0; i--) {

        arrHours.push(moment().add(i, "hours").format("h A"));

    }

    var temp = moment().format("h A");
    console.log(temp);
    console.log(arrHours[0])

    for (var i = 0; i < 9; i++) {

        if (temp === arrHours[i]) {

            $(".container").append(`

                <div class="row text-center">
                <div class="col">
                  <div class="div hour">
                    <span class="show-hour">${arrHours[i]}</span>
                  </div>
                </div>
                <div class="col-10">
                  <textarea class="present" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="col text-center">
                  <button class="saveBtn"></button>
                </div>
              </div>`);
        } else if (temp !== arrHours[i]) {

            $(".container").append(`

                <div class="row text-center">
                <div class="col">
                  <div class="div hour">
                    <span class="show-hour">${arrHours[i]}</span>
                  </div>
                </div>
                <div class="col-10">
                  <textarea class="past" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="col text-center">
                  <button class="saveBtn"></button>
                </div>
              </div>`);

        }


    }


    // }

    //     console.log("hello");


});



