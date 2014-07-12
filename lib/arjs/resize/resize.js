arjs.extend({
    name:'resize',
    defines: function(width, height, scale){
        scale == undefined ? scale = window.devicePixelRatio : false;

        arjs.system.width.real = width * scale;
        arjs.system.width.logic = width;
        arjs.system.height.real = height * scale;
        arjs.system.height.logic = height;

        arjs.system.scale = scale;

        arjs.canvas.forEach(function(val){

            val.canvas.width = arjs.system.width.real;
            val.canvas.height = arjs.system.height.real;

            val.inputCanvas.width = arjs.system.width.logic;
            val.inputCanvas.height = arjs.system.height.logic;

            var style = '' +
                'width: ' + arjs.system.width.logic + 'px; ' +
                'height: ' + arjs.system.height.logic + 'px; ' +
                'top: 0px; ' +
                'left: 0px; ' +
                'position: absolute;';

            val.canvas.setAttribute('style', style);
            val.inputCanvas.setAttribute('style', style);

            val.canvas.attr = val.inputCanvas.style.height = arjs.system.height.logic + 'px';

        })

//        arjs.render.addRenderShape('redraw');
    },run:function()
    {
        arjs.system.width = {
            real: 0,
            logic: 0
        };
        arjs.system.height = {
            real: 0,
            logic: 0
        };
        arjs.system.scale = 1;
    }
});