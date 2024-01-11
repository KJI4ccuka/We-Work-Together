let isMuted = false;

document.addEventListener("DOMContentLoaded", function () {
    const backgroundVideo = document.getElementById("backgroundVideo");
    backgroundVideo.play();
});

function startVideos() {
    const backgroundVideo = document.getElementById("backgroundVideo");
    const myVideo = document.getElementById("myVideo");
    // Добавьте код для запуска видео, если необходимо
}

const myVideo = document.getElementById("myVideo");
const backgroundVideo = document.getElementById("backgroundVideo");
const muteIcon = document.getElementById("muteIcon");
const muteIconAdaptive = document.getElementById("muteIconAdaptive");

function toggleMute() {
    isMuted = !isMuted;

    myVideo.muted = isMuted;
    backgroundVideo.muted = isMuted;

    muteIcon.src = `./Images/MainIMG/${isMuted ? "unmuteButton" : "muteButton"}.png`;
    muteIconAdaptive.src = `./Images/MainIMG/${isMuted ? "unmuteButton" : "muteButton"}.png`;
}
