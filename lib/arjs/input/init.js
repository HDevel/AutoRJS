arjs.extend({
    name:'input.init',
    required: [
        '%arjsBase%.input.add',
        '%arjsBase%.input.getAlpha',
        '%arjsBase%.input.interaction'
    ],
    defines: function()
    {
//        arjs.canvas.addEventListener("click", function(e){
//            var param = getXYC(e)
//            arjs.input.interaction(param[0], param[1], param[2]);
////            arjs.findEntityByColorId(parseInt(color[0].toString() + color[1].toString() + color[2].toString()))
//        });
        arjs.canvas.addEventListener("mousemove", function(e){
//            var param = getXYC(e)
//            mouseX = param[0]
//            mouseY = param[1]
//            arjs.input.interaction(param[0], param[1], param[2]);
//            arjs.findEntityByColorId(parseInt(color[0].toString() + color[1].toString() + color[2].toString()))
        });
        arjs.canvas.addEventListener("touchmove", function(e){
//            e.preventDefault();
//            var param = getXYC(e)
//            mouseX = param[0]
//            mouseY = param[1]
//            arjs.input.interaction(param[0], param[1], param[2]);
//            arjs.findEntityByColorId(parseInt(color[0].toString() + color[1].toString() + color[2].toString()))
        });
//        arjs.canvas.addEventListener("touchstart", function(e){
//            console.log(e.changedTouches[0].identifier)
//            e.preventDefault();
////            arjs.findEntityByColorId(parseInt(color[0].toString() + color[1].toString() + color[2].toString()))
//        });
//        arjs.canvas.addEventListener("touchmove", function(e){
//            var param = getXYC(e)
//            arjs.input.interaction(param[0], param[1], param[2]);
//        });
//        arjs.canvas.addEventListener("touchend", function(e){
//            console.log(e.changedTouches[0].identifier)
//        });
        function getXYC(e){
            var x = (e.x != undefined ? e.x : e.pageX) - arjs.canvas.offsetLeft
            var y = (e.y != undefined ? e.y : e.pageY) - arjs.canvas.offsetTop
            var color = arjs.inputCanvas_ctx.getImageData(x/arjs.system.scale, y/arjs.system.scale, 1, 1).data;
            return [x*arjs.system.scale,y*arjs.system.scale,[color[0],color[1],color[2],color[3]]]
        }

    },
    run: function ()
    {
        arjs.inputCanvas = document.createElement('canvas');
        arjs.inputCanvas_ctx = arjs.inputCanvas.getContext('2d');
        //enable to see Input canvas on screen;
//        document.getElementsByTagName("body")[0].appendChild(arjs.inputCanvas);
    }
});