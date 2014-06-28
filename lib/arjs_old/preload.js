arjs.preload = function(fileArray){
    arjs.fileLoadDone = 'inprogress';
    var have = 0;
    var done = 0;
    for(var imageName in fileArray) {
        if(arjs.fileList[imageName] != undefined){
            console.log('FileName ' + imageName + ' already exist');
            return
        }
        var curUrl = fileArray[imageName];

        var image = new Image();
        image.onload = function(){
            done++
            if(have == done){
                arjs.fileLoadDone = 'done'
            }
        };
        image.src = curUrl;
        arjs.fileList[imageName] = image;
        have++;
    }
}