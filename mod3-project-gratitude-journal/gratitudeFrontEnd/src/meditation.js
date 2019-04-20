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

let click = 0
play.addEventListener("click", function(e) {
    e.preventDefault()
    checkPlaying(song);

    if(click % 2 == 0){
        document.body.style.backgroundImage = "url('assets/images/images (1).jpeg')"
        video.style.display = 'block'
    } else {
        document.body.style.backgroundImage = "url('assets/video/rain.mp4')"
        video.style.display = 'block'
    }
});

const checkPlaying = song => {
    if (song.paused) {
        song.play();
        video.play();
        play.src = "assets/svg/pause.svg";
        document.body.style.backgroundImage = "url('assets/images/images (1).jpeg')"
    } else {
        song.pause();
        video.pause();
        play.src = "assets/svg/play.svg";
        video.style.display = "none"
        meditationContainer.style.display = "block"
        // document.body.style.backgroundImage = "url('assets/images/5105.jpg')"
    }
};

