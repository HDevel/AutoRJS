arjs.extend({
    name:'entity.image.add',
    defines: function(info)
    {
        var requirementParam = ['name', 'image'];
        requirementParam.forEach(function(value, index)
        {
            if(info[value] == undefined)
            {
                console.log('image require "' + value + '" param:');
                console.log(info);
                return
            }
        });

        if(info.parent == undefined){
            info.parent = arjs.entity.list.all['root'];
        } else {
            info.parent = arjs.entity.list.type.image[info.parent]
        }

        var newEntity = new Object();

        newEntity.name = info.name;
        newEntity.type = 'image';
        newEntity.image = arjs.preload.image[info.image].file;

        newEntity.canvas = info.canvas ? info.canvas : 0;
        newEntity.layer = info.layer ? info.layer : 0;

        newEntity.x = info.x ? info.x : 0;
        newEntity.y = info.y ? info.y : 0;

        newEntity.width = info.width ? info.width : newEntity.image.width;
        newEntity.height = info.height ? info.height : newEntity.image.height;

        newEntity.crop = info.crop ? info.crop : [0, 0];

        newEntity.opacity = info.opacity ? info.opacity : 1;

        newEntity.scale = info.scale ? info.scale : 1;
        typeof newEntity.scale == 'number' ? newEntity.scale = [newEntity.scale,newEntity.scale] : false;
        newEntity.parent = info.parent;
        console.log(newEntity.parent)
        newEntity.parent.child ? false : newEntity.parent.child = new Object();
        console.log(newEntity.parent.child)
        newEntity.parent.child[newEntity.name] = newEntity;

        arjs.entity.add(newEntity.name, 'image', newEntity, newEntity.canvas, newEntity.layer);
        arjs.entity.list.type.image[newEntity.name] = arjs.entity.list.all[newEntity.name];
        arjs.entity.image.change(newEntity.name);
    }
    ,run:function()
    {

    }
});