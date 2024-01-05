window.addEventListener("load", function(){
     
   window.jumpscareNaranja = function() {
    console.log("holaaa")
    var jumpscare = document.getElementById("jumpscare")
    jumpscare.style.visibility="visible";
    var audio = document.getElementById("scream");
    audio.play(); 
   }
})
