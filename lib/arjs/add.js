arjs.add = function(info){

    if(arjs.entityList[info.name] == undefined){
        arjs.entityList[info.name] = new Object();
    } else {
        console.log('Entity ' + info.name + ' already exist');
        return
    }

    arjs.entityList[info.name].name = info.name;
    arjs.entityList[info.name].image = arjs.fileList[info.image];

    arjs.entityList[info.name].width = arjs.entityList[info.name].image.width;;
    arjs.entityList[info.name].height = arjs.entityList[info.name].image.height;
    arjs.entityList[info.name].x = info.x != undefined ? info.x : 0;
    arjs.entityList[info.name].y = info.y != undefined ? info.y : 0;
    if(info.crop != undefined){
        arjs.entityList[info.name].crop = info.crop;
        arjs.entityList[info.name].width = info.crop[2];
        arjs.entityList[info.name].height = info.crop[3];
    } else {
        arjs.entityList[info.name].crop = [0,0,arjs.entityList[info.name].width,arjs.entityList[info.name].height]
    }

    if(info.onclick != undefined){
        arjs.entityList[info.name].onclick = info.onclick;
        arjs.addInputId(arjs.entityList[info.name]);
    }

    arjs.addRenderShape(arjs.entityList[info.name]);
}