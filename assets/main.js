    var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
    var slider = document.getElementsByClassName('slider-parent')[0];
    sliderTrigger.addEventListener( "click" , function(el){
        if(slider.classList.contains("active")){
        slider.classList.remove("active");
        }else{
        slider.classList.add("active");
        }
    });


var fullVideo = document.getElementsByClassName("video-full");
var vidz = document.getElementById("vidz");
var fullVideoPlay = document.getElementsByClassName('full-video-play')[0];
var play  = document.getElementsByClassName('btn-play')[0];
play.addEventListener( "click" , function(el){
    console.log("Clicked")
    vidz.classList.remove('video-full')
    console.log("removed")
    vidz.classList.add("full-video-play");
});


