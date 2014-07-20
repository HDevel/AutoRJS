window.arjs =
{
    entity:
    {
        list:new Object()
    },
    system:
    {
        baseUrl: (window.location.origin == undefined ? window.location.protocol+"//"+window.location.host : window.location.origin) + '/',
        localUrl: location.href.substring(0, location.href.lastIndexOf("/")+1),
        arjsUrl: (document.getElementsByTagName('script')[document.getElementsByTagName('script').length-1].src.replace(document.URL,'').match(/[^.]+[/]{1}/)[0]),
        loadRequiredScript: function (url)
        {
            if(arjs.system.loadedScript[url] == undefined)
            {
                arjs.system.loadedScript[url] = true;
                arjs.system.scriptLoadLeft++;

                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.onload = function()
                {
                    arjs.system.scriptLoadLeft--;
                    if(arjs.system.scriptLoadLeft == 0)
                    {
                        arjs.system.runQueue();
                    }
                };
                script.src = url + '?' + Math.random();
                document.getElementsByTagName("head")[0].appendChild(script);
            }
        },
        runQueue: function()
        {
            if(arjs.system.moduleRunQueue.length != 0)
            {
                for(var i = 0; i < arjs.system.moduleRunQueue.reverse().length; i++)
                {
                    try
                    {
                        arjs.system.moduleRunQueue[i]();
                        arjs.system.moduleRunQueue[i] = undefined;
                    }
                    catch (e) {}
                }
                arjs.system.moduleRunQueue = arjs.system.clearArray(arjs.system.moduleRunQueue);
                setTimeout(arjs.system.runQueue, 10);
            } else {
                for(var f in arjs.readyFN){
                    arjs.readyFN[f](arjs);
                }
            }
        },
        clearArray: function(arr)
        {
            var newArr = new Array();
            for(var i = 0; i < arr.length; i++)
            {
                if(arr[i] != undefined)
                {
                    newArr.push(arr[i]);
                }
            }
            return newArr
        },
        scriptLoadLeft: 0,
        moduleRunQueue: new Array(),
        loadedScript: new Object()
    },
    assetLoad: 0,
    ready: function(fn){
        if(typeof fn == 'function')
        {
            arjs.readyFN.push(fn);
        }
    },
    readyFN: new Array(),
    extend:function(info)
    {
        if(info.name == undefined){
            console.log(info, ' this module have no name');
            console.log('AutoRJS have stop loading');
            arjs.system.scriptLoadLeft++;
            return
        }
        if(info.defines != undefined)
        {
            var obj = arjs;
            var nestedArr = info.name.split('.');
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
            console.log('Module %c' + info.name, 'font-weight: bold; font-size:12px','load correct');
        }
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
                        url += name + '.js';
                    }
                }
                url = url.replace('%siteBase%',arjs.system.baseUrl).replace('%arjsBase%',arjs.system.arjsUrl);
                arjs.system.loadRequiredScript(url);
            }
        }
        if(info.run != undefined)
        {
            arjs.system.moduleRunQueue.push(info.run);
        }
    }
};
arjs.system.arjsUrl = arjs.system.arjsUrl.replace(location.href.substring(0, location.href.lastIndexOf("/")+1),'');
arjs.system.loadRequiredScript(arjs.system.arjsUrl + 'init.js');