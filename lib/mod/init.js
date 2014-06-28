arjs.extend({
    name:'init',
    required: [
        '%arjsBase%preload.image',
        '%arjsBase%render.requestAnimationFrame',
        '%arjsBase%render.render'
    ],
    defines: function(info)
    {
        if(info.canvas == undefined){
            console.log('init required "canvas" param (id)')
            return
        }
        arjs.canvas = document.getElementById(info.canvas);
        arjs.canvas_ctx = arjs.canvas.getContext("2d");
        arjs.render.requestAnimationFrame(arjs.render.render)
//        arjs.resize();
    }
});