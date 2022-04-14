let video = document.getElementById("video1")

function retroceder() {
    video.currentTime -= 15
}

function avancar() {
    video.currentTime += 15
}

function diminuir_vel() {
    video.playbackRate -= 0.5
}

function aumentar_vel() {
    video.playbackRate += 0.5

}

function play() {
    video.play();
    
    console.log(video.play());


}

function pause() {
    video.pause()
    video.currentTime = 0
    video.playbackRate = 0
}