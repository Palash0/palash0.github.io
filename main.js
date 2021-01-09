var texts = [];
var pos = 0;


// TODO: make other page work

document.addEventListener("DOMContentLoaded", function(event) {
    texts = document.getElementsByClassName("text");
    setRandomColor();

    var ANIMATION_SPEED = 10;
    var interval = window.setInterval(handleAnimations, ANIMATION_SPEED);

    var media = window.matchMedia("(max-width: 900px)");
    handleResponsive(media);
    media.addListener(handleResponsive);
});

function handleResponsive(media) {
    if (media.matches) {
        // less than 900px
        var header = document.getElementById("title-name");
        header.innerHTML = "PT";
    } else {
        var header = document.getElementById("title-name");
        header.innerHTML = "Palash Taneja   ";
    }
}

function handleAnimations() {
    moveAmongUs();

    function moveAmongUs() {
        var crew = document.getElementById("crew");
        
        pos++;

        if (pos / 2 >= window.innerWidth) {
            console.log("entered");
            pos = - crew.clientWidth;
            setRandomColor();
        }

        // console.log(moveSine(pos));
        crew.style.bottom = moveSine(pos) + 'px';
        crew.style.right = pos / 2 + 'px';

    }

    function moveSine(iter) {
        var toDegree = 180 / Math.PI;
        var angle = iter * toDegree / 1000;
        // returns sine wave pos for that iteration
        return 20 * Math.sin(angle) + 20 + Math.random() % 10;
    }
}


window.addEventListener('scroll', function() {
    var scrollY = window.pageYOffset;
    var ratio = 0.03 + scrollY / window.innerHeight;

    for(var i = 0; i < texts.length; ++i) {
        if (i % 2 == 0) {
            // move right
            texts[i].style.left = delta(ratio) * window.innerWidth;
            texts[i].style['transform'] = "skewX(-" + ratio * 10 + "deg)";
        } else {
            // move left
            texts[i].style.right = delta(ratio) * window.innerWidth;
            texts[i].style['transform'] = "skewX(" + ratio * 10 + "deg)";
        }
    }

    var text2 = document.getElementsByClassName('texts-page-2');
    for(var i = 0; i < text2.length; ++i) {
        if (i % 2 == 0) {
            // move left

        }
    }

    // console.log('scrolling ' + ratio);
});

function delta(progress) {
    return 1.5 * progress * progress * progress;
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

function setRandomColor() {
    var colors = [
            { base: "#132ed1", shade: "#09158e" },
            { base: "#d6e0f0", shade: "#8394bf" },
            { base: "#3f474e", shade: "#1e1f26" },
            { base: "#38fedc", shade: "#24a8be" },
            { base: "#c51111", shade: "#7a0838"}
    ];

    var color = choose(colors);

    document.documentElement.style.setProperty('--base-color', color.shade);
    document.documentElement.style.setProperty('--lighter-base-color', color.base);
}