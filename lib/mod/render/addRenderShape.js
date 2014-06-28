arjs.extend({
    name:'render.addRenderShape',
    required: [
        '%arjsBase%render.updateRenderShape'
    ],
    defines: function(obj){
        arjs.render.renderShapes.push([
            obj.x,
            obj.y,
            obj.crop[2],
            obj.crop[3]
        ]);
        arjs.render.updateRenderShape();
    },run:function()
    {
        arjs.render.renderShapes = new Array();
    }
});