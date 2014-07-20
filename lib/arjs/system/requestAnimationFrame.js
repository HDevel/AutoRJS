arjs.extend({
    name:'system.requestAnimationFrame',
    defines: function(timestamp){
        if(typeof timestamp == 'function')
        {
            arjs.system.frameCallback.push(timestamp);
            return
        }
        var previousFrameTime = timestamp - arjs.system._totalRAFTime;
        arjs.system._totalRAFTime = timestamp;

        for(var f in arjs.system.frameCallback)
        {
            arjs.system.frameCallback[f](previousFrameTime)
        }
        requestAnimationFrame(arjs.system.requestAnimationFrame);
    },
    run: function()
    {
        arjs.system._totalRAFTime = null;
        arjs.system.frameCallback = new Array();
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        requestAnimationFrame(arjs.system.requestAnimationFrame);
    }
});