var elArr = document.querySelectorAll("button");
var len = elArr.length;

// Code for adding sound for clicking action
for(var i = 0; i < len; ++i){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation (buttonInnerHtml);
    });
}

// Code for adding sound for keydown action
document.addEventListener("keydown", function() {
        makeSound(event.key);
        buttonAnimation (event.key);
    }
);

function makeSound(key) {
        switch(key) {
            case "w":
                var wSound = new Audio('sounds/tom-1.mp3');
                wSound.play();
                break;
            case "a":
                var aSound = new Audio('sounds/tom-2.mp3');
                aSound.play();
                break;
            case "s":
                var sSound = new Audio('sounds/tom-3.mp3');
                sSound.play();
                break;
            case "d":
                var dSound = new Audio('sounds/tom-4.mp3');
                dSound.play();
                break;
            case "j":
                var jSound = new Audio('sounds/snare.mp3');
                jSound.play();
                break;
            case "k":
                var kSound = new Audio('sounds/kick-bass.mp3');
                kSound.play();
                break;
            case "l":
                var lSound = new Audio('./sounds/crash.mp3');
                lSound.play();
                break;
            default: 
                console.log(key);
        }
}

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout (function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

