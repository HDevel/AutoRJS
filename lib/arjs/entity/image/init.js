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
        arjs.entity.list.type.image = new Object();
    }
});