arjs.extend({
    name:'render.requestAnimationFrame',
    defines: function(timestamp){
        if(typeof timestamp == 'function')
        {
            arjs.render.frameCallback.push(timestamp);
            return
        }
        var previousFrameTime = timestamp - arjs.render._totalRAFTime;
        arjs.render._totalRAFTime = timestamp;

        arjs.debug.fps(previousFrameTime);

        for(var f in arjs.render.frameCallback)
        {
            arjs.render.frameCallback[f](previousFrameTime)
        }
        requestAnimationFrame(arjs.render.requestAnimationFrame);
    },
    run: function()
    {
        arjs.render._totalRAFTime = null;
        arjs.render.frameCallback = new Array();
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        requestAnimationFrame(arjs.render.requestAnimationFrame);
    }
});