arjs.extend({
    name:'entity.gravity',
    defines: function(deltaTime)
    {
//        console.log('-------------')
        for(var e in arjs.entity.list)
        {
            if(arjs.entity.list[e].gravity != undefined)
            {
//                console.log('grav')
                var entity = arjs.entity.list[e];
                var entityG = entity.gravity;



                arjs.entity.change(e,{
                    x:Math.round(entity.x - ((entityG.speed[0]/1000) * deltaTime )),
                    y:Math.round(entity.y - ((entityG.speed[1]/1000) * deltaTime ))
                });


                var grav = 9.8
//                var grav = 0;
                var air = 0;
                for(var i = 0; i < 2; i++){
                    entityG.speed[i] > 0 && entityG.speed[i] != 0 ? entityG.speed[i] -= ((air/100) * deltaTime) : entityG.speed[i] += ((air/100) * deltaTime);
                }
                entityG.speed[1] -= ((grav/40) * deltaTime);

                if(entityG.life == undefined){
                    entityG.life = 0;
                }
                entityG.life += deltaTime;
                entity.opacity = 1 - (entityG.life / entityG.lifeTime);

                if(entity.x < 0 || entity.x > arjs.system.width.real){
                    entityG.speed[0] = entity.x < 0 ? -entityG.speed[0] : -(entityG.speed[0] + 100);
                    entity.x = entity.x < 0 ? 0 : arjs.system.width.real;
                }
                if(entity.y < 0 || entity.y > arjs.system.height.real){
                    entityG.speed[1] = entity.y < 0 ? -entityG.speed[1] : -(entityG.speed[1] + 100);
                    entity.y = entity.y < 0 ? 0 : arjs.system.height.real;
                }
                if(
                    entityG.life > entityG.lifeTime
                    ){
                    delete arjs.entity.list[e];
                }

//                arjs.render.addRenderShape('redraw');
            }
        }
    },run: function (){
        arjs.render.requestAnimationFrame(arjs.entity.gravity)
    }
});