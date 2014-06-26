arjs.getAlpha = function(image,r,g,b,rangeStart,rangeEnd){
    var canvas = document.createElement('canvas');
    var canvas_ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;
    canvas_ctx.drawImage(image,0,0);

    var imageData = canvas_ctx.getImageData(0,0,canvas.width,canvas.height);

    rangeStart == undefined ? rangeStart = 1 : false;
    rangeEnd == undefined ? rangeEnd = 255 : false;
    for(var i = 3; i < imageData.data.length; i+=4){
        if(rangeStart <= imageData.data[i] && imageData.data[i] <= rangeEnd){
            imageData.data[i-3] = r;
            imageData.data[i-2] = g;
            imageData.data[i-1] = b;
            imageData.data[i] = 255;
        } else {
            imageData.data[i] = 0;
        }
    }

    canvas_ctx.clearRect(0,0,canvas.width,canvas.height);
    canvas_ctx.putImageData(imageData,0,0);
    return canvas
}