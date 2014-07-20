arjs.extend({
    name:'system.draw',
    defines: function()
    {
        arjs.render.shapes.forEach(function(value, index){
            var sL = value[0],
                sT = value[1],
                sR = value[0] + value[2],
                sB = value[1] + value[3];

            arjs.tempCanvas.width = value[2];
            arjs.tempCanvas.height = value[3];

            arjs.canvas[value[4]].canvas_ctx.clearRect(value[0], value[1], value[2], value[3]);

            for(var l in arjs.entity.list.canvas[value[4]])
            {
                var layer = arjs.entity.list.canvas[value[4]][l]
                for(var name in layer)
                {
                    var entity = layer[name];
                    var eL = entity.renderBox[0],
                        eT = entity.renderBox[1],
                        eR = entity.renderBox[0] + entity.renderBox[2],
                        eB = entity.renderBox[1] + entity.renderBox[3];

                    if(
                        sL <= eR &&
                        sT <= eB &&
                        sR >= eL &&
                        sB >= eT
                        )
                    {
                        arjs.entity[entity.type].draw(entity, arjs.tempCanvas_ctx, value[0], value[1])
                    }
                }
            }

            arjs.canvas[value[4]].canvas_ctx.drawImage(arjs.tempCanvas,value[0],value[1])
            arjs.render.shapes[index] = undefined;
        });
        arjs.render.shapes = arjs.system.clearArray(arjs.render.shapes);
    },
    run: function()
    {

    }
});