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
            info.parent = arjs.entity.image.root
        } else {
            info.parent = arjs.entity.list.type.image[info.parent]
        }

        var newEntity = new Object();

        newEntity.type = 'image';
        newEntity.image = arjs.preload.image[info.image].file;

        newEntity.canvas = info.canvas ? info.canvas : 0;
        newEntity.layer = info.layer ? info.layer : 0;

        newEntity.x = info.x ? info.x : 0;
        newEntity.y = info.y ? info.y : 0;

        newEntity.width = info.width ? info.width : newEntity.image.width;
        newEntity.height = info.height ? info.height : newEntity.image.height;

        newEntity.crop = info.crop ? info.crop : [0, 0, newEntity.width, newEntity.height];

        newEntity.opacity = info.opacity ? info.opacity : 1;

        newEntity.scale = info.scale ? info.scale : 1;
        typeof newEntity.scale == 'number' ? newEntity.scale = [newEntity.scale,newEntity.scale] : false;


        newEntity.parent = info.parent;
        newEntity.parent.child ? false : newEntity.parent.child = new Object();
        newEntity.parent.child[info.name] = newEntity;



        newEntity.global = {
            x: (newEntity.x * newEntity.parent.global.scale[0]) + newEntity.parent.global.x
            ,y: (newEntity.y * newEntity.parent.global.scale[1]) + newEntity.parent.global.y
            ,scale: [newEntity.scale[0] * newEntity.parent.global.scale[0], newEntity.scale[1] * newEntity.parent.global.scale[1]]
            ,opacity: newEntity.opacity * newEntity.parent.global.opacity
        }

        var sWidth = newEntity.width * newEntity.global.scale[0];
        var sHeight = newEntity.height * newEntity.global.scale[1];

        newEntity.renderBox = [
                newEntity.global.x - (sWidth/2),
                newEntity.global.y - (sHeight/2),
                newEntity.width * newEntity.global.scale[0],
                newEntity.height * newEntity.global.scale[1],
                newEntity.canvas
            ]
        arjs.render.addShape(newEntity.renderBox);
        arjs.entity.add(info.name, newEntity, newEntity.canvas, newEntity.layer);
    }
    ,run:function()
    {

    }
});