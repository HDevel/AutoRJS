arjs.extend({
    name:'entity.change',
    defines: function(name,info){
        if(arjs.entity.list[name] == undefined){
//            console.log('error');
            return
        }
        arjs.render.addRenderShape(arjs.entity.list[name]);
        for(var source in arjs.entity.list[name]){
            for(var change in info){
                if(source == change){
                    arjs.entity.list[name][source] = info[change];
                }
            }
        }
        arjs.render.addRenderShape(arjs.entity.list[name]);
    }
});