arjs.extend({
    name:'render.draw',
    required: [
    '%arjsBase%render.addRenderShape'
    ],
    defines: function(){
        if(
            arjs.inputCanvas.width != arjs.canvas.width ||
            arjs.inputCanvas.height != arjs.canvas.height
            ){
            arjs.inputCanvas.width = arjs.canvas.width
            arjs.inputCanvas.height = arjs.canvas.height
            arjs.render.addRenderShape({
                x:0,
                y:0,
                crop:[0, 0, arjs.canvas.width, arjs.canvas.height]
            });
        }
        for(var i = 0; i < arjs.render.renderShapes.length; i++){
            if(arjs.render.renderShapes[i] != undefined){

                arjs.canvas_ctx.clearRect(
                    arjs.render.renderShapes[i][0],
                    arjs.render.renderShapes[i][1],
                    arjs.render.renderShapes[i][2],
                    arjs.render.renderShapes[i][3]);

                arjs.inputCanvas_ctx.clearRect(
                    arjs.render.renderShapes[i][0],
                    arjs.render.renderShapes[i][1],
                    arjs.render.renderShapes[i][2],
                    arjs.render.renderShapes[i][3]);

                var BRSX = arjs.render.renderShapes[i][0] + arjs.render.renderShapes[i][2];
                var BRSY = arjs.render.renderShapes[i][1] + arjs.render.renderShapes[i][3];

                for(var entity in arjs.entity.list) {
                    var obj = arjs.entity.list[entity]

                    var BRIX = obj.x + obj.crop[2];
                    var BRIY = obj.y + obj.crop[3];

                    if(obj.x < BRSX &&
                        obj.y < BRSY &&
                        BRIX > arjs.render.renderShapes[i][0] &&
                        BRIY > arjs.render.renderShapes[i][1]
                        ){

                        var sx = obj.crop[0];
                        var sy = obj.crop[1];
                        var swidth = obj.crop[2];
                        var sheight = obj.crop[3];
                        var x = obj.x;
                        var y = obj.y;
                        var width = obj.crop[2];
                        var height = obj.crop[3];

                        if(obj.x < arjs.render.renderShapes[i][0]){
                            var difX = arjs.render.renderShapes[i][0] - obj.x;
                            sx += difX;
                            x += difX;
                            swidth -= difX;
                            width -= difX;
                        }

                        if(BRIX > BRSX){
                            swidth -= (BRIX - BRSX);
                            width -= (BRIX - BRSX);
                        }

                        if(obj.y < arjs.render.renderShapes[i][1]){
                            var difY = arjs.render.renderShapes[i][1] - obj.y;
                            sy += difY;
                            y += difY;
                            sheight -= difY;
                            height -= difY;
                        }

                        if(BRIY > BRSY){
                            sheight -= (BRIY - BRSY);
                            height -= (BRIY - BRSY);
                        }
                        arjs.canvas_ctx.drawImage(obj.image,sx,sy,swidth,sheight,x,y,width,height);
                        if(obj.alpha){
                            arjs.inputCanvas_ctx.drawImage(obj.alpha.image,sx,sy,swidth,sheight,x,y,width,height);
                        }
                    }
                }
                arjs.render.renderShapes[i] = undefined;
            }
        }
        if(arjs.render.renderShapes.length != undefined){
            arjs.render.renderShapes = []
        }
    }
});