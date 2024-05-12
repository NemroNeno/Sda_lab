for(var i=0;i<7;i++){

 document.querySelectorAll(".drum")[i].addEventListener("click",function(){


  
   makesound(this.innerHTML);


 });


}

document.addEventListener("keydown", function(event){

    makesound(event.key);
})

function makesound(key){


    switch(key){

        case "w":
         
              var t= new Audio("sounds./crash.mp3");
              t.play();
        
        
         break;
         case "s":
         
              var t= new Audio("sounds./kick-bass.mp3");
              t.play();
        
        
         break;
         case "d":
         
              var t= new Audio("sounds./snare.mp3");
              t.play();
        
        
         break;
         case "a":
         
         var t= new Audio("sounds./tom-1.mp3");
         t.play();
        
        
        break;
        case "j":
         
        var t= new Audio("sounds./tom-2.mp3");
        t.play();
        
        
        break;
        case "k":
         
        var t= new Audio("sounds./tom-3.mp3");
        t.play();
        
        
        break;
        case "l":
         
        var t= new Audio("sounds./tom-4.mp3");
        t.play();
        
        break;
        
        
        
        
            default:
        
           }



}