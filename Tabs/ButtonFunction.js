

items=[];


function cloneFunc(clickID) {

  

  const navList=document.getElementById("myTopnav");
  
  const el = document.createElement("a");
  const span=document.createElement("span");
  
  const node = document.getElementById(clickID);
  //alert(clickID);


 

  var flag=false;
 
  items.push(node.id);
  
  uniqueItems.forEach((item, i) => {
    //  clone.setAttribute('id',`menu-${i + 1}`);
     span.setAttribute('id',`id-${i + 1}`);
        
  });
   //added code
  



    uniqueIds = ids.filter((element, index) => {
    return ids.indexOf(element) === index;
   });


  /*//////////////////////////////////////////debug/////////////////////////////// 
   alert(node.id);
   alert(items);
   alert(ids); 
   alert(uniqueItems);
   alert(uniqueIds);*/
   
   //////////////////////////////////////////////////////////////////////////////
   if(flag==false){
    
    const clone = node.cloneNode(true);

    
    span.setAttribute("class",".closebutton");
    span.textContent="X";
    span.setAttribute("onclick","removeID(this)");
    span.setAttribute("value","close");



    
 
    clone.classList.add("button-default");
    clone.classList.add("button-slanted");
 
    
 
 // setURL(clickID);
  

  clone.appendChild(span);
  navList.appendChild(clone);

  //alert(navList.includes("a"));



/*let target = "<a>";

let counter = 0;
for (Atag of navList) {
  if (Atag == target) {
        counter++;
    }
};
alert(counter);*/
alert(navList.childElementCount);
alert(navList.childNodes);
let numb = document.getElementById("myTopnav").childNodes.length;
var navbarCount= $("#myTopnav").find("a").length-1;
alert(numb);
alert(navbarCount);

  clone.setAttribute("onclick","null");
  }

  items.forEach((element) => {
    if (!uniqueItems.includes(element)) {
      uniqueItems.push(element);
    }
  });

  alert(uniqueItems);
  alert(items);

}


function removeID(closeID){
  
  
  const index = uniqueItems.indexOf(closeID.parentNode.id);
  ids.push(closeID.parentNode.id);

  if(index>-1){
    alert(uniqueItems);
    uniqueItems.splice(index, 1);
    
  }
  closeID.parentNode.remove();
}
function countAdded(){
    return items;
}
function setURL(clickID){
  var src= document.getElementById(clickID).src;
}

