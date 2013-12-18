$(function() {
  $(".playpause").click(function(){
    var video= $("#girl")[0];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});