

         function fun1()
    {
        var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        var d=new Date();
        var date=d.getDate();
        var day=d.getDay();
        var mon=d.getMonth();
        var h=d.getHours();
        var min=d.getMinutes();
        var am="AM"
        if(h>12){
            am="pm";
        }

        document.getElementById("p1").innerHTML= date+" "+ month[mon];
        document.getElementById("p2").innerHTML= week[day];
        document.getElementById("p3").innerHTML= h;
        document.getElementById("p5").innerHTML= min+"  "+am;
          var t = setTimeout(function() {
            fun1()
        }, 500);

  
    }

   
 `		`									
