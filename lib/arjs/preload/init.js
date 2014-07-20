arjs.extend({
    name:'preload.init',
    required: [
        '%arjsBase%.preload.progress'
    ],
    defines: function(info)
    {

    },
    run: function(){
        arjs.preload.all = new Object();
        arjs.preload.callback = new Array();
    }
});