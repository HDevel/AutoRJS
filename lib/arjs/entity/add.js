arjs.extend({
    name:'entity.add',
    defines: function(name, type, obj)
    {
        if(arjs.entity.list.all[name] != undefined){
            console.log('object "' + name + '" already exist')
            return
        }

        if(obj != 'root' && obj.parent == undefined){
            obj.parent = arjs.entity.list.all['root'];
        } else {
            obj.parent = arjs.entity.list.all[obj.parent]
        }

        obj.canvas = obj.canvas ? obj.canvas : 0;
        obj.layer = obj.layer ? obj.layer : 0;

        obj.rotate = obj.rotate ? obj.rotate : 0;

        obj.x = obj.x ? obj.x : 0;
        obj.y = obj.y ? obj.y : 0;

        obj.width = obj.width ? obj.width : 0;
        obj.height = obj.height ? obj.height : 0;

        obj.crop = obj.crop ? obj.crop : [0, 0];

        obj.visible = obj.visible ? obj.visible : true;

        obj.opacity = obj.opacity ? obj.opacity : 1;

        obj.scale = obj.scale ? obj.scale : 1;
        typeof obj.scale == 'number' ? obj.scale = [obj.scale,obj.scale] : false;

        if(obj.name != 'root'){
            obj.parent = obj.parent;
            obj.parent.child ? false : obj.parent.child = new Object();
            obj.parent.child[obj.name] = obj;
        }

        arjs.entity.list.all[name] = obj;
        arjs.entity.list.type[type][name] = obj;
        if(arjs.entity.list.canvas[obj.canvas] == undefined){
            arjs.system.createCanvas(obj.canvas);
        }
        if(arjs.entity.list.canvas[obj.canvas][obj.layer] == undefined)
        {
            arjs.entity.list.canvas[obj.canvas][obj.layer] = new Object();
        }
        arjs.entity.list.canvas[obj.canvas][obj.layer][name] = obj;
        arjs.entity.change(obj.name);
    }
});