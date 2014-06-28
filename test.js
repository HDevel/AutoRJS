arjs.extend({
    name:'test',
    defines: function()
    {

    },
    run: function ()
    {
        arjs.preload.image({
            'testOver':'media/testOver.png',
            'img_01':'media/img_01.png',
            'testCrop':'media/testCrop.png'
        });
        arjs.preload.progress(
            function(info)
            {
                console.log(info);
            }
        )
    }
});