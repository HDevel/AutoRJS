arjs.extend({
    name:'init',
    required: [
        '%arjsBase%.system.createCanvas',
        '%arjsBase%.entity.add',
        '%arjsBase%.preload.image',
        '%arjsBase%.render.requestAnimationFrame',
        '%arjsBase%.render.draw',
        '%arjsBase%.resize.resize',
        '%arjsBase%.input.init',
        '%arjsBase%.debug.init'
    ],
    defines: function(info)
    {
        if(info.container == undefined){
            console.log('init required "container" param, div ID for create canvas inside')
            return
        }

        arjs.system.container = document.getElementById(info.container);

        arjs.tempCanvas = document.createElement('canvas');
        arjs.tempCanvas_ctx = arjs.tempCanvas.getContext('2d');

        arjs.system.createCanvas(0);
        arjs.render.requestAnimationFrame(arjs.render.draw)
//        arjs.input.init();
    }
});