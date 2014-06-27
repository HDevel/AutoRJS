arjs.extend({
    required:[
        '%arjsBase%preload.progress'
    ],
    defines: function(fileArray){
        for(var name in fileArray)
        {
            if(arjs.preload.fileList[name] != undefined)
            {
//                console.log('FileName ' + name + ' already exist');
                return
            }
            var url = fileArray[name];
            var image = new Image();
            image.onload = function()
            {
                arjs.preload.fileList[name].status = 'done';
            };
            image.src = url;
            arjs.preload.fileList[name] = {
                file:image,
                type:'image',
                status:'none'
            };
        }
    },
    run: function()
    {
        console.log(2);
    }
})