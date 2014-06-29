arjs.extend({
    name:'resize',
    defines: function(width, height, scale){
        scale == undefined ? scale = window.devicePixelRatio : false;
        if(arjs.canvas == undefined && arjs.inputCanvas == undefined){
            return
        }
        arjs.canvas.width = width * scale;
        arjs.canvas.height = height * scale;
        arjs.inputCanvas.width = width;
        arjs.inputCanvas.height = height;
        arjs.canvas.style.width = arjs.inputCanvas.style.width = width + 'px';
        arjs.canvas.style.height = arjs.inputCanvas.style.height = height + 'px';
        arjs.system.width = width * scale;
        arjs.system.height = height * scale;
        arjs.system.scale = scale;
        arjs.render.addRenderShape('redraw');
    },run:function()
    {
        arjs.system.width = 0;
        arjs.system.height = 0;
        arjs.system.scale = 1;
    }
});