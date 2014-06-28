arjs.extend({
    name:'init',
    required: [
        '%arjsBase%.entity.add',
        '%arjsBase%.preload.image',
        '%arjsBase%.render.requestAnimationFrame',
        '%arjsBase%.render.draw',
        '%arjsBase%.input.start'
    ],
    defines: function(info)
    {
        if(info.canvas == undefined){
            console.log('init required "canvas" param (id)')
            return
        }
        arjs.canvas = document.getElementById(info.canvas);
        arjs.canvas_ctx = arjs.canvas.getContext("2d");
        arjs.render.requestAnimationFrame(arjs.render.draw)
        arjs.input.start()
//        arjs.resize();
    }
});