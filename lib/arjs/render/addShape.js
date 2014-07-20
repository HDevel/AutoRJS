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

            arjs.render.shapes.push([
                Math.floor(shape[0]),
                Math.floor(shape[1]),
                Math.ceil(shape[2]),
                Math.ceil(shape[3]),
                shape[4]
            ]);
            arjs.render.optimize();
        }
    },run:function()
    {
        arjs.render.shapes = new Array();
    }
});