arjs.extend({
    name:'render.render',
    defines: function(){
        arjs.canvas_ctx.drawImage(arjs.preload.fileList.testCrop.file,0,0)
    }
});