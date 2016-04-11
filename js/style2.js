
         var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function fun1() {
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var day = d.getDay();
        var date = d.getDate();
        var mon = d.getMonth();
        var str = d.toDateString();
        var am = "pm";
        if (h > 12) {
            am = "PM";
        }

        document.getElementById("p1").innerHTML = day + ", ";
        document.getElementById("p2").innerHTML = date + " ";
        document.getElementById("p3").innerHTML = month[mon] + " ";
        document.getElementById("p4").innerHTML = d.getFullYear();
        document.getElementById("p5").innerHTML = h + ":" + m + " " + am;
         var t = setTimeout(function() {
            fun1()
        }, 500);

    }
