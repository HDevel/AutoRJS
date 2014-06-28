arjs.extend({
    name:'input.interaction',
    defines: function(id)
    {
        for(var e in arjs.entity.list){
            var entity = arjs.entity.list[e];

            if(entity.alpha != undefined && entity.alpha.id == id){
                entity.onclick();
                return
            }
        }
    }
});