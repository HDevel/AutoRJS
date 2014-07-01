arjs.extend({
    name:'init',
    required: [
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
        if(info.canvas == undefined){
            console.log('init required "canvas" param (id)')
            return
        }

        arjs.tempCanvas = document.createElement('canvas');
        arjs.tempCanvas_ctx = arjs.tempCanvas.getContext('2d');
        arjs.canvas = document.getElementById(info.canvas);
        arjs.canvas_ctx = arjs.canvas.getContext('2d');
        arjs.resize(window.innerWidth,window.innerHeight);
        arjs.render.requestAnimationFrame(arjs.render.draw)
        arjs.input.init();

//        document.getElementsByTagName("body")[0].appendChild(arjs.tempCanvas);
//        arjs.resize();
    }
});