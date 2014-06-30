arjs.extend({
    name:'render.draw',
    required: [
    '%arjsBase%render.addRenderShape'
    ],
    defines: function(){
        for(var i = 0; i < arjs.render.renderShapes.length; i++){
            if(arjs.render.renderShapes[i] != undefined){
                var shapeX = Math.floor(arjs.render.renderShapes[i][0]),
                    shapeY = Math.floor(arjs.render.renderShapes[i][1]),
                    shapeWidth = Math.ceil(arjs.render.renderShapes[i][2]),
                    shapeHeight = Math.ceil(arjs.render.renderShapes[i][3]);

                arjs.canvas_ctx.clearRect(
                    shapeX,
                    shapeY,
                    shapeWidth,
                    shapeHeight);

                arjs.inputCanvas_ctx.clearRect(
                    shapeX / arjs.system.scale,
                    shapeY / arjs.system.scale,
                    shapeWidth / arjs.system.scale,
                    shapeHeight / arjs.system.scale);

                var BRSX = shapeX + shapeWidth;
                var BRSY = shapeY + shapeHeight;

                for(var entity in arjs.entity.list) {
                    var obj = arjs.entity.list[entity];
                    var sx = obj.crop[0];
                    var sy = obj.crop[1];
                    var swidth = obj.crop[2];
                    var sheight = obj.crop[3];
                    var width = swidth * obj.scale;
                    var height = sheight * obj.scale;
                    var x = obj.x - (width/2);
                    var y = obj.y - (height/2);
                    var BRIX = x + width;
                    var BRIY = y + height;
                    if(x < BRSX &&
                        y < BRSY &&
                        BRIX > shapeX &&
                        BRIY > shapeY
                        ){

                        if(x < shapeX){
                            var difX = shapeX - x;
                            sx += difX;
                            x += difX;
                            swidth -= difX;
                            width -= difX;
                        }

                        if(BRIX > BRSX){
                            swidth -= (BRIX - BRSX);
                            width -= (BRIX - BRSX);
                        }

                        if(y < shapeY){
                            var difY = shapeY - y;
                            sy += difY;
                            y += difY;
                            sheight -= difY;
                            height -= difY;
                        }

                        if(BRIY > BRSY){
                            sheight -= (BRIY - BRSY);
                            height -= (BRIY - BRSY);
                        }
                        arjs.canvas_ctx.globalAlpha = obj.opacity;
                        arjs.canvas_ctx.drawImage(obj.image,sx,sy,swidth,sheight,x,y,width,height);
                        if(obj.alpha){
                            arjs.inputCanvas_ctx.drawImage(
                                obj.alpha.image,
                                sx,
                                sy,
                                swidth,
                                sheight,
                                x / arjs.system.scale,
                                y / arjs.system.scale,
                                width / arjs.system.scale,
                                height / arjs.system.scale
                            );
                        }
                    }
                }
                arjs.render.renderShapes[i] = undefined;
            }
        }
        function inside(num,min,max){
            if(min <= num && num <= max){
                return true
            } else {
                return false
            }
        }
        arjs.debugShapes = false;
        if(arjs.render.renderShapes.length != undefined){
            arjs.render.renderShapes = []
        }
    }
});