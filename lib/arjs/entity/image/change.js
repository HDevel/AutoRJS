arjs.extend({
    name:'entity.image.change',
    defines: function(name,param)
    {
        var entity = arjs.entity.list.all[name]
        if(entity == undefined){
            console.log('Can\'t find entityect "' + name + '"');
            return
        }

        var sShape1 = entity.renderBox;

        for(var p in param){
            switch (p) {
                case 'scale':
                    typeof param.scale == 'number' ? entity.scale = [param.scale,param.scale] : false;
                    break
                default:
                    entity[p] = param[p];
                    break
            }
        }


        var rad = ((entity.rotate - 90) * -1) * (Math.PI / 180);

        entity.matrix =
        [
            [Math.sin(rad) * entity.scale[0], -Math.cos(rad) * entity.scale[1], entity.x],
            [Math.cos(rad) * entity.scale[0], Math.sin(rad) * entity.scale[1], entity.y]
        ]

        if(entity.name != 'root'){
            entity.global = {
                matrix: arjs.system.matrix(entity.parent.global.matrix, entity.matrix)
                ,opacity: entity.opacity * entity.parent.global.opacity
            }
        }

        var TL = arjs.system.matrix(entity.global.matrix, [[1,0,-entity.width * 0.5], [0,1,-entity.height * 0.5]]);
        var TR = arjs.system.matrix(entity.global.matrix, [[1,0,entity.width * 0.5], [0,1,-entity.height * 0.5]]);
        var BL = arjs.system.matrix(entity.global.matrix, [[1,0,-entity.width * 0.5], [0,1,entity.height * 0.5]]);
        var BR = arjs.system.matrix(entity.global.matrix, [[1,0,entity.width * 0.5], [0,1,entity.height * 0.5]]);

        entity.renderBox = [
            Math.min.apply(null,[TL[0][2],TR[0][2],BL[0][2],BR[0][2]])
            ,Math.min.apply(null,[TL[1][2],TR[1][2],BL[1][2],BR[1][2]])
            ,Math.max.apply(null,[TL[0][2],TR[0][2],BL[0][2],BR[0][2]]) - Math.min.apply(null,[TL[0][2],TR[0][2],BL[0][2],BR[0][2]])
            ,Math.max.apply(null,[TL[1][2],TR[1][2],BL[1][2],BR[1][2]]) - Math.min.apply(null,[TL[1][2],TR[1][2],BL[1][2],BR[1][2]])
            ,entity.canvas
        ];
//
        arjs.render.addShape(entity.renderBox);
        if(sShape1 != undefined){
            arjs.render.addShape(sShape1);
        }
        for(var name in entity.child){
            arjs.entity.image.change(entity.child[name].name);
        }
    }
    ,run:function()
    {

    }
});