arjs.extend({
    name:'system.createCanvas',
    defines: function(id, x, y, width, height)
    {
        x = x ? x : 0;
        y = y ? y : 0;
        width = width ? width : 1000;
        height = height ? height : 500;
        if(arjs.canvas[id] != undefined){
            console.log('canvas ' + id + ' already exist');
            return
        }
        arjs.canvas[id] = {
            canvas: document.createElement('canvas'),
            inputCanvas: document.createElement('canvas'),
            srcParam: [x, y, width, height]
        };
        arjs.canvas[id].canvas_ctx = arjs.canvas[id].canvas.getContext('2d');
        arjs.canvas[id].inputCanvas_ctx = arjs.canvas[id].inputCanvas.getContext('2d');

        arjs.system.container.appendChild(arjs.canvas[id].canvas);
        arjs.canvas[id].canvas.style.position = 'absolute';
        arjs.canvas[id].canvas.style.left = x;
        arjs.canvas[id].canvas.style.top = y;
        arjs.canvas[id].canvas.style.zIndex = id;
        arjs.canvas[id].canvas.width = width
        arjs.canvas[id].canvas.height = height

        arjs.entity.list.canvas[id] = {0: new Object()}
    }
    ,run:function()
    {
        arjs.canvas = new Array();
    }
});