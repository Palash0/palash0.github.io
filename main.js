var texts = [];
var n = 4;
var pos = 0;


// TODO: change crewmate color everytime
// TODO: add more sections

document.addEventListener("DOMContentLoaded", function(event) {
    for(var i = 1; i <= n; ++i) {
        texts.push(document.getElementById('text' + i.toString()));
    }

    var interval = window.setInterval(handleAnimations, 10);
    var media = window.matchMedia("(max-width: 900px)");
    handleResponsive(media);
    media.addListener(handleResponsive);
});

function handleResponsive(media) {
    if (media.matches) {
        // less than 900px
        var header = document.getElementById("name");
        header.innerHTML = "PT";
    } else {
        var header = document.getElementById("name");
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
            pos = -2 * crew.clientWidth;
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
    var ratio = 0.03 + window.pageYOffset / window.innerHeight;

    for(var i = 0; i < n; ++i) {
        if (i % 2 == 0) {
            // move right
            texts[i].style.left = delta(ratio) * window.innerWidth;
            texts[i].style['transform'] = "skewX(-" + ratio * 20 + "deg)";
        } else {
            // move left
            texts[i].style.right = delta(ratio) * window.innerWidth;
            texts[i].style['transform'] = "skewX(" + ratio * 20 + "deg)";
        }
    }

    // console.log('scrolling ' + ratio);
});

function delta(progress) {
    return 1.5 * progress * progress * progress;
}