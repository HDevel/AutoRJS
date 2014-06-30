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
                y = obj.y - (height / 2);
            arjs.render.renderShapes.push([
                x - 1,
                y - 1,
                width + 2,
                height + 2
            ]);
            arjs.render.updateRenderShape();
        }
    },run:function()
    {
        arjs.render.renderShapes = new Array();
    }
});