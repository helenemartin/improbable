$(function() {
  $(".playpause").click(function(){
    var video= $("#girl")[0];
    if (video.paused) {
      video.play();
      $(".playpause img").attr('src', '../img/animedium.gif');
    } else {
      video.pause();
      $(".playpause img").attr('src', '../img/still.gif');
    }
  });
});