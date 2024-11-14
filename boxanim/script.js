var play = document.getElementById('playBtn'),
        pause = document.getElementById('pauseBtn'),
        box = document.getElementById('box');
    
    play.addEventListener('click', function(){
        box.style.animationPlayState = "running";
    });
    
    pause.addEventListener('click', function(){
        box.style.animationPlayState = "paused";
    });
