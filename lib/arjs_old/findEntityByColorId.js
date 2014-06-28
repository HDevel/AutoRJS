arjs.findEntityByColorId = function(id){
    for(var e in arjs.entityList){
        var entity = arjs.entityList[e];

        if(entity.alpha != undefined && entity.alpha.id == id){
            entity.onclick();
            return
        }
    }
}