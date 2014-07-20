arjs.extend({
    name:'init',
    required: [
        '%arjsBase%.system.createCanvas',
        '%arjsBase%.system.requestAnimationFrame',
        '%arjsBase%.render.init',
        '%arjsBase%.preload.init',
        '%arjsBase%.entity.image.init'
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
    }
});