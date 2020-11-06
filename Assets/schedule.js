const momentApp = moment();

var toDo;
var hourTime;

// uses the moment.js functionality to show this data on the top of the calender

$("#currentDay").text(momentApp.format("dddd, MMMM YYYY"));

//calls these 2 functions onto the document itself
$(document).ready(function () {
  colorChange();
  renderText();
});
//color change functionality for past, present, and future time slots
function colorChange() {
  let realTime = moment().hours();

  console.log("Current Time " + realTime);

  $(".input").each(function () {
    let timeTest = parseInt($(this).attr("id"));
    console.log(timeTest);

    if (realTime > timeTest) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (realTime < timeTest) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  });
}

// save button stores in local storage and calls the other 2 functions.

$(".saveBtn").click(function () {
  toDo = $(this).siblings(".input").val();
  console.log(toDo);
  hourTime = $(this).siblings(".hour").text();
  console.log(hourTime);

  localStorage.setItem(hourTime, JSON.stringify(toDo));

  // colorChange();
  // renderText();
});

//saves the actual words typed in the specific time slot

function renderText() {
  let saveWords8 = JSON.parse(localStorage.getItem("8:00 am"));
  $("#8").val("");
  $("#8").val(saveWords8);

  let saveWords9 = JSON.parse(localStorage.getItem("9:00 am"));
  $("#9").val("");
  $("#9").val(saveWords9);

  let saveWords10 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#10").val("");
  $("#10").val(saveWords10);

  let saveWords11 = JSON.parse(localStorage.getItem("11:00 am"));
  $("#11").val("");
  $("#11").val(saveWords11);

  let saveWords12 = JSON.parse(localStorage.getItem("12:00 pm"));
  $("#12").val("");
  $("#12").val(saveWords12);

  let saveWords1 = JSON.parse(localStorage.getItem("1:00 pm"));
  $("#13").val("");
  $("#13").val(saveWords1);

  let saveWords2 = JSON.parse(localStorage.getItem("2:00 pm"));
  $("#14").val("");
  $("#14").val(saveWords2);

  let saveWords3 = JSON.parse(localStorage.getItem("3:00 pm"));
  $("#15").val("");
  $("#15").val(saveWords3);

  let saveWords4 = JSON.parse(localStorage.getItem("4:00 pm"));
  $("#16").val("");
  $("#16").val(saveWords4);
}
