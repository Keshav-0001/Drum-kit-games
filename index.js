


var numberOfdrums = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfdrums; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function clickHandle(){
    
var buttonInnerHtml = this.innerHTML;
makeSound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);

});
}

document.addEventListener("keypress",function(event){

makeSound(event.key);
buttonAnimation(event.key);

});


function makeSound(key){

    switch (key) {
        case "w":
         var Tom1 = new Audio('sounds/tom-1.mp3');
         Tom1.play();
         break;
    
         case "s":
            var Tom2 = new Audio('sounds/tom-2.mp3');
            Tom2.play();
            break;
    
    
             case "a":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
    
            case "d":
            var Snare = new Audio('sounds/snare.mp3');
            Snare.play();
            break;
    
            case "j":
            var kick = new Audio('sounds/kick.mp3');
            kick.play();
            break;
    
            case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
    
            case "l":
            var Tom4 = new Audio('sounds/tom-4.mp3');
            Tom4.play();
            break;
            
    
        default: console.log(buttonInnerHtml);
            
            break;
    }


}

function buttonAnimation(currentkey){

var activeButton = document.querySelector("."+currentkey);
activeButton.classList.add("pressed");
setTimeout(function(){

    activeButton.classList.remove("pressed")
}, 100);

}
