arjs.extend({
    name:'entity.image.change',
    defines: function(name,param)
    {
        var entity = arjs.entity.list.all[name]
        if(entity == undefined){
            console.log('Can\'t find object "' + name + '"');
            return
        }

        var sShape1 = entity.renderBox;

        for(var p in param){
            switch (p) {
                case 'scale':
                    typeof param.scale == 'number' ? entity.scale = [param.scale,param.scale] : false;
                    break
                default:
                    entity[p] = param[p];
                    break
            }
        }
        if(entity.name != 'root'){
            entity.global = {
                x: (entity.x * entity.parent.global.scale[0]) + entity.parent.global.x
                ,y: (entity.y * entity.parent.global.scale[0]) + entity.parent.global.y
                ,scale: [entity.scale[0] * entity.parent.global.scale[0], entity.scale[1] * entity.parent.global.scale[1]]
                ,opacity: entity.opacity * entity.parent.global.opacity
            }
        }

        entity.renderBox = [
            entity.global.x - ((entity.width * entity.global.scale[0]) / 2),
            entity.global.y - ((entity.height * entity.global.scale[1]) / 2),
            entity.width * entity.global.scale[0],
            entity.height * entity.global.scale[1],
            entity.canvas
        ];

        arjs.render.addShape(entity.renderBox);
        if(sShape1 != undefined && JSON.stringify(sShape1) != JSON.stringify(entity.renderBox)){
            arjs.render.addShape(sShape1);
        }
        for(var name in entity.child){
            arjs.entity.image.change(entity.child[name].name);
        }
    }
    ,run:function()
    {

    }
});