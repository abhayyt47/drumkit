
for (var a = 0; a <  document.querySelectorAll(".drum"); a++) {
    document.querySelectorAll(".drum")[a].addEventListener("click", getclick)

    function getclick() {
        let beat = this.innerHTML
       playmusic(this.innerHTML)
       buttonAnimation(beat)
    }

}    


    document.addEventListener("keypress", function(event){
                let music=   event.key;
                  playmusic(music)
                  buttonAnimation(music)
            //     switch (music) {
            // case "w": var audio = new Audio("sounds/crash.mp3");
            //     audio.play()


            //     break;
            // case "a": var audio = new Audio("sounds/kick-bass.mp3");
            //     audio.play()


            //     break;
            // case "s": var audio = new Audio("sounds/snare.mp3");
            //     audio.play()


            //     break;
            // case "d": var audio = new Audio("sounds/tom-1.mp3");
            //     audio.play()


            //     break;
            // case "j": var audio = new Audio("sounds/tom-2.mp3");
            //     audio.play()


            //     break;
            // case "k": var audio = new Audio("sounds/tom-3.mp3");
            //     audio.play()


            //     break;
            // case "l": var audio = new Audio("sounds/tom-4.mp3");
            //     audio.play()


            //     break;



            // default:
            //     break; 
            //     }
    } )
  












function playmusic(key){
    switch (key) {
        case "w": var audio = new Audio("sounds/crash.mp3");
            audio.play()


            break;
        case "a": var audio = new Audio("sounds/kick-bass.mp3");
            audio.play()


            break;
        case "s": var audio = new Audio("sounds/snare.mp3");
            audio.play()


            break;
        case "d": var audio = new Audio("sounds/tom-1.mp3");
            audio.play()


            break;
        case "j": var audio = new Audio("sounds/tom-2.mp3");
            audio.play()


            break;
        case "k": var audio = new Audio("sounds/tom-3.mp3");
            audio.play()


            break;
        case "l": var audio = new Audio("sounds/tom-4.mp3");
            audio.play()


            break;



        default:
            break; 
            }
}   


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  