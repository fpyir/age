var $input = $("input");
var $status = $("img");
var $age = $(".age");

var rID;
var sID;
 function createDate(date) {
   var date = moment(date, "DD-MM-YYYY");
 }

 if (localStorage.birthday) {
   console.log("");
   sID = displayAge(localStorage.birthday);
 }


 //31556952000 milliseconds in a year
 function calculateAge(birthDate) {
   var currentDate = moment();
  var elapsedTime = currentDate.diff(birthDate) / 31556952000;
  return elapsedTime;
}

function displayAge(input) {
  var birthday;
  localStorage.setItem('birthday', input);
  birthday = localStorage.birthday;
  rID = setInterval(function() {
    var age = calculateAge(birthday);
    $age.text(age.toFixed(9));
  }, 50);
}

$input.keyup(function () {
  var input = $(this).val();
  var strp = input.split("/");
  if (strp == "undefined") { return }
  if (strp.length == 3) {
    if (strp[0].length == 2 && strp[1].length == 2 && strp[2].length == 4) {
      days = parseInt(strp[0]);
      months = parseInt(strp[1]);
      years = parseInt(strp[2]);
      if (!isNaN(days) && !isNaN(months) && !isNaN(years)) {
        $status.attr("src", "yes.png");
        clearInterval(rID);
        clearInterval(sID);
        displayAge(input);
      }
    }
  }
});
