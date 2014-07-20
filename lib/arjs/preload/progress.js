arjs.extend({
    name:'preload.progress',
    defines: function(info)
    {
        if(typeof info == 'function'){
            arjs.preload.callback.push(info);
            return
        }
        var fileCount = arjs.preload.all.length;
        var doneFile = 0;

        for(var name in arjs.preload.all){
            if(arjs.preload.all[name].status == 'done')
            {
                doneFile++;
            }
        }
        for(var i in arjs.preload.callback){
            arjs.preload.callback[i]((100 / fileCount) * doneFile)
        }
    }
});