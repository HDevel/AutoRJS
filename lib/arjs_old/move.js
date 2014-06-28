arjs.move = function(name,info){
    if(arjs.entityList[name] == undefined){
        console.log('error');
        return
    }
    arjs.addRenderShape(arjs.entityList[name]);

    for(var source in arjs.entityList[name]){
        for(var change in info){
            if(source == change){
                arjs.entityList[name][source] = info[change];

            }
        }
    }
    arjs.addRenderShape(arjs.entityList[name]);
}