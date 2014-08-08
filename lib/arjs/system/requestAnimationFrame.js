arjs.extend({
    name:'system.requestAnimationFrame',
    defines: function(timestamp, everyT){
        if(typeof timestamp == 'function')
        {
            arjs.system.frameCallback.push({
                function:timestamp
                ,time: 0
                ,every: everyT ? everyT : 0
            });
            return
        }
        var previousFrameTime = timestamp - arjs.system._totalRAFTime;
        arjs.system._totalRAFTime = timestamp;

        arjs.system.frameCallback.forEach(function(value,index){
            value.time += previousFrameTime;
            if(value.every == 0){
                value.function(previousFrameTime * 0.001)
            } else {
                while(value.time >= value.every){
                    value.time -= value.every;
                    value.function((value.every + value.time) * 0.001)
                }
            }
        })
        arjs.system.draw();
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