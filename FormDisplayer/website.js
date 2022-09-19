function cloneFunc(clickID) {
  
    const node = document.getElementById(clickID);
    const el = document.createElement("a");
    const span=document.createElement("span");
    setURL(generatedURL);
  
    var flag=false;
  
    items.forEach((element) => {
      if (!uniqueItems.includes(element)) {
        uniqueItems.push(element);
      }
    });
    
     //added code
     items.push(node.id);
   
     items.forEach((item, i) => {
  //  clone.setAttribute('id',`menu-${i + 1}`);
    span.setAttribute('id',`id-${i + 1}`);
     
  
     /*let id = document.getElementsByTagName("span")[i].id;
      if((clone.id.includes(`menu-${i + 1}`))){
        uniqueItems.splice(i+1, 1);
        //uniqueIds.splice(i+1,1);
        ids.splice(i+1,1);
      } */
     
  
      if(uniqueItems[i+1]==node.id){
     alert("Duplicated detected");
     flag=true;
    }
      
    });
    
   /* if(ids.includes(node.id)){
        uniqueItems.slice(0,-1);
        flag=false;
      } */
   
  
  
  
    
    
   
  
    
  
  
  
    var uniqueIds = ids.filter((element, index) => {
      return ids.indexOf(element) === index;
  });
     
    ////////////////////////////////////////////debug/////////////////////////////// 
     alert(node.id);
     alert(items);
     alert(uniqueItems);
     alert(uniqueIds);
     alert(ids);
     //////////////////////////////////////////////////////////////////////////////
     if(flag==false){
     
    const clone = node.cloneNode(true);
    span.setAttribute("class",".closebutton");
    span.textContent="X";
    span.setAttribute("onclick","removeID(this)");
    span.setAttribute("value","close");
    
    
    clone.classList.add("menu-items");
    clone.appendChild(span);
    // Create a list item
    const li = document.createElement("li");
    // Append the anchor to the list item
    li.appendChild(clone);
   
    // Append the list item to the list
    navList.appendChild(li);
    clone.setAttribute("onclick","null");
    }
  
  }
      