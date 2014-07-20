arjs.extend({
    name:'entity.stroke',
    defines: function(deltaTime)
    {
        for(var e in arjs.entity.list)
        {
            var entity = arjs.entity.list[e];
            if(entity.stroke != undefined)
            {
                if(entity.stroke.data == undefined)
                {

                    entity.addPixel[0] += entity.stroke.size + 1;
                    entity.addPixel[1] += entity.stroke.size + 1;
                    entity.addPixel[2] += entity.stroke.size + 1;
                    entity.addPixel[3] += entity.stroke.size + 1;

                    entity.stroke.data = {
                        image: fillStroke()
                    }

                    function fillStroke(){
                        var canvas = document.createElement('canvas');
                        var canvas_ctx = canvas.getContext("2d");

                        canvas.width = entity.image.width + (entity.stroke.size * 2);
                        canvas.height = entity.image.height + (entity.stroke.size * 2);
                        canvas_ctx.drawImage(entity.image, entity.stroke.size, entity.stroke.size);

                        var imageData = canvas_ctx.getImageData(0, 0, canvas.width, canvas.height);

                        for(var i = 3; i < imageData.data.length; i+=4){
                            if(imageData.data[i] >= 1){
                                var posY = Math.ceil((i/4) / canvas.width) - 1;
                                var posX = Math.ceil(i/4) - (canvas.width * posY)-1;
//                                for(var x = 0; x < 2; x++){
//                                    for(var y = 0; y < 2; y++){
//                                        if(imageData.data[i] < 10){
//                                        canvas_ctx.globalAlpha = imageData.data[i] / 10;
//                                        }

                                        canvas_ctx.beginPath();
                                        canvas_ctx.arc(posX + 0.5, posY + 0.5, entity.stroke.size - 0.3, 0, 2 * Math.PI, false);
                                        canvas_ctx.fillStyle = 'green';
                                        canvas_ctx.fill();

//                                        canvas_ctx.globalAlpha = 1;
//                                    }
//                                }
                            }
                        }

                        return canvas
                    }
                    entity.drawBefore.push(
                        function(ent,ctx,sx,sy){
                            var image = ent.stroke.data.image
                            ctx.drawImage(image, ent.x - sx - (image.width/2), ent.y - sy - (image.height/2))
                        }
                    )

                    arjs.render.addRenderShape(entity);
                }
            }
        }
    },
    run: function (){
        arjs.system.requestAnimationFrame(arjs.entity.stroke)
    }
});