arjs.addRenderShape = function(obj){
    arjs.renderShape.push([
        obj.x,
        obj.y,
        obj.crop[2],
        obj.crop[3],
        obj.name
    ]);
    arjs.updateRenderShape();
}
arjs.updateRenderShape = function(){
    for(var shapeTL = 0; shapeTL < arjs.renderShape.length; shapeTL++){
        for(var shapeBR = 0; shapeBR < arjs.renderShape.length; shapeBR++){
            if(shapeTL != shapeBR && arjs.renderShape[shapeTL] != undefined && arjs.renderShape[shapeBR] != undefined){

                if(
                    inside(arjs.renderShape[shapeBR][1],arjs.renderShape[shapeTL][1],arjs.renderShape[shapeTL][1] + arjs.renderShape[shapeTL][3])
                    && (
                        inside(arjs.renderShape[shapeBR][0],arjs.renderShape[shapeTL][0],arjs.renderShape[shapeTL][0] + arjs.renderShape[shapeTL][2])
                            ||
                            inside(arjs.renderShape[shapeBR][0],arjs.renderShape[shapeTL][1],arjs.renderShape[shapeTL][0] + arjs.renderShape[shapeTL][2])
                        ) ){
                        arjs.renderShape[shapeBR][3] += (arjs.renderShape[shapeBR][1] - arjs.renderShape[shapeTL][1])
                        arjs.renderShape[shapeBR][1] = arjs.renderShape[shapeTL][1];
                    }
                if(
                    inside(arjs.renderShape[shapeBR][0],arjs.renderShape[shapeTL][0],arjs.renderShape[shapeTL][0] + arjs.renderShape[shapeTL][2])
                    && (
                        inside(arjs.renderShape[shapeBR][1],arjs.renderShape[shapeTL][1],arjs.renderShape[shapeTL][1] + arjs.renderShape[shapeTL][3])
                            ||
                            inside(arjs.renderShape[shapeBR][1],arjs.renderShape[shapeTL][0],arjs.renderShape[shapeTL][1] + arjs.renderShape[shapeTL][3])
                        ) ){
                        arjs.renderShape[shapeBR][2] += (arjs.renderShape[shapeBR][0] - arjs.renderShape[shapeTL][0])
                        arjs.renderShape[shapeBR][0] = arjs.renderShape[shapeTL][0];
                    }

                if(
                    arjs.renderShape[shapeTL][0] == arjs.renderShape[shapeBR][0] &&
                    arjs.renderShape[shapeTL][1] == arjs.renderShape[shapeBR][1]
                    ){
                    arjs.renderShape[shapeTL][2] = arjs.renderShape[shapeTL][2] > arjs.renderShape[shapeBR][2] ? arjs.renderShape[shapeTL][2] : arjs.renderShape[shapeBR][2];
                    arjs.renderShape[shapeTL][3] = arjs.renderShape[shapeTL][3] > arjs.renderShape[shapeBR][3] ? arjs.renderShape[shapeTL][3] : arjs.renderShape[shapeBR][3];
                }

                if(
                    inside(arjs.renderShape[shapeBR][1],arjs.renderShape[shapeTL][1],arjs.renderShape[shapeTL][1] + arjs.renderShape[shapeTL][3]) &&
                        inside(arjs.renderShape[shapeBR][1] + arjs.renderShape[shapeBR][3],arjs.renderShape[shapeTL][1],arjs.renderShape[shapeTL][1] + arjs.renderShape[shapeTL][3]) &&
                        inside(arjs.renderShape[shapeBR][0],arjs.renderShape[shapeTL][0],arjs.renderShape[shapeTL][0] + arjs.renderShape[shapeTL][2]) &&
                        inside(arjs.renderShape[shapeBR][0] + arjs.renderShape[shapeBR][2],arjs.renderShape[shapeTL][0],arjs.renderShape[shapeTL][0] + arjs.renderShape[shapeTL][2]) &&
                        arjs.renderShape[shapeTL][0] < arjs.canvas.width &&
                        arjs.renderShape[shapeTL][1] < arjs.canvas.height
                    ){
                    arjs.renderShape[shapeBR] = undefined;
//                    return
                }

            }
        }
    }
    arjs.renderShape = arjs.clearArr(arjs.renderShape)
    function inside(num,min,max){
        if(min <= num && num <= max){
            return true
        } else {
            return false
        }
    }
}