
  var buttonAddedCounter=0;
  const ids=[];
  
  
  function removeID(closeID){
    
    
    const index = uniqueItems.indexOf(closeID.parentNode.id);
    ids.push(closeID.parentNode.id);
    if(index>-1){
      alert(uniqueItems);
      uniqueItems.splice(index, 1);
      
    }
    closeID.parentNode.remove();
    buttonAddedCounter--;
    return ids;
  }
  
  
  const items = [];
  
  let uniqueItems = ['link_0'];
  let uniqueIds= ['id_0'];
  let generatedURL="Form3.pdf";       //////This URL needs to be generated//////////////////////////////////////////////////
  
  
  
  
  
  
  
  function cloneFunc(clickID) {

    
    
    const node = document.getElementById(clickID);
    const el = document.createElement("a");
    const span=document.createElement("span");
    var flag=false;
  
  
  
    items.push(node.id);
    
     //added code
    
  
  //  clone.setAttribute('id',`menu-${i + 1}`);
     span.setAttribute('id',`id-1`);
      
     
   
  
  
      var uniqueIds = ids.filter((element, index) => {
      return ids.indexOf(element) === index;
     });
  
  
    /*//////////////////////////////////////////debug/////////////////////////////// 
     alert(node.id);
     alert(items);*/
     alert(ids); 
     alert(uniqueItems);
   //  alert(uniqueIds);
     
     if(flag==false){
     
    const clone = node.cloneNode(true);
    span.setAttribute("class",".closebutton");
    span.textContent="X";
    span.setAttribute("onclick","removeID(this)");
    span.setAttribute("value","close");
    
    clone.appendChild(span);

    clone.classList.add("button-default");
    clone.classList.add("button-slanted");

    navList.appendChild(clone);
    buttonAddedCounter=buttonAddedCounter+1;

    clone.setAttribute("onclick","null");
    }
  
    items.forEach((element) => {
      if (!uniqueItems.includes(element)) {
        uniqueItems.push(element);
      }
    });
    
    alert(uniqueItems);
  }
   


  $(document).ready(function () {
    var navbarCount= $("#myTopnav").find("a").length-1;
    totalCount=buttonAddedCounter+navbarCount;
    const limitedNumber=4;
    
    const topnavList=document.querySelectorAll(".topnav a:not(:first-child)");
    var totaldiv=navbarCount+countAdded(); 
    if(navbarCount>=limitedNumber){

        for (let i = 0; i <  topnavList.length; i++) {
          topnavList[i].style.display = 'none';
        }
        topnavList[topnavList.length-1].style.display='block';

    }
    else{
      topnavList[topnavList.length-1].style.display='none';
    }
    
        $(".topnavdiv p").after("<h3>Totoal Div Elemennts: "
        + totaldiv);
        
});


function myFunction() {
   
  
  const topnavList=document.querySelectorAll("button-default button-slanted  a:not(:first-child)");
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


function countAdded() {
    return buttonAddedCounter;
}