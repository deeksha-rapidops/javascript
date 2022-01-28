 const f10 = () => {
     var i1 = "05 / 08 / 2019";
     var i2 = "03 / 05 / 2020";

     var a = new Date(i1);
     var b = new Date(i2);
     var m = (a.getMonth() + 1) - (b.getMonth() + 1)
     var y = a.getFullYear() - b.getFullYear()
     var d = a.getDay() - b.getDay()
     var timeday = b.getTime() - a.getTime();
     var weekday = timeday / (1000 * 3600 * 24 * 7);
     var days = timeday / (1000 * 3600 * 24);
     var hours = timeday / (1000 * 3600);
     var minutes = timeday / (1000 * 60);
     console.log(Math.abs(y) + ' year ' + Math.abs(m) + ' Months ' + Math.abs(d) + " Days ");
     console.log('or ' + Math.abs(((y * 12) + m)) + ' Months ' + Math.abs(d) + " Days ");
     console.log('or ' + Math.floor(weekday) + " Weeks ");
     console.log('or ' + Math.floor(days) + " Days ");
     console.log('or ' + Math.floor(hours) + " Hours");
     console.log('or ' + Math.floor(minutes) + " minits");
 }
 f10();