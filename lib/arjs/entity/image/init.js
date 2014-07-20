arjs.extend({
    name:'entity.image.init',
    required: [
        '%arjsBase%.entity.image.preload',
        '%arjsBase%.entity.image.add',
        '%arjsBase%.entity.image.draw',
        '%arjsBase%.entity.image.change'
    ]
    ,defines: function(info)
    {

    }
    ,run:function()
    {
        arjs.entity.image.root = {
            scale: 1
        }
        arjs.entity.list.type.image = new Object();
    }
});