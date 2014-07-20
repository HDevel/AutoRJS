arjs.extend({
    name:'system.createCanvas',
    defines: function(id, x, y, width, height)
    {
        if(arjs.canvas[id] != undefined){
            console.log('canvas ' + id + ' already exist');
            return
        }
        arjs.canvas[id] = {
            canvas: document.createElement('canvas'),
            inputCanvas: document.createElement('canvas'),
            srcParam: [x, y, width, height],
            entity: new Array()
        };
        arjs.canvas[id].canvas_ctx = arjs.canvas[id].canvas.getContext('2d');
        arjs.canvas[id].inputCanvas_ctx = arjs.canvas[id].inputCanvas.getContext('2d');

        arjs.system.container.appendChild(arjs.canvas[id].canvas);
    }
    ,run:function()
    {
        arjs.canvas = new Array();
    }
});