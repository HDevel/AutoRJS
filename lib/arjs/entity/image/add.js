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

        info.parent ? false : info.parent = arjs.entity.image.root;

        var newEntity = new Object();

        newEntity.type = 'image';
        newEntity.image = arjs.preload.image[info.image].file;
        newEntity.x = info.x ? info.x : 0;
        newEntity.y = info.y ? info.y : 0;
        newEntity.width = info.width ? info.width : newEntity.image.width;
        newEntity.height = info.height ? info.height : newEntity.image.height;
        newEntity.scale = info.scale ? info.scale : 1;
        typeof newEntity.scale == 'number' ? newEntity.scale = [newEntity.scale,newEntity.scale] : false;
        newEntity.parent = info.parent;

        arjs.entity.list[info.name] = newEntity;
        arjs.entity.type.image[info.name] = arjs.entity.list[info.name];
    }
    ,run:function()
    {

    }
});