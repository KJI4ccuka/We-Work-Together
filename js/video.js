var isMuted = false;

var myVideo = document.getElementById("myVideo");
var backgroundVideo = document.getElementById("backgroundVideo");
var muteIcon = document.getElementById("muteIcon");
var muteIconAdaptive = document.getElementById("muteIconAdaptive");

function toggleMute() {
    isMuted = !isMuted;

    myVideo.muted = isMuted;
    backgroundVideo.muted = isMuted;

    if (isMuted) {
        muteIcon.src = "./Images/MainIMG/unmuteButton.png";
    } else {
        muteIcon.src = "./Images/MainIMG/muteButton.png";
    }
    if (isMuted) {
        muteIconAdaptive.src = "./Images/MainIMG/unmuteButton.png";
    } else {
        muteIconAdaptive.src = "./Images/MainIMG/muteButton.png";
    }
}
