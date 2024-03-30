for(let i = 0; i < document.querySelectorAll(".drum").length; i++){

document.querySelectorAll("button")[i].addEventListener("click",function() {
    sound(this.innerHTML);
    keyAnimation(this.innerHTML);
});
}
document.addEventListener("keydown",function(params){
    sound(params.key);
    keyAnimation(params.key);
})

function sound(key){
    let audio;
    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

function keyAnimation(value){
    let need = "." + value;
    document.querySelector(need).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(need).classList.remove("pressed");
    },100);

}