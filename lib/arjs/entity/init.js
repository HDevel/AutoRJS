arjs.extend({
    name:'entity.init',
    required: [
        '%arjsBase%.entity.add'
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