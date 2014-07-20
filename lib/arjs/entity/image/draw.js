arjs.extend({
    name:'entity.image.draw',
    defines: function(obj, ctx, offsetX, offsetY)
    {
        ctx.drawImage(obj.image, obj.x - offsetX, obj.y - offsetY);
    }
    ,run:function()
    {

    }
});