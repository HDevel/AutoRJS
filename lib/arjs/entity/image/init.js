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
            ,global:{
                x:0
                ,y:0
                ,opacity:1
                ,scale:[1,1]
            }
        }
        console.log(arjs.entity.image.root)
        arjs.entity.list.type.image = new Object();
    }
});