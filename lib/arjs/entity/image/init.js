arjs.extend({
    name:'entity.image.init',
    required: [
        '%arjsBase%.entity.image.preload',
        '%arjsBase%.entity.image.add',
        '%arjsBase%.entity.image.draw'
    ]
    ,defines: function(info)
    {

    }
    ,run:function()
    {
        arjs.entity.image.root = {
            scale: 1
        }
        arjs.entity.type.image = new Object();
    }
});