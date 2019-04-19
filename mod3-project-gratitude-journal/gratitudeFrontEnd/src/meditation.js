const song = document.querySelector(".song");
const play = document.querySelector(".play");
const video = document.querySelector(".vid-container video");
const sounds = document.querySelectorAll(".sound-picker button");

sounds.forEach(sound => {
    sound.addEventListener("click", function() {
        song.src = this.getAttribute("data-sound");
        video.src = this.getAttribute("data-video");
        checkPlaying(song);
    });
});

play.addEventListener("click", function() {
    checkPlaying(song);
});


const checkPlaying = song => {
    if (song.paused) {
        song.play();
        video.play();
        play.src = "assets/svg/pause.svg";
    } else {
        song.pause();
        video.pause();
        play.src = "assets/svg/play.svg";
    }
};
