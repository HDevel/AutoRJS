window.arjs = {
    entityList: new Object(),
    fileList: new Object(),
    canvas: new Object(),
    canvas_ctx: new Object(),
    inputCanvas: document.createElement('canvas'),
    inputCanvas_ctx: new Object(),
    renderShape: [],
    arjsLocation: '',
    scriptLoadDone: false,
    debug: [0],
    fileLoadDone: 'no',
    getSrcPatch: function(info){
        var scripts = document.getElementsByTagName('script');
        arjs.arjsLocation = scripts[scripts.length-1].src.replace(document.URL,'').match(/[^.]+[/]{1}/)[0];
        arjs._preloadScripts([
            'preload.js',
            'move.js',
            'addRenderShape.js',
            'requestaf.js',
            'clearArr.js',
            'render.js',
            'resize.js',
            'addInputId.js',
            'findEntityByColorId.js',
            'getAlpha.js',
            'add.js'
        ])
    },
    _preloadScripts: function(sArr){
        var done = 0;
        for(var s = 0; s < sArr.length; s++){
            var headID = document.getElementsByTagName("head")[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.onload = function(){
                done++;
                if(sArr.length == done){
                    arjs.scriptLoadDone = true;
                }
            };
            script.src = arjs.arjsLocation + sArr[s];
            headID.appendChild(script);
        }
    },
    init: function(canvasName,fileList,callback){
        arjs.canvas = document.getElementById(canvasName);
        if(typeof arjs.preload == 'function' && arjs.fileLoadDone == 'no'){
            arjs.preload(fileList);
        }
        if(arjs.canvas != undefined && arjs.scriptLoadDone && arjs.fileLoadDone == 'done'){
            arjs.canvas.addEventListener("click", function(e){
                var x = e.x - arjs.canvas.offsetLeft
                var y = e.y - arjs.canvas.offsetTop
                var color = arjs.inputCanvas_ctx.getImageData(x, y, 1, 1).data;
                arjs.findEntityByColorId(parseInt(color[0].toString() + color[1].toString() + color[2].toString()))
            });
            arjs.canvas_ctx = arjs.canvas.getContext("2d");
            arjs.inputCanvas_ctx = arjs.inputCanvas.getContext("2d");
            //enable to see Input canvas on screen;
            //document.getElementsByTagName("body")[0].appendChild(arjs.inputCanvas);
            arjs.resize();
            arjs.requestAF();
            callback();
        } else {
            setTimeout(function(){
                arjs.init(canvasName,fileList,callback);
            },100);
        }

    }
}
arjs.getSrcPatch();