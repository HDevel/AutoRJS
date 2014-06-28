arjs.extend({
    name:'entity.add',
    required: [
        '%arjsBase%entity.change'
    ],
    defines: function(info){
        if(arjs.entity.list[info.name] == undefined){
            arjs.entity.list[info.name] = new Object();
        } else {
            console.log('Entity ' + info.name + ' already exist');
            return
        }

        arjs.entity.list[info.name].name = info.name;
        arjs.entity.list[info.name].image = arjs.preload.fileList[info.image].file;

        arjs.entity.list[info.name].width = arjs.entity.list[info.name].image.width;;
        arjs.entity.list[info.name].height = arjs.entity.list[info.name].image.height;
        arjs.entity.list[info.name].x = info.x != undefined ? info.x : 0;
        arjs.entity.list[info.name].y = info.y != undefined ? info.y : 0;
        if(info.crop != undefined){
            arjs.entity.list[info.name].crop = info.crop;
            arjs.entity.list[info.name].width = info.crop[2];
            arjs.entity.list[info.name].height = info.crop[3];
        } else {
            arjs.entity.list[info.name].crop = [0,0,arjs.entity.list[info.name].width,arjs.entity.list[info.name].height]
        }

        if(info.onclick != undefined){
            arjs.entity.list[info.name].onclick = info.onclick;
            arjs.addInputId(arjs.entity.list[info.name]);
        }

        arjs.render.addRenderShape(arjs.entity.list[info.name]);
    },run:function()
    {
        arjs.entity.list = new Object();
    }
});