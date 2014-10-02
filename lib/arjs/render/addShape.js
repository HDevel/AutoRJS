arjs.extend({
    name:'render.addShape',
    defines: function(shape){
        if(shape == 'redraw'){
            arjs.canvas.forEach(function(value, index){
                arjs.render.shapes = [[
                    0,
                    0,
                    value.canvas.width,
                    value.canvas.height,
                    index
                ]];
            })
        } else {
            var plus = 1; //shape size PLUS X pixel
            arjs.render.shapes.push([
                Math.floor(shape[0]) - plus,
                Math.floor(shape[1]) - plus,
                Math.ceil(shape[2]) + (plus * 2),
                Math.ceil(shape[3]) + (plus * 2),
                shape[4]
            ]);
            arjs.render.optimize();
        }
    },run:function()
    {
        arjs.render.shapes = new Array();
    }
});