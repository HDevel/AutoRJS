arjs.extend({
    name:'render.addRenderShape',
    required: [
        '%arjsBase%.render.updateRenderShape'
    ],
    defines: function(obj){
        if(obj == 'redraw'){
            arjs.canvas.forEach(function(value, index){
                arjs.render.renderShapes = [[
                    0,
                    0,
                    value.canvas.width,
                    value.canvas.height,
                    index
                ]];
            })
        } else {
            var width = (obj.width * obj.scale) + obj.addPixel[1] + obj.addPixel[3],
                height = (obj.width * obj.scale) + obj.addPixel[2] + obj.addPixel[0],
                x = obj.x - (width / 2),
                y = obj.y - (height / 2)

            arjs.render.renderShapes.push([
                Math.floor(x),
                Math.floor(y),
                Math.ceil(width),
                Math.ceil(height),
                obj.canvas
            ]);
            arjs.render.updateRenderShape();
        }
    },run:function()
    {
        arjs.render.renderShapes = new Array();
    }
});