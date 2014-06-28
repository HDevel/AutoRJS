arjs.extend({
    name:'input.interaction',
    defines: function(x,y,color)
    {
        console.log('x - ' + x + '; y - ' + y + '; color - ' + color);

    },
    run: function ()
    {
        arjs.inputCanvas = document.createElement('canvas');
        arjs.inputCanvas_ctx = arjs.inputCanvas.getContext("2d");
        //enable to see Input canvas on screen;
        //document.getElementsByTagName("body")[0].appendChild(arjs.inputCanvas);
    }
});