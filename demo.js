
$(function () {
    var clickSound = new Audio();
    clickSound.src = "./click.mp3";
    
    $(".clickSound").mousedown(function(){
        clickSound.load();
        clickSound.play(); 
       /*
       sound function needs to stop sound when another key is clicked
       */
    });

});
