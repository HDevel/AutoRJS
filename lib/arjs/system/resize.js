arjs.extend({
    name:'system.resize',
    defines: function(){
        if(arjs.system.width == window.innerWidth && arjs.system.height == window.innerHeight){
            return
        }
        arjs.system.width = window.innerWidth;
        arjs.system.height = window.innerHeight;
        arjs.canvas.forEach(function(value,id){
            value.canvas.width = arjs.system.width * arjs.system.pixelRatio
            value.canvas.height = arjs.system.height * arjs.system.pixelRatio
        });
        if(arjs.entity.change){
            arjs.entity.change('root',{x:0})
        }
    },
    run: function()
    {
        arjs.system.width = 0;
        arjs.system.height = 0;
        arjs.system.pixelRatio = window.devicePixelRatio;
        arjs.system.requestAnimationFrame(arjs.system.resize);
    }
});