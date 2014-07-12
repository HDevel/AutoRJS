arjs.extend({
    name:'render.updateRenderShape',
    required: [
        '%arjsBase%.render.addRenderShape'
    ],
    defines: function(){
//        arjs.render.renderShapes.forEach(function(shapeTL,index){
//            console.log(shapeTL)
////            arjs.render.renderShapes.forEach(function(shapeBR){
////
////            })
//        })
        for(var shapeTL = 0; shapeTL < arjs.render.renderShapes.length; shapeTL++){
            for(var shapeBR = 0; shapeBR < arjs.render.renderShapes.length; shapeBR++){
                if(shapeTL != shapeBR && arjs.render.renderShapes[shapeTL] != undefined && arjs.render.renderShapes[shapeBR] != undefined){

                    if(
                        inside(arjs.render.renderShapes[shapeBR][1],arjs.render.renderShapes[shapeTL][1],arjs.render.renderShapes[shapeTL][1] + arjs.render.renderShapes[shapeTL][3])
                            && (
                            inside(arjs.render.renderShapes[shapeBR][0],arjs.render.renderShapes[shapeTL][0],arjs.render.renderShapes[shapeTL][0] + arjs.render.renderShapes[shapeTL][2])
                                ||
                                inside(arjs.render.renderShapes[shapeBR][0],arjs.render.renderShapes[shapeTL][1],arjs.render.renderShapes[shapeTL][0] + arjs.render.renderShapes[shapeTL][2])
                            ) ){
                        arjs.render.renderShapes[shapeBR][3] += (arjs.render.renderShapes[shapeBR][1] - arjs.render.renderShapes[shapeTL][1])
                        arjs.render.renderShapes[shapeBR][1] = arjs.render.renderShapes[shapeTL][1];
                    }
                    if(
                        inside(arjs.render.renderShapes[shapeBR][0],arjs.render.renderShapes[shapeTL][0],arjs.render.renderShapes[shapeTL][0] + arjs.render.renderShapes[shapeTL][2])
                            && (
                            inside(arjs.render.renderShapes[shapeBR][1],arjs.render.renderShapes[shapeTL][1],arjs.render.renderShapes[shapeTL][1] + arjs.render.renderShapes[shapeTL][3])
                                ||
                                inside(arjs.render.renderShapes[shapeBR][1],arjs.render.renderShapes[shapeTL][0],arjs.render.renderShapes[shapeTL][1] + arjs.render.renderShapes[shapeTL][3])
                            ) ){
                        arjs.render.renderShapes[shapeBR][2] += (arjs.render.renderShapes[shapeBR][0] - arjs.render.renderShapes[shapeTL][0])
                        arjs.render.renderShapes[shapeBR][0] = arjs.render.renderShapes[shapeTL][0];
                    }

                    if(
                        arjs.render.renderShapes[shapeTL][0] == arjs.render.renderShapes[shapeBR][0] &&
                            arjs.render.renderShapes[shapeTL][1] == arjs.render.renderShapes[shapeBR][1]
                        ){
                        arjs.render.renderShapes[shapeTL][2] = arjs.render.renderShapes[shapeTL][2] > arjs.render.renderShapes[shapeBR][2] ? arjs.render.renderShapes[shapeTL][2] : arjs.render.renderShapes[shapeBR][2];
                        arjs.render.renderShapes[shapeTL][3] = arjs.render.renderShapes[shapeTL][3] > arjs.render.renderShapes[shapeBR][3] ? arjs.render.renderShapes[shapeTL][3] : arjs.render.renderShapes[shapeBR][3];
                    }

                    if(
                        inside(arjs.render.renderShapes[shapeBR][1],arjs.render.renderShapes[shapeTL][1],arjs.render.renderShapes[shapeTL][1] + arjs.render.renderShapes[shapeTL][3]) &&
                            inside(arjs.render.renderShapes[shapeBR][1] + arjs.render.renderShapes[shapeBR][3],arjs.render.renderShapes[shapeTL][1],arjs.render.renderShapes[shapeTL][1] + arjs.render.renderShapes[shapeTL][3]) &&
                            inside(arjs.render.renderShapes[shapeBR][0],arjs.render.renderShapes[shapeTL][0],arjs.render.renderShapes[shapeTL][0] + arjs.render.renderShapes[shapeTL][2]) &&
                            inside(arjs.render.renderShapes[shapeBR][0] + arjs.render.renderShapes[shapeBR][2],arjs.render.renderShapes[shapeTL][0],arjs.render.renderShapes[shapeTL][0] + arjs.render.renderShapes[shapeTL][2]) &&
                            arjs.render.renderShapes[shapeTL][0] < arjs.system.width.real &&
                            arjs.render.renderShapes[shapeTL][1] < arjs.system.height.real
                        ){
                        arjs.render.renderShapes[shapeBR] = undefined;
//                    return
                    }

                }
            }
        }
        arjs.render.renderShapes = arjs.system.clearArray(arjs.render.renderShapes)
        function inside(num,min,max){
            if(min <= num && num <= max){
                return true
            } else {
                return false
            }
        }

    }
});