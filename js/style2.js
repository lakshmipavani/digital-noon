
         var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function fun1() {
        var d = new Date();
        var h = d.getHours();
        var min = d.getMinutes();
        var day = d.getDay();
        var date = d.getDate();
        var mon = d.getMonth();
        var str = d.toDateString();
        var am = "AM";
        if (h > 11) {
            am = "PM";
        }
if(min<10)
{
min="0"+min;
}
        document.getElementById("p1").innerHTML = week[day] + ", ";
        document.getElementById("p2").innerHTML = date + " ";
        document.getElementById("p3").innerHTML = month[mon] + " ";
        document.getElementById("p4").innerHTML = d.getFullYear();
        document.getElementById("p5").innerHTML = h + ":" + min + " " + am;
         var t = setTimeout(function() {
            fun1()
        }, 500);

    }
