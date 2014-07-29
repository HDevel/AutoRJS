arjs.extend({
    name:'entity.image.draw',
    defines: function(obj, ctx, offsetX, offsetY)
    {
        obj.global.opacity != 1 ? ctx.globalAlpha = obj.global.opacity : false;

        var m3 = arjs.system.matrix(obj.global.matrix, [[1,0,-obj.width * 0.5], [0,1,-obj.height * 0.5]])

        ctx.setTransform(m3[0][0],m3[1][0],m3[0][1],m3[1][1],m3[0][2] - offsetX,m3[1][2] - offsetY);
//        ctx.transform(1,0,0,1,-offsetX,-offsetY);

        ctx.drawImage(obj.image,0,0);



//        var TL = arjs.system.matrix(obj.global.matrix, [[1,0,-obj.width * 0.5], [0,1,-obj.height * 0.5]]);
//        var TR = arjs.system.matrix(obj.global.matrix, [[1,0,obj.width * 0.5], [0,1,-obj.height * 0.5]]);
//        var BL = arjs.system.matrix(obj.global.matrix, [[1,0,-obj.width * 0.5], [0,1,obj.height * 0.5]]);
//        var BR = arjs.system.matrix(obj.global.matrix, [[1,0,obj.width * 0.5], [0,1,obj.height * 0.5]]);
//
//        var AABB_src = [
//            [TL[0][2],TL[1][2]],
//            [TR[0][2],TR[1][2]],
//            [BL[0][2],BL[1][2]],
//            [BR[0][2],BR[1][2]]
//        ];
//
//        var AABB = [
//            Math.min.apply(null,[TL[0][2],TR[0][2],BL[0][2],BR[0][2]])
//            ,Math.min.apply(null,[TL[1][2],TR[1][2],BL[1][2],BR[1][2]])
//            ,Math.max.apply(null,[TL[0][2],TR[0][2],BL[0][2],BR[0][2]]) - Math.min.apply(null,[TL[0][2],TR[0][2],BL[0][2],BR[0][2]])
//            ,Math.max.apply(null,[TL[1][2],TR[1][2],BL[1][2],BR[1][2]]) - Math.min.apply(null,[TL[1][2],TR[1][2],BL[1][2],BR[1][2]])
//        ]
//
////        var X = 0;
//
//        ctx.fillStyle = '#000';
//        ctx.setTransform(1,0,0,1,0,0);
//        ctx.globalAlpha = 0.5;
//        ctx.fillRect(AABB[0],AABB[1],AABB[2],AABB[3]);
//        ctx.globalAlpha = 1;

        obj.global.opacity != 1 ? ctx.globalAlpha = 1 : false;
    }
    ,run:function()
    {

    }
});