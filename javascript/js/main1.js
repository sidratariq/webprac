
document.addEventListener("DOMContentLoaded",function(event){
    function sayHello(){
        console.log(event);
        this.textContent ="said it";

         name = document.getElementById("name").value;
     
         if(name ==="student"){
             var title = document.querySelector("#title").textContent;
             title += "loving it"; 
             document.querySelector("#title").textContent = title;
         }
     
         var message = "<h2> " + name +"!</h2>";
     
         document.getElementById("content").innerHTML = message;
     
         
     
         // document.getElementById("content").textContent = name;
         // alert(name);
          // console.log(document.getElementById("name").value);
         
     } 
     
     // document.querySelector("button").addEventListener("click",sayHello);
     
     document.querySelector("button").onclick = sayHello; 
     document.querySelector("body").addEventListener("mousemove",function(event){
       if(event.shiftKey === true){
        console.log("x:" +event.clientX);
        console.log("y:" +event.clientY);
    }
     });


});

