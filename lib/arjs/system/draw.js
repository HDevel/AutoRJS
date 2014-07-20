arjs.extend({
    name:'system.draw',
    defines: function()
    {
        arjs.render.shapes.forEach(function(value, index){
            for(var name in arjs.entity.list.all)
            {
                var entity = arjs.entity.list.all[name];
                arjs.entity[entity.type].draw(entity, arjs.canvas[0].canvas_ctx, 0, 0)
            }
            arjs.render.shapes[index] = undefined;
        });
        arjs.render.shapes = arjs.system.clearArray(arjs.render.shapes);




//        for(var i = 0; i < arjs.render.renderShapes.length; i++){
//            if(arjs.render.renderShapes[i] != undefined){
//                var shapeX = Math.floor(arjs.render.renderShapes[i][0]),
//                    shapeY = Math.floor(arjs.render.renderShapes[i][1]),
//                    shapeWidth = Math.ceil(arjs.render.renderShapes[i][2]),
//                    shapeHeight = Math.ceil(arjs.render.renderShapes[i][3]),
//                    canvas = arjs.render.renderShapes[i][4];
//
//                arjs.tempCanvas.width = shapeWidth;
//                arjs.tempCanvas.height = shapeHeight;
//
//                arjs.canvas[canvas].canvas_ctx.clearRect(
//                    shapeX,
//                    shapeY,
//                    shapeWidth,
//                    shapeHeight);
//
//                arjs.canvas[canvas].inputCanvas_ctx.clearRect(
//                    shapeX / arjs.system.scale,
//                    shapeY / arjs.system.scale,
//                    shapeWidth / arjs.system.scale,
//                    shapeHeight / arjs.system.scale);
//
//                var BRSX = shapeX + shapeWidth;
//                var BRSY = shapeY + shapeHeight;
//
//
//                arjs.canvas[canvas].entity.forEach(function(value, index){
//                    var obj = value;
//                    var sx = obj.crop[0];
//                    var sy = obj.crop[1];
//                    var swidth = obj.crop[2];
//                    var sheight = obj.crop[3];
//                    var width = swidth * obj.scale;
//                    var height = sheight * obj.scale;
//                    var x = obj.x - (width/2);
//                    var y = obj.y - (height/2);
//                    var BRIX = x + width;
//                    var BRIY = y + height;
//
//                    if(x < BRSX &&
//                        y < BRSY &&
//                        BRIX > shapeX &&
//                        BRIY > shapeY
//                        ){
//                        obj.drawBefore.forEach(function(fn){typeof fn == 'function' ? fn(obj,arjs.tempCanvas_ctx,shapeX,shapeY) : false});
//
//                        arjs.tempCanvas_ctx.globalAlpha = obj.opacity;
//                        arjs.tempCanvas_ctx.drawImage(obj.image,sx,sy,swidth,sheight,x-shapeX,y-shapeY,width,height);
//                        arjs.tempCanvas_ctx.globalAlpha = 1;
//
//                        obj.drawAfter.forEach(function(fn){typeof fn == 'function' ? fn(obj,arjs.tempCanvas_ctx,shapeX,shapeY) : false});
//
//                        if(obj.alpha){
//                            arjs.canvas[canvas].inputCanvas_ctx.drawImage(
//                                obj.alpha.image,
//                                sx,
//                                sy,
//                                swidth,
//                                sheight,
//                                x / arjs.system.scale,
//                                y / arjs.system.scale,
//                                width / arjs.system.scale,
//                                height / arjs.system.scale
//                            );
//                        }
//                    }
//                })
//
//                arjs.canvas[canvas].canvas_ctx.drawImage(arjs.tempCanvas,shapeX,shapeY)
//                arjs.render.renderShapes[i] = undefined;
//            }
//        }
//        function inside(num,min,max){
//            if(min <= num && num <= max){
//                return true
//            } else {
//                return false
//            }
//        }
//        arjs.debugShapes = false;
//        if(arjs.render.renderShapes.length != 0){
//            arjs.render.renderShapes = []
//        }







    },
    run: function()
    {

    }
});