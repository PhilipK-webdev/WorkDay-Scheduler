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
    <button class="saveBtn"></button>
      </div>
    </div>`);

        $(".container").append(arrHtml[i]);

        if (parseCurrentTime === parseArrHoursMoment[i]) {

            $(".textDisplay").eq(i).attr("class", "present");
        }

    }




    // for (var i = 0; i < arrHtml.length; i++) {
    //     if (parseCurrentTime === parseArrHoursMoment[i]) {

    //         $(".textDisplay").eq(i).attr("class", "past");
    //     }


    // }

    // $(".textDisplay").each(function () {
    //     var link = $(this).attr("data-id");
    //     console.log(link);
    // });

    // if (parseCurrentTime > 18 || parseCurrentTime < 8) {

    //     $(".textDisplay").attr("class", "past");
    //     //     console.log('is between')
    // } else if (parseCurrentTime > parseStartTime) {

    //     $(".textDisplay").attr("class", "past");

    //     if (parseCurrentTime < parseEndTime) {

    //         $(".textDisplay").attr("class", "future");
    //     }
    // } else {

    //     $(".textDisplay").attr("class", "present");
    // }



});














    // console.log(currentTime.format("h A"));
    // console.log(startTime.format("h A"));
    // console.log(endTime.format("h A"));
//     console.log("-------------------------");
// var x = parseInt(startTime.format("h"));
// console.log(x);
// var y = parseInt(endTime.format("h"));
    // console.log(parseInt(endTime));
    // for (var i = x; i < 18; i++) {

  //     arrHours.push(i);


    // for (var i = 0; i < arrHours.length; i++) {

    //     $(".container").append(`

    //              <div class="row text-center">
    //              <div class="col">
    //               <div class="div hour">
    //                 <span class="show-hour">${arrHours[i] + "AM"}</span>
    //            </div>
    //            </div>
    //         <div class="col-10">
    //               <textarea class="present" name="" id="" cols="30" rows="10"></textarea>
    //            </div>
    //            <div class="col text-center">
    //           <button class="saveBtn"></button>
    //             </div>
    //           </div>`);
    // }

//     if (startTime.isBefore(endTime)) {

//     console.log("True");
// } else {

//     console.log("false");
// }




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

    // var arrHours = [];


    // for (var i = 24; i > 0; i--) {

    //     arrHours.push(moment().add(i, "hours").format("h A"));

    // }

    // var temp = moment().format("h A");
    // console.log(temp);
    // console.log(arrHours[0])

    // for (var i = 0; i < 9; i++) {

    //     if (temp === arrHours[i]) {

    //         $(".container").append(`

    //             <div class="row text-center">
    //             <div class="col">
    //               <div class="div hour">
    //                 <span class="show-hour">${arrHours[i]}</span>
    //               </div>
    //             </div>
    //             <div class="col-10">
    //               <textarea class="present" name="" id="" cols="30" rows="10"></textarea>
    //             </div>
    //             <div class="col text-center">
    //               <button class="saveBtn"></button>
    //             </div>
    //           </div>`);
    //     } else if (temp !== arrHours[i]) {

    //         $(".container").append(`

    //             <div class="row text-center">
    //             <div class="col">
    //               <div class="div hour">
    //                 <span class="show-hour">${arrHours[i]}</span>
    //               </div>
    //             </div>
    //             <div class="col-10">
    //               <textarea class="past" name="" id="" cols="30" rows="10"></textarea>
    //             </div>
    //             <div class="col text-center">
    //               <button class="saveBtn"></button>
    //             </div>
    //           </div>`);

    //     }


    // }


    // }

    //     console.log("hello");






