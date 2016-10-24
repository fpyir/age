var rID;

if (localStorage.birthday) { displayAge(localStorage.birthday); }

function calculateAge(birthDate) {
  return moment().diff(birthDate) / 31556952000; //31556952000 milliseconds in a year
}

function displayAge(input) {
  localStorage.setItem('birthday', input);
  var birthday = localStorage.birthday;

  rID = setInterval(function() {
    var age = calculateAge(birthday).toFixed(9);
    $(".age").text(age);
  }, 50);
}

$("input").keyup(function () {
  var input = $(this).val();
  if (/\d\d\/\d\d\/\d\d\d\d/.test(input)) { //regex match
    $("img").attr("src", "yes.png");
    clearInterval(rID);
    displayAge(input);
  } else {  $("img").attr("src", "no.png");  }
});
