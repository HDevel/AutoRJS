arjs.extend({
    name:'render.optimize',
    defines: function(){
        for(var shapeTL = 0; shapeTL < arjs.render.shapes.length; shapeTL++){
            for(var shapeBR = 0; shapeBR < arjs.render.shapes.length; shapeBR++){
                if(
                    shapeTL != shapeBR &&
                    arjs.render.shapes[shapeTL] != undefined &&
                    arjs.render.shapes[shapeBR] != undefined &&
                    arjs.render.shapes[shapeTL][4] == arjs.render.shapes[shapeBR][4]
                    ){

                    if(
                        inside(arjs.render.shapes[shapeBR][1],arjs.render.shapes[shapeTL][1],arjs.render.shapes[shapeTL][1] + arjs.render.shapes[shapeTL][3])
                            && (
                            inside(arjs.render.shapes[shapeBR][0],arjs.render.shapes[shapeTL][0],arjs.render.shapes[shapeTL][0] + arjs.render.shapes[shapeTL][2])
                                ||
                                inside(arjs.render.shapes[shapeBR][0],arjs.render.shapes[shapeTL][1],arjs.render.shapes[shapeTL][0] + arjs.render.shapes[shapeTL][2])
                            ) ){
                        arjs.render.shapes[shapeBR][3] += (arjs.render.shapes[shapeBR][1] - arjs.render.shapes[shapeTL][1])
                        arjs.render.shapes[shapeBR][1] = arjs.render.shapes[shapeTL][1];
                    }
                    if(
                        inside(arjs.render.shapes[shapeBR][0],arjs.render.shapes[shapeTL][0],arjs.render.shapes[shapeTL][0] + arjs.render.shapes[shapeTL][2])
                            && (
                            inside(arjs.render.shapes[shapeBR][1],arjs.render.shapes[shapeTL][1],arjs.render.shapes[shapeTL][1] + arjs.render.shapes[shapeTL][3])
                                ||
                                inside(arjs.render.shapes[shapeBR][1],arjs.render.shapes[shapeTL][0],arjs.render.shapes[shapeTL][1] + arjs.render.shapes[shapeTL][3])
                            ) ){
                        arjs.render.shapes[shapeBR][2] += (arjs.render.shapes[shapeBR][0] - arjs.render.shapes[shapeTL][0])
                        arjs.render.shapes[shapeBR][0] = arjs.render.shapes[shapeTL][0];
                    }

                    if(
                        arjs.render.shapes[shapeTL][0] == arjs.render.shapes[shapeBR][0] &&
                            arjs.render.shapes[shapeTL][1] == arjs.render.shapes[shapeBR][1]
                        ){
                        arjs.render.shapes[shapeTL][2] = arjs.render.shapes[shapeTL][2] > arjs.render.shapes[shapeBR][2] ? arjs.render.shapes[shapeTL][2] : arjs.render.shapes[shapeBR][2];
                        arjs.render.shapes[shapeTL][3] = arjs.render.shapes[shapeTL][3] > arjs.render.shapes[shapeBR][3] ? arjs.render.shapes[shapeTL][3] : arjs.render.shapes[shapeBR][3];
                    }

                    if(
                        inside(arjs.render.shapes[shapeBR][1],arjs.render.shapes[shapeTL][1],arjs.render.shapes[shapeTL][1] + arjs.render.shapes[shapeTL][3]) &&
                            inside(arjs.render.shapes[shapeBR][1] + arjs.render.shapes[shapeBR][3],arjs.render.shapes[shapeTL][1],arjs.render.shapes[shapeTL][1] + arjs.render.shapes[shapeTL][3]) &&
                            inside(arjs.render.shapes[shapeBR][0],arjs.render.shapes[shapeTL][0],arjs.render.shapes[shapeTL][0] + arjs.render.shapes[shapeTL][2]) &&
                            inside(arjs.render.shapes[shapeBR][0] + arjs.render.shapes[shapeBR][2],arjs.render.shapes[shapeTL][0],arjs.render.shapes[shapeTL][0] + arjs.render.shapes[shapeTL][2])
                        ){
                        arjs.render.shapes[shapeBR] = undefined;
//                    return
                    }

                }
            }
        }
        arjs.render.shapes = arjs.system.clearArray(arjs.render.shapes)
        function inside(num,min,max){
            if(min <= num && num <= max){
                return true
            } else {
                return false
            }
        }

    }
});