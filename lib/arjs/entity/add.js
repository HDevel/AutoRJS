arjs.extend({
    name:'entity.add',
    defines: function(name, type, obj, canvas, layer)
    {
        if(arjs.entity.list.all[name] != undefined){
            console.log('object "' + name + '" already exist')
            return
        }
        arjs.entity.list.all[name] = obj;
        arjs.entity.list.type[type][name] = obj;
        if(arjs.entity.list.canvas[obj.canvas][obj.layer] == undefined)
        {
            arjs.entity.list.canvas[obj.canvas][obj.layer] = new Object();
        }
        arjs.entity.list.canvas[obj.canvas][obj.layer][name] = obj;
    }
});