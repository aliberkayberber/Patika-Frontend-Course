function ASound() {
    let sound = new Audio("./Sounds/boom.wav");
    sound.play();
}
function SSound() {
    let sound = new Audio("./Sounds/clap.wav");
    sound.play();
}
function DSound() {
    let sound = new Audio("./Sounds/hihat.wav");
    sound.play();
}
function FSound() {
    let sound = new Audio("./Sounds/kick.wav");
    sound.play();
}
function GSound() {
    let sound = new Audio("./Sounds/openhat.wav");
    sound.play();
}
function HSound() {
    let sound = new Audio("./Sounds/ride.wav");
    sound.play();
}
function JSound() {
    let sound = new Audio("./Sounds/snare.wav");
    sound.play();
}
function KSound() {
    let sound = new Audio("./Sounds/tink.wav");
    sound.play();
}
function LSound() {
    let sound = new Audio("./Sounds/tom.wav");
    sound.play();
}



window.addEventListener('keydown', (e) => {
    
    if(e.key.toLowerCase() == "a") {
        ASound();
    } else if(e.key.toLowerCase() == "s") {
        SSound();
    } else if(e.key.toLowerCase() == "d") {
        DSound();
    } else if(e.key.toLowerCase() == "f") {
        FSound();
    } else if(e.key.toLowerCase() == "g") {
        GSound();
    } else if(e.key.toLowerCase() == "h") {
        HSound();
    } else if(e.key.toLowerCase() == "j") {
        JSound();
    } else if(e.key.toLowerCase() == "k") {
        KSound();
    } else if(e.key.toLowerCase() == "l") {
        LSound();
    } else {
        
    }
})






