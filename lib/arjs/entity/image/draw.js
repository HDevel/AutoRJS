arjs.extend({
    name:'entity.image.draw',
    defines: function(obj, ctx, offsetX, offsetY)
    {
        ctx.drawImage(obj.image,0,0)
    }
    ,run:function()
    {

    }
});