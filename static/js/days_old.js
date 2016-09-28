
viewDisplayThisNameAndDays = function (name, days) {
  $('#daysOldDiv').text(name + " is " + days + " days old today.");
}

controllerPleaseDisplayDaysOld = function(name, birthday) {
  
  var today = new Date();
  var elapsed = today.getTime() - birthday.getTime(); // elapsed time in milliseconds
  var seconds = elapsed / 1000;
  var hours = seconds / (60 * 60);
  var days = Math.floor(hours / 24);
  viewDisplayThisNameAndDays(name, days);
}

var birthday = new Date('March 25, 1970 00:15:00');

window.setInterval(controllerPleaseDisplayDaysOld,5000000,"Rob", birthday);  // update every 5000 seconds

controllerPleaseDisplayDaysOld("Rob", birthday);
