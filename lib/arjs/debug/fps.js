arjs.extend({
    name:'debug.fps',
    defines: function(time)
    {
//        console.log(time);
        if(arjs.debug.totalFrames < 100){
            arjs.debug.totalTime += time;
            arjs.debug.totalFrames++;
        } else {
            console.log(1000/(arjs.debug.totalTime/arjs.debug.totalFrames));
            arjs.debug.totalTime = 0;
            arjs.debug.totalFrames = 0;
        }
    },
    run: function ()
    {
        arjs.debug.totalTime = 0;
        arjs.debug.totalFrames = 0;
    }
});