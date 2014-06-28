arjs.extend({
    name:'render.addRenderShape',
    required: [
        '%arjsBase%render.updateRenderShape'
    ],
    defines: function(obj){
        var width = obj.crop[2] * obj.scale,
            height = obj.crop[3] * obj.scale,
            x = obj.x - (width / 2),
            y = obj.y - (height / 2);
        arjs.render.renderShapes.push([
            x,
            y,
            width,
            height
        ]);

        arjs.render.updateRenderShape();
    },run:function()
    {
        arjs.render.renderShapes = new Array();
    }
});