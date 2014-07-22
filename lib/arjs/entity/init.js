arjs.extend({
    name:'entity.init',
    required: [
        '%arjsBase%.entity.add'
    ]
    ,defines: function(info)
    {

    }
    ,run: function(){
        var root = {
            name: 'root'
            ,canvas: 0
            ,layer: 0
            ,scale: [1,1]
            ,global:{
                x:0
                ,y:0
                ,opacity:1
                ,scale:[1,1]
            }
        }
        arjs.entity.add('root', 'root', root, 0, 0);
    }
});