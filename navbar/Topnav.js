$(document).ready(function () {
    var count = $(".topnav").find("a").length-1;
    if(count==5){
 
        const topnav=document.querySelector(".topnav");
        const hidenav=topnav.querySelector("a:(:first-child)");
        hidenav.style.display='none';
    }
    else{
        hidnav.style.display='block';
    }
    $(".topnavdiv p").after("<h3>Totoal Div Elemennts: "
        + count);
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    var count = $(".topnav").find("a").length-1;
    
      var dropdownIcon = document.getElementById("icon");
       dropdownIcon.style.display='block';
    
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  
}

