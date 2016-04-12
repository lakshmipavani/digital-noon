function fun1() {
        var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var str = d.toDateString();
        var day = d.getDay();
        var dat = d.getDate();
        var mon = d.getMonth();
        var sec = d.getSeconds();
        var am = "AM";
        if (h > 11) {
            am = "PM";
        }
if(m<10)
{
m="0"+m;
}
if(sec<10){
sec="0"+sec;
}
        document.getElementById("p1").innerHTML = h;
        document.getElementById("p2").innerHTML = m;
        document.getElementById("p3").innerHTML = sec;
        document.getElementById("p4").innerHTML = am;
        document.getElementById("p5").innerHTML = week[day] + ", " + dat + " " + month[mon];
        var t = setTimeout(function() {
            fun1()
        }, 500);

    }