arjs.extend({
    name:'entity.image.draw',
    defines: function(obj, ctx, offsetX, offsetY)
    {
        obj.global.opacity != 1 ? ctx.globalAlpha = obj.global.opacity : false;
        var sWidth = obj.width * obj.global.scale[0];
        var sHeight = obj.height * obj.global.scale[1];

        ctx.drawImage(
            obj.image
            ,obj.crop[0]
            ,obj.crop[1]
            ,obj.crop[2]
            ,obj.crop[3]
            ,obj.global.x - (sWidth/2) - offsetX
            ,obj.global.y - (sHeight/2) - offsetY
            ,sWidth
            ,sHeight
        );
        obj.global.opacity != 1 ? ctx.globalAlpha = 1 : false
    }
    ,run:function()
    {

    }
});