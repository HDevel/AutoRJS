arjs.extend({
    defines: function()
    {
        if(arjs.preload.fileList == undefined)
        {
            arjs.preload.fileList = new Object();
        }
    },
    run:function()
    {
        console.log(1)
    }
})