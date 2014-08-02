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

        info.width = info.width ? info.width : info.image.width;
        info.height = info.height ? info.height : info.image.height;

        arjs.entity.add(info.name, 'image', info);
    }
    ,run:function()
    {

    }
});