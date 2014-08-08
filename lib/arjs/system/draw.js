arjs.extend({
    name:'system.draw',
    defines: function()
    {
        if(arjs.render.shapes != undefined && arjs.render.shapes.length != 0){
            arjs.render.shapes.forEach(function(value, index){
                var sL = value[0],
                    sT = value[1],
                    sR = value[0] + value[2],
                    sB = value[1] + value[3];

                if(!arjs.canvas[value[4]]){
                    return
                }

                arjs.tempCanvas.width = value[2];
                arjs.tempCanvas.height = value[3];

                arjs.canvas[value[4]].canvas_ctx.clearRect(value[0], value[1], value[2], value[3]);
                function draw(obj){
                    if(!obj.visible){return}
                    if(obj.opacity == 0){return}
                    var childList = new Object();
                    for(var c in obj.child)
                    {
                        var child = obj.child[c];
                        if(childList[child.layer] == undefined){
                            childList[child.layer] = new Array();
                        }
                        childList[child.layer].push(child);
                    }
                    if(obj.name != 'root'){
                        var eL = obj.renderBox[0],
                            eT = obj.renderBox[1],
                            eR = obj.renderBox[0] + obj.renderBox[2],
                            eB = obj.renderBox[1] + obj.renderBox[3];
                        if(
                            sL <= eR &&
                            sT <= eB &&
                            sR >= eL &&
                            sB >= eT &&
                            obj.canvas == value[4]
                            )
                        {
                            arjs.entity[obj.type].draw(obj, arjs.tempCanvas_ctx, value[0], value[1])
                        }
                    }
                    for(var c in childList){
                        childList[c].forEach(function(value,id){
                            draw(value);
                        })
                    }

                }
                draw(arjs.entity.list.all.root);

                arjs.canvas[value[4]].canvas_ctx.drawImage(arjs.tempCanvas,value[0],value[1])
                arjs.render.shapes[index] = undefined;
            });
            arjs.render.shapes = arjs.system.clearArray(arjs.render.shapes);
        } else {
            if(arjs.system.freeCalculating && typeof arjs.system.freeCalculating[0] == 'function'){
                arjs.system.freeCalculating[0]();
                arjs.system.freeCalculating = arjs.system.freeCalculating.slice(1);
            }
        }
    },
    run: function()
    {
        arjs.system.freeCalculating = new Array();
    }
});