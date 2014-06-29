arjs.extend({
    name:'input.add',
    defines: function(entity)
    {
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);

        for(var e in arjs.entityList){
            var entity = arjs.entityList[e];

            if(entity.alpha != undefined && entity.alpha.id == parseInt(r.toString() + g.toString() + b.toString())){
                arjs.addInputId(entity);
                console.log('Find same color id 0_0');
                return
            }
        }

        entity.alpha = new Object();
        entity.alpha.image = arjs.input.getAlpha(entity.image, r, g, b);
        entity.alpha.id = parseInt(r.toString() + g.toString() + b.toString());
    }
});