$(function() {
  $(".playpause").click(function(){
    var video= $("#graph")[0];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});