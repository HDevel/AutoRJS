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


        info.type = 'image';
        info.image = arjs.preload.image[info.image].file;

        if(typeof info.click == 'function'){
            var id = arjs.system.getAlphaID();

            info.alpha = {
                mask:arjs.entity.image.getAlpha(info.image, id[0], id[1], id[2]),
                id:id[3]
            };

            arjs.entity.list.alphaID[id[3]] = info;
        }

        info.width = info.width ? info.width : info.image.width;
        info.height = info.height ? info.height : info.image.height;

        arjs.entity.add(info.name, 'image', info);
    }
    ,run:function()
    {

    }
});