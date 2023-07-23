
var drums = document.querySelectorAll(".drum").length;

for(var i=0; i<drums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        
        var audio = new Audio('sounds/' + i + '.mp3');  
        audio.play();        

    })
}