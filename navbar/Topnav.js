

$(document).ready(function () {
    var count = $(".topnav").find("a").length-1;
    const limitedNumber=4;

    const topnavList=document.querySelectorAll(".topnav a:not(:first-child)");

    if(count>=limitedNumber){

        for (let i = 0; i <  topnavList.length; i++) {
          topnavList[i].style.display = 'none';
        }
        topnavList[topnavList.length-1].style.display='block';

    }
    else{
      topnavList[topnavList.length-1].style.display='none';
    }
    
    $(".topnavdiv p").after("<h3>Totoal Div Elemennts: "
        + count);
});


function myFunction() {
   
  
  const topnavList=document.querySelectorAll(".topnav a:not(:first-child)");
  var x = document.getElementById("myTopnav"); 

  for (let i = 0; i <  topnavList.length; i++) {

  if(topnavList[i].style.display=="none"){
      topnavList[i].style.display = 'block';
  }
  else{
      topnavList[i].style.display = 'none';
      topnavList[topnavList.length-1].style.display='block';
  }

}
    
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  
   
}

