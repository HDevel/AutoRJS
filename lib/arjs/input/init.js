arjs.extend({
    name:'input.init',
    required: [
        '%arjsBase%.input.add',
        '%arjsBase%.input.getAlpha',
        '%arjsBase%.input.interaction'
    ],
    defines: function()
    {
        arjs.canvas.addEventListener("click", function(e){
            var x = e.x - arjs.canvas.offsetLeft
            var y = e.y - arjs.canvas.offsetTop
            var color = arjs.inputCanvas_ctx.getImageData(x/arjs.system.scale, y/arjs.system.scale, 1, 1).data;
            arjs.input.interaction(x,y,[color[0],color[1],color[2],color[3]]);
//            arjs.findEntityByColorId(parseInt(color[0].toString() + color[1].toString() + color[2].toString()))
        });

    },
    run: function ()
    {
        arjs.inputCanvas = document.createElement('canvas');
        arjs.inputCanvas_ctx = arjs.inputCanvas.getContext('2d');
        //enable to see Input canvas on screen;
//        document.getElementsByTagName("body")[0].appendChild(arjs.inputCanvas);
    }
});