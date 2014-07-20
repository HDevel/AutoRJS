arjs.extend({
    name:'preload.progress',
    defines: function(info)
    {
        if(typeof info == 'function'){
            arjs.preload.callback.push(info);
            return
        }
        var fileCount = 0;
        var doneFile = 0;

        for(var name in arjs.preload.list){
            fileCount++;
            if(arjs.preload.list[name].status == 'done')
            {
                doneFile++;
            }
        }
        for(var i in arjs.preload.callback){
            arjs.preload.callback[i]((100 / fileCount) * doneFile)
        }
    }
});