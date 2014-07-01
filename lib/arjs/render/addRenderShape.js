arjs.extend({
    name:'render.addRenderShape',
    required: [
        '%arjsBase%.render.updateRenderShape'
    ],
    defines: function(obj){
        if(obj == 'redraw'){
            arjs.render.renderShapes = [[
                0,
                0,
                arjs.canvas.width,
                arjs.canvas.height
            ]];
        } else {

            var width = obj.width * obj.scale,
                height = obj.width * obj.scale,
                x = obj.x - (width / 2),
                y = obj.y - (height / 2),
                add = 10;
//            if(width < 100 && height < 100){
//                width = 100;
//                height = 100
//            }
            arjs.render.renderShapes.push([
                Math.floor(x - add),
                Math.floor(y - add),
                Math.ceil(width + (add*2)),
                Math.ceil(height + (add*2))
            ]);
            arjs.render.updateRenderShape();
        }
    },run:function()
    {
        arjs.render.renderShapes = new Array();
    }
});