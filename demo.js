
$(function () {
    var clickSound = new Audio();
    clickSound.src = "./click.mp3";
    
    $(".keyButton, .sound").mousedown(function(){
       clickSound.play(); 
       /*
       sound function needs to stop sound when another key is clicked
       */
    });


});
