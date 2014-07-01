var arkCubePositionList = {
    width:224,
    height:224,
    degree:{
        0:{xWidth:66,xHeight:14,yWidth:-51,yHeight:18,zHeight:-79,symbols:[{x:8,y:53,transform:[0.64,0.23,0,1,0,0]},{x:112,y:81,transform:[0.83,-0.17,0,1,0,0]}]},
        15:{xWidth:51,xHeight:18,yWidth:-66,yHeight:14,zHeight:-79,symbols:[{x:11,y:60,transform:[0.84,0.175,0,1,0,0]},{x:140,y:79,transform:[0.63,-0.22,0,1,0,0]}]},
        30:{xWidth:32,xHeight:21,yWidth:-78,yHeight:8,zHeight:-79,symbols:[{x:22,y:67,transform:[0.97,0.11,0,1,0,0]},{x:165,y:76,transform:[0.4,-0.26,0,1,0,0]}]},
        45:{xWidth:10,xHeight:23,yWidth:-83,yHeight:3,zHeight:-79,symbols:[{x:38,y:72,transform:[1.04,0.04,0,1,0,0]},{x:186,y:70,transform:[0.12,-0.24,0,1,0,0]}]},
        60:{xWidth:-10,xHeight:23,yWidth:-83,yHeight:-3,zHeight:-79,symbols:[{x:22,y:40,transform:[0.12,0.25,0,1,0,0]},{x:60,y:77,transform:[1.04,-0.03,0,1,0,0]}]},
        75:{xWidth:-33,xHeight:21,yWidth:-77,yHeight:-9,zHeight:-79,symbols:[{x:11,y:45,transform:[0.39,0.26,0,1,0,0]},{x:85,y:80,transform: [0.98,-0.11,0,1,0,0]}]}
    }
};
function cubePosition(cubeList,levelInfo){
    for(var d = 0; d < 90; d+=15){
        eachXYZ(cubeList,function(obj,id){
            var degree = d;
            var x = obj.position[0];
            var y = obj.position[1];
            var z = obj.position[2];

            var objList = [
                obj
                ,cubeList[y][(levelInfo.x - x - 1)][z]
                ,cubeList[(levelInfo.x - x - 1)][(levelInfo.y - y - 1)][z]
                ,cubeList[(levelInfo.y - y - 1)][x][z]
            ]
            var position = arkCubePositionList.degree[degree];
            var yProgW = ((position.yWidth*2) * y - (levelInfo.y/2 - 0.5) * (position.yWidth*2)),
                yProgH = ((position.yHeight*2) * y - (levelInfo.y/2 - 0.5) * (position.yHeight*2)),
                xProgW = ((position.xWidth*2) * x - (levelInfo.x/2 - 0.5) * (position.xWidth*2)),
                xProgH = ((position.xHeight*2) * x - (levelInfo.x/2 - 0.5) * (position.xHeight*2)),
                zProgH = ((position.zHeight*2) * z);

            for(var i = 0; i < objList.length; i++){
                var newPos = objList[i].positionOnScreen[degree + (i * 90)]
                if(newPos == undefined){
                    newPos = [0,0,0]
                }
                newPos[0] = ((-yProgW) - xProgW) - (arkCubePositionList.width/2);
                newPos[1] = ((yProgH + xProgH) + zProgH) - (arkCubePositionList.height/2);
                objList[i].positionOnScreen[degree + (i * 90)] = newPos
            }
            for(var i = degree; i < 360; i+=90){
                var degRange = [53,143,233,323];
                if(obj.positionOnScreen[i] == undefined){
                    obj.positionOnScreen[i] = [0,0,0]
                }
                if(degRange[3] <= i && i < degRange[0]){
                    obj.positionOnScreen[i][2] = 0;
                } else if(degRange[0] <= i && i < degRange[1]){
                    obj.positionOnScreen[i][2] = levelInfo.y - y ;
                } else if(degRange[1] <= i && i < degRange[2]){
                    obj.positionOnScreen[i][2] = ((cubeList.length * cubeList[0].length * cubeList[0][0].length) - id) * (z + 1);
                } else if(degRange[2] <= i && i < degRange[3]){
                    obj.positionOnScreen[i][2] = levelInfo.x - x ;
                }
            }
        })
    }
}