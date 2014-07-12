arjs.extend({
    name:'entity.add',
    required: [
        '%arjsBase%.entity.change'
    ],
    defines: function(info){
        var newEntity = info;

        if(newEntity.name == undefined){
            console.log('New entity should have name');
            return
        }
        if(arjs.preload.fileList[newEntity.image] == undefined){
            console.log('fileList have no ' + newEntity.image + ' image');
            return
        }
        if(arjs.entity.list[newEntity.name] != undefined){
            console.log('Entity ' + info.name + ' already exist');
            return
        }
        newEntity.image = arjs.preload.fileList[newEntity.image].file;

        newEntity.width == undefined ? newEntity.width = newEntity.image.width : false;
        newEntity.height == undefined ? newEntity.height = newEntity.image.height : false;

        newEntity.x == undefined ? newEntity.x = 0 : false;
        newEntity.y == undefined ? newEntity.y = 0 : false;

        newEntity.canvas == undefined ? newEntity.canvas = 0 : false;
        if(arjs.canvas[newEntity.canvas] == undefined){
            arjs.system.createCanvas(newEntity.canvas);
        }

        newEntity.opacity == undefined ? newEntity.opacity = 1 : false;

        newEntity.scale == undefined ? newEntity.scale = 1 : false;

        if(newEntity.crop != undefined){
            newEntity.width = newEntity.crop[2];
            newEntity.height = newEntity.crop[3];
        } else {
            newEntity.crop = [0, 0, newEntity.width, newEntity.height];
        }

        arjs.entity.list[newEntity.name] = newEntity;
        arjs.canvas[newEntity.canvas].entity.push(arjs.entity.list[newEntity.name]);

        if(newEntity.click != undefined){
            arjs.input.add(arjs.entity.list[info.name]);
        }

        arjs.render.addRenderShape(arjs.entity.list[info.name]);
    },run:function()
    {
        arjs.entity.list = new Object();
    }
});