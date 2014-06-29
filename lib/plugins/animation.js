arjs.extend({
    name:'entity.animation',
    defines: function(name)
    {
        for(var e in arjs.entity.list)
        {
            if(arjs.entity.list[e].animation != undefined)
            {
                var entity = arjs.entity.list[e];
                if(entity.animation.frameList == undefined)
                {
                    entity.animation.frameList = new Array();
                    for(y = 0; y < Math.floor(entity.image.height / entity.height); y++){
                        for(x = 0; x < Math.floor(entity.image.width / entity.width); x++){
                            entity.animation.frameList.push([
                                x * entity.width,
                                y * entity.height,
                                entity.width,
                                entity.height
                            ])
                        }
                    }
                }
                if(entity.animation.curFrame == undefined || entity.animation.curFrame >= 23){
                    entity.animation.curFrame = 0
                }
                entity.animation.curFrame++;
                arjs.entity.change(e,{crop:entity.animation.frameList[entity.animation.curFrame]})
//                if(entity){
//
//                }
            }
        }
    },run: function (){
        arjs.render.requestAnimationFrame(arjs.entity.animation)
    }
});