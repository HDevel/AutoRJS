arjs.extend({
    name:'entity.init',
    required: [
        '%arjsBase%.entity.add',
        '%arjsBase%.entity.change'
    ]
    ,defines: function(info)
    {

    }
    ,run: function(){
        var root = {
            name: 'root'
            ,visible: true
            ,canvas: 0
            ,layer: 0
            ,scale: [1,1]
            ,global:{
                opacity:1
                ,matrix:[
                    [1,0,0],
                    [0,1,0],
                    [0,0,1]
                ]
            }
            ,renderBox : [0,0,10,10,0]
        }
        arjs.entity.list.alphaID = new Object();
        arjs.entity.add('root', 'root', root, 0, 0);
    }
});