
        function fun1()
    {
        var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

        var d=new Date();
         var mon=d.getMonth();
         var yr=d.getFullYear();
         var dt=d.getDate();
         var day=d.getDay();
         var h=d.getHours();
          var min=d.getMinutes();
          var sec=d.getSeconds();
          var am="AM";
          if(h>12){
            am="PM";
          }
    document.getElementById("p1").innerHTML= month[mon]+" "+yr;
    document.getElementById("p2").innerHTML= dt;
    document.getElementById("p3").innerHTML= week[day]
    document.getElementById("p4").innerHTML= h+":"+min+":"+sec+" "+am;
      var t = setTimeout(function() {
            fun1()
        }, 500);



        }
