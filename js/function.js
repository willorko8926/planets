var audio, playbtn,mutebtn,seek_bar;
function initAudio(){
  audio = new Audio();
  audio.src = "audio/music.mp3";
  audio.loop = true;
  audio.play();
  playbtn = document.getElementById("playpausebtn");
  mutebtn = document.getElementById("mutebtn");
  playbtn.addEventListener("click",playPause);
  mutebtn.addEventListener("click",mute);

  function playPause(){
    if (audio.paused) {
      audio.play();
      playbtn.style.background="url(../image/pause.png)";
    } else {
      audio.pause();
      playbtn.style.background="url(../image/play.jpg)";
    }

  }
  function mute(){
    if (audio.muted) {
      audio.muted = false;
      mutebtn.style.background="url(../image/volu.jpg)";
    } else {
      audio.muted = true;
      mutebtn.style.background="url(../image/speaker_no.png)";
    }


  }
}
window.addEventListener("load",initAudio);
