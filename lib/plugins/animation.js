arjs.extend({
    name:'entity.animation',
    defines: function(deltaTime)
    {
        for(var e in arjs.entity.list)
        {
            if(arjs.entity.list[e].animation != undefined)
            {
                var entity = arjs.entity.list[e];
                var entityA = entity.animation;
                if(entityA.data == undefined)
                {
                    entityA.data = {
                        allFrameList: new Array(),
                        renderFrameList: new Array(),
                        frame: new Array(),
                        frameTime: 1000 / entityA.speed,
                        curFrameTime: 0
                    };
                    for(var y = 0; y < Math.floor(entity.image.height / entity.height); y++)
                    {
                        for(var x = 0; x < Math.floor(entity.image.width / entity.width); x++)
                        {
                            entityA.data.allFrameList.push([
                                x * entity.width,
                                y * entity.height,
                                entity.width,
                                entity.height
                            ])
                        }
                    }
                    var framesArr = entityA.frames.split(',')
                    for(var f = 0; f < framesArr.length; f++)
                    {
                        if(framesArr[f].indexOf('-') >= 1)
                        {
                            var range = framesArr[f].split('-');
                            for(var r = 1; r < range.length; r++)
                            {
                                entityA.data.renderFrameList.pop();
                                var start = parseInt(range[r-1]),
                                    end = parseInt(range[r]);
                                if(start < end)
                                {
                                    for(var i = start; i <= end; i++)
                                    {
                                        pushFrame(i);
                                    }
                                } else {
                                    for(var i = start; i >= end; i--)
                                    {
                                        pushFrame(i);
                                    }
                                }
                            }
                        } else {
                            pushFrame(f)
                        }
                        function pushFrame(f)
                        {
                            if(f < entityA.data.allFrameList.length){
                                entityA.data.renderFrameList.push(f);
                            }
                        }
                    }
                }
                entityA.data.curFrameTime += deltaTime;
                if(entityA.data.curFrameTime >= entityA.data.frameTime)
                {
                    entityA.data.curFrameTime -= entityA.data.frameTime;
                    entityA.data.frame++;

                    var frame = entityA.data.renderFrameList[entityA.data.frame];
                    if(frame == undefined){
                        entityA.data.frame = 0;
                        frame = entityA.data.renderFrameList[entityA.data.frame]
                    }
                    var crop = entityA.data.allFrameList[frame]
                    arjs.entity.change(e,{crop:crop})
                }
            }
        }
    },run: function (){
        arjs.render.requestAnimationFrame(arjs.entity.animation)
    }
});