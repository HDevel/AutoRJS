arjs.extend({
    name:'system.matrix',
    defines: function()
    {
        var colorLock = true;
        var r = 0;
        var g = 0;
        var b = 0;
        while(colorLock){
            r = Math.round(Math.random() * 255);
            g = Math.round(Math.random() * 255);
            b = Math.round(Math.random() * 255);
            if(arjs.entity.list.alphaID[r + '' + g + '' + b] == undefined){
                colorLock = false;
            }
        }
        return r + '' + g + '' + b
    }
});