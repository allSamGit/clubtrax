

function cloneFunc(clickID) {
  

  const node = document.getElementById(clickID);
  alert(clickID);
  const el = document.createElement("a");
  const iconElem=document.createElement("i");



  var flag=false;


  items.push(node.id);

   //added code
  



    var uniqueIds = ids.filter((element, index) => {
    return ids.indexOf(element) === index;
   });


  /*//////////////////////////////////////////debug/////////////////////////////// 
   alert(node.id);
   alert(items);
   alert(ids); */
   alert(uniqueItems);
 //  alert(uniqueIds);
   
   //////////////////////////////////////////////////////////////////////////////
   if(flag==false){
   
  const clone = node.cloneNode(true);
  iconElem.setAttribute("class","fa fa-close red-color");
  iconElem.setAttribute("onclick","removeID(this)");

  clone.setAttribute("class","button-default button-slanted");
  clone.appendChild(iconElem);
  // Create a list item

  // Append the anchor to the list item

 
  // Append the list item to the list
   navList.appendChild(clone);
  clone.setAttribute("onclick","null");
  }

  items.forEach((element) => {
    if (!uniqueItems.includes(element)) {
      uniqueItems.push(element);
    }
  });
  
  alert(uniqueItems);
  alert(items);

  var navbarCount= $("#myTopnav").find("a").length-1;
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

