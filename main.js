var texts = [];
var n = 2;


document.addEventListener("DOMContentLoaded", function(event) {
    for(var i = 1; i <= n; ++i) {
        texts.push(document.getElementById('text' + i.toString()));
    }
});

window.addEventListener('scroll', function() {
    var ratio = 0.03 + window.pageYOffset / window.innerHeight;

    for(var i = 0; i < n; ++i) {
        if (i % 2 == 0) {
            // move right
            texts[i].style.left = delta(ratio) * window.innerWidth;
        } else {
            // move left
            texts[i].style.right = delta(ratio) * window.innerWidth;
        }
    }

    console.log('scrolling ' + ratio);
});

function delta(progress) {
    return progress * progress * progress;
}