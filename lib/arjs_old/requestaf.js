arjs.requestAF = function(){
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    var totalTime = null;
    function step(timestamp) {
        if (totalTime === null) totalTime = timestamp;
        timestamp -= totalTime;
        totalTime += timestamp;

        arjs.render();

        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}