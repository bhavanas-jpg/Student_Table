const adminDiv =  document.querySelector(".admin-avatar");
const manufacturerDiv = document.querySelector(".manufacturer-avatar")
const title = document.querySelector(".title");

const welcomeMsg = name =>{
    if(name === 'Admin'){
        adminDiv.style.border="3px solid green";
        adminDiv.style.width="100px";
        adminDiv.style.height="100px";
        adminDiv.style.borderRadius="50%";
        manufacturerDiv.style.border="none";
        title.innerText = `Welcome ${name}`
    } 
    else if(name === 'Manufacturer'){
        adminDiv.style.border="none";
        manufacturerDiv.style.border="3px solid green";
        manufacturerDiv.style.width="100px";
        manufacturerDiv.style.height="100px";
        manufacturerDiv.style.borderRadius="50%";
        title.innerText = `Welcome ${name}`
    }
    else{
        adminDiv.style.border="none"; 
        manufacturerDiv.style.border="none"
    }
       

      
    
        
      
    
}