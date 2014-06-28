arjs.render = function(){
//    if(arjs.debug[0] == 0){
//        arjs.debug[0] = new Date().getTime();
//    } else {
//        var time = new Date().getTime()
//        var fps = 1000/(time - arjs.debug[0])
//        if(fps < 30){
//            console.log(fps);
//        }
//        arjs.debug[0] = time
//    }
//    console.log('---------------------------------')
//    if(arjs.renderShape.length != 0){
//        console.log('--------------------');
//        console.log(arjs.renderShape);
//    }
//    if(arjs.renderShape.length != 0){
//        arjs.inputCanvas_ctx.clearRect(0,0,1000,500);
//    }
    for(var i = 0; i < arjs.renderShape.length; i++){
        if(arjs.renderShape[i] != undefined){

            arjs.canvas_ctx.clearRect(
                arjs.renderShape[i][0],
                arjs.renderShape[i][1],
                arjs.renderShape[i][2],
                arjs.renderShape[i][3]);
            arjs.inputCanvas_ctx.clearRect(
                arjs.renderShape[i][0],
                arjs.renderShape[i][1],
                arjs.renderShape[i][2],
                arjs.renderShape[i][3]);


//            var ctx = arjs.inputCanvas_ctx;
//            ctx.globalAlpha=0.2;
//            ctx.fillStyle= 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
//            ctx.fillRect(arjs.renderShape[i][0],arjs.renderShape[i][1],arjs.renderShape[i][2],arjs.renderShape[i][3]);
////            ctx.fillStyle="rgb(255,255,255)";




            var BRSX = arjs.renderShape[i][0] + arjs.renderShape[i][2];
            var BRSY = arjs.renderShape[i][1] + arjs.renderShape[i][3];

            for(var entity in arjs.entityList) {
                var obj = arjs.entityList[entity]

                var BRIX = obj.x + obj.crop[2];
                var BRIY = obj.y + obj.crop[3];

                if(obj.x < BRSX &&
                    obj.y < BRSY &&
                    BRIX > arjs.renderShape[i][0] &&
                    BRIY > arjs.renderShape[i][1]
                    ){

                    var sx = obj.crop[0];
                    var sy = obj.crop[1];
                    var swidth = obj.crop[2];
                    var sheight = obj.crop[3];
                    var x = obj.x;
                    var y = obj.y;
                    var width = obj.crop[2];
                    var height = obj.crop[3];

                    if(obj.x < arjs.renderShape[i][0]){
                        var difX = arjs.renderShape[i][0] - obj.x;
                        sx += difX;
                        x += difX;
                        swidth -= difX;
                        width -= difX;
                    }

                    if(BRIX > BRSX){
                        swidth -= (BRIX - BRSX);
                        width -= (BRIX - BRSX);
                    }

                    if(obj.y < arjs.renderShape[i][1]){
                        var difY = arjs.renderShape[i][1] - obj.y;
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
            arjs.renderShape[i] = undefined;
        }
    }
    if(arjs.renderShape.length != undefined){
        arjs.renderShape = []
    }

}