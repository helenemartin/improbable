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
    var video3= $("#girl3")[0];
    if (video.paused) {
      video.play();
      video2.play();
      video3.play();
      $(".playpause img").attr('src', 'img/animedium.gif');
    } else {
      video.pause();
      video2.pause();
      video3.pause();
      $(".playpause img").attr('src', 'img/still.gif');
    }
  });
});