arjs.extend({
    name:'entity.image.change',
    defines: function(name,param)
    {
        var entity = arjs.entity.list.type.image[name]
        if(entity == undefined){
            console.log('Can\'t find object "' + name + '"');
            return
        }
        arjs.render.addShape(entity.renderBox);
        for(var p in param){
            entity[p] = param[p];
        }
        entity.renderBox = [
            entity.x,
            entity.y,
            entity.width,
            entity.height,
            entity.canvas
        ]
        arjs.render.addShape(entity.renderBox);
    }
    ,run:function()
    {

    }
});