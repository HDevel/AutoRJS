arjs.extend({
    name:'entity.image.init',
    required: [
        '%arjsBase%.entity.image.add',
        '%arjsBase%.entity.image.draw',
        '%arjsBase%.entity.image.getAlpha',
        '%arjsBase%.entity.image.preload'
    ]
    ,defines: function(info)
    {

    }
    ,run:function()
    {
        arjs.entity.list.type.image = new Object();
    }
});