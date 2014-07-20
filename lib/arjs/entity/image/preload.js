arjs.extend({
    name:'entity.image.preload',
    defines: function(fileArray)
    {
        if(typeof fileArray == 'object')
        {
            for(var name in fileArray)
            {
                if(arjs.preload.all[name] != undefined)
                {
                    console.log('FileName ' + name + ' already exist');
                    return
                }

                var image = new Image();
                image.onload = function()
                {
                    arjs.preload.all[this.name].status = 'done';
                    arjs.preload.progress();
                };
                image.src = fileArray[name];
                image.setAttribute('name', name);

                arjs.preload.all[name] = {
                    file:image,
                    type:'image',
                    status:'none'
                };
                arjs.preload.image[name] = arjs.preload.all[name];
            }
        } else {
            console.log('Wrong image type:')
            console.log(fileArray)
        }
    }
    ,run:function()
    {
        arjs.preload.image = new Object();
    }
});