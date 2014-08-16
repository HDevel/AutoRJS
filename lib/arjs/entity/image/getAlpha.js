arjs.extend({
    name:'entity.image.getAlpha',
    defines: function(image, r, g, b)
    {
        var canvas = document.createElement('canvas');
        var canvas_ctx = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;

        canvas_ctx.drawImage(image,0,0);
        canvas_ctx.globalCompositeOperation = "source-in";
        canvas_ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        canvas_ctx.fillRect(0, 0, canvas.width, canvas.height);

        return canvas;
    }
});