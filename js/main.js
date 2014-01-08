// $(function() {
//   $(".playpause").click(function(){
//     var video= $("#girl")[0];
//     if (video.paused) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   });
// });

// $(function() {
//   $(".playpause").click(function(){
//     var video= $("#graph")[0];
//     if (video.paused) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   });
// });

$(function() {
  $(".playpause").click(function(){
    var video= $("#girl")[0];
    var video2= $("#graph")[0];
    if (video.paused) {
      video.play();
      video2.play();
      $(".playpause img").attr('src', 'img/animedium.gif');
    } else {
      video.pause();
      video2.pause();
      $(".playpause img").attr('src', 'img/still.gif');
    }
  });
});