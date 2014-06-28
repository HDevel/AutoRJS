arjs.extend({
    name:'preload.progress',
    defines: function(info)
    {
        if(typeof info == 'function'){
            arjs.preload.loadCallback.push(info);
            return
        }
        var fileCount = 0;
        var doneFile = 0;
        for(var i in arjs.preload.fileList){
            fileCount++
        }
        for(var i in arjs.preload.fileList){
            if(arjs.preload.fileList[i].status == 'done'){
                doneFile++;
            }
        }
        for(var i in arjs.preload.loadCallback){
            arjs.preload.loadCallback[i]((100 / fileCount) * doneFile)
        }
    },
    run:function()
    {
        arjs.preload.fileList = new Object();
        arjs.preload.loadCallback = new Array();
    }
})