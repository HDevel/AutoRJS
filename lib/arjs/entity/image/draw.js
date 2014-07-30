arjs.extend({
    name:'entity.image.draw',
    defines: function(obj, ctx, offsetX, offsetY)
    {
        obj.global.opacity != 1 ? ctx.globalAlpha = obj.global.opacity : false;

        var m3 = arjs.system.matrix(obj.global.matrix, [[1,0,-obj.width * 0.5], [0,1,-obj.height * 0.5]])

        ctx.setTransform(m3[0][0],m3[1][0],m3[0][1],m3[1][1],m3[0][2] - offsetX,m3[1][2] - offsetY);

        ctx.drawImage(obj.image,0,0);

        obj.global.opacity != 1 ? ctx.globalAlpha = 1 : false;
    }
    ,run:function()
    {

    }
});