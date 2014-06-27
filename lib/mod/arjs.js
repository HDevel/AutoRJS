window.arjs =
{
    system:
    {
        baseUrl: (window.location.origin == undefined ? window.location.protocol+"//"+window.location.host : window.location.origin) + '/',
        arjsUrl: (document.getElementsByTagName('script')[document.getElementsByTagName('script').length-1].src.replace(document.URL,'').match(/[^.]+[/]{1}/)[0]),
        loadRequiredScript: function (url)
        {
            if(arjs.system.loadedScript[url] == undefined)
            {
                arjs.system.loadedScript[url] = true;
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.onload = function(){
                    arjs.system.updateModuleRunQueue(arjs.system._parentName);
                };
                script.src = url;
                document.getElementsByTagName("head")[0].appendChild(script);
            }
        },
        updateModuleRunQueue: function (deleteByName)
        {
            var moduleRunQueueLenght = 0;
            for(var module in arjs.system.moduleRunQueue)
            {
                moduleRunQueueLenght++;
            }
            var moduleRunQueueId = 0
            for(var module in arjs.system.moduleRunQueue)
            {
                moduleRunQueueId++
                for(var required in arjs.system.moduleRunQueue[module].required)
                {
                    var name = arjs.system.moduleRunQueue[module].required[required];
                    if(arjs.system.moduleRunQueue[name] != undefined){
                        arjs.system.moduleRunQueue[module].required = arjs.system.moduleRunQueue[module].required.concat(arjs.system.moduleRunQueue[name].required);
                    }
                }
                for(var required1 in arjs.system.moduleRunQueue[module].required)
                {
                    if(deleteByName != undefined && arjs.system.moduleRunQueue[module].required[required1] == deleteByName){
                        arjs.system.moduleRunQueue[module].required[required1] = undefined;
                    }
                    for(var required2 in arjs.system.moduleRunQueue[module].required)
                    {
                        if(required1 != required2){
                            if(arjs.system.moduleRunQueue[module].required[required1] == arjs.system.moduleRunQueue[module].required[required2]){
                                arjs.system.moduleRunQueue[module].required[required2] = undefined;
                            }
                        }
                    }
                }
                arjs.system.moduleRunQueue[module].required = arjs.system.clearArray(arjs.system.moduleRunQueue[module].required)

                if(arjs.system.moduleRunQueue[module].required.length == 0 && moduleRunQueueId == moduleRunQueueLenght){
                    arjs.system.moduleRunQueue[module].run();
                    delete arjs.system.moduleRunQueue[module];
                    arjs.system.updateModuleRunQueue();
                }
            }
        },
        clearArray: function(arr){
            var newArr = new Array();
            for(var i = 0; i < arr.length; i++){
                if(arr[i] != undefined){
                    newArr.push(arr[i]);
                }
            }
            return newArr
        },
        loadedScript: new Object(),
        moduleRunQueue: new Object()
    },
    assetLoad: 0,
    extend:function(info)
    {
        arjs.system._parentName = info.name != undefined ? info.name : arjs.system._currentName;
        if(info.required != undefined)
        {
            for(var f in info.required)
            {
                var requiredArr = info.required[f].split('.');
                var url = '';
                for(var i in requiredArr)
                {
                    var name = requiredArr[i];
                    if(i != requiredArr.length - 1)
                    {
                        url += name + '/';
                    } else {
                        arjs.system._currentName = (url + name).replace('/','.')
                        url += name + '.js';
                    }
                }
                url = url.replace('%siteBase%',arjs.system.baseUrl).replace('%arjsBase%',arjs.system.arjsUrl);

                arjs.system._currentName = arjs.system._currentName.replace('%siteBase%','').replace('%arjsBase%','');

                if(arjs.system.moduleRunQueue[arjs.system._parentName] == undefined)
                {
                    arjs.system.moduleRunQueue[arjs.system._parentName] = {
                        required:new Array(),
                        run: function(){}
                    }
                }

                arjs.system.moduleRunQueue[arjs.system._parentName].required.push(arjs.system._currentName);

                arjs.system.loadRequiredScript(url);
            }
        }
        var obj = arjs;
        var nestedArr = info.name != undefined ? info.name.split('.') : arjs.system._parentName.split('.');
        for(var i in nestedArr)
        {
            var name = nestedArr[i];
            if(obj[name] == undefined)
            {
                obj[name] = new Object();
            }
            if(i == nestedArr.length - 1)
            {
                obj[name] = info.defines;
            }
            obj = obj[name];
        }
        if(info.run != undefined)
        {
            if(arjs.system.moduleRunQueue[arjs.system._parentName] == undefined){
                info.run();
            } else {
                arjs.system.moduleRunQueue[arjs.system._parentName].run = info.run;
            }
        }
    }
};
arjs.system.arjsUrl = arjs.system.arjsUrl.replace(location.href.substring(0, location.href.lastIndexOf("/")+1),'');

arjs.extend({
    name: 'init',
    required: [
        '%arjsBase%preload.image'
    ],
    defines: function(){

    },
    run: function (){
//        arjs.preload.image({
//            'testOver':'media/testOver.png'
//        })
    }
});