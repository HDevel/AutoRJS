arjs.extend({
    required: [
        '%arjsBase%preload.mod4'
    ],
    defines: function()
    {
    },
    run:function()
    {
        arjs.system.testVar = 'test111'
        console.log(2)
    }
})