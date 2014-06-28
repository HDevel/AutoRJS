arjs.extend({
    name:'input.interaction',
    defines: function()
    {
//        if(info.canvas == undefined){
//            console.log('init required "canvas" param (id)')
//            return
//        }
//        arjs.canvas = document.getElementById(info.canvas);
//        arjs.canvas_ctx = arjs.canvas.getContext("2d");

//        init: function(canvasName,fileList,callback){
//            arjs.canvas = document.getElementById(canvasName);
//            if(typeof arjs.preload == 'function' && arjs.fileLoadDone == 'no'){
//                arjs.preload(fileList);
//            }
        // add click detection ------ start
//            if(arjs.canvas != undefined && arjs.scriptLoadDone && arjs.fileLoadDone == 'done'){
//                arjs.canvas.addEventListener("click", function(e){
//                    var x = e.x - arjs.canvas.offsetLeft
//                    var y = e.y - arjs.canvas.offsetTop
//                    var color = arjs.inputCanvas_ctx.getImageData(x, y, 1, 1).data;
//                    arjs.findEntityByColorId(parseInt(color[0].toString() + color[1].toString() + color[2].toString()))
//                });
//                arjs.canvas_ctx = arjs.canvas.getContext("2d");
//                arjs.inputCanvas_ctx = arjs.inputCanvas.getContext("2d");
//                //enable to see Input canvas on screen;
//                //document.getElementsByTagName("body")[0].appendChild(arjs.inputCanvas);
//                arjs.resize();
//                arjs.requestAF();
//                callback();
//            } else {
//                setTimeout(function(){
//                    arjs.init(canvasName,fileList,callback);
//                },100);
//            }
//
//        }

    },
    run: function ()
    {

    }
});