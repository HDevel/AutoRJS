window.arjs =
{
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
                    var moduleName = this.src.replace(arjs.system.localUrl,'').replace(arjs.system.arjsUrl,'').replace(/\.[^/.]+$/, "").replace(/\//g, '.');
                    if(arjs.system._currentModule != undefined)
                    {
                        var obj = arjs;
                        var nestedArr = moduleName.split('.');
                        for(var i in nestedArr)
                        {
                            var name = nestedArr[i];
                            if(obj[name] == undefined)
                            {
                                obj[name] = new Object();
                            }
                            if(i == nestedArr.length - 1)
                            {
                                obj[name] = arjs.system._currentModule;
                            }
                            obj = obj[name];
                        }
                        console.log('Module %c' + moduleName, 'font-weight: bold; font-size:12px','load correct');
                    }
                    arjs.system.scriptLoadLeft--;
                    if(arjs.system.scriptLoadLeft == 0)
                    {
                        while(arjs.system.moduleRunQueue.length != 0)
                        {
                            for(var i = 0; i < arjs.system.moduleRunQueue.reverse().length; i++)
                            {
                                try
                                {
                                    arjs.system.moduleRunQueue[i]();
                                    arjs.system.moduleRunQueue[i] = undefined;
                                }
                                catch (e) {}
                                arjs.system.moduleRunQueue = arjs.system.clearArray(arjs.system.moduleRunQueue)
                            }
                        }
                    }
                };
                script.src = url;
                document.getElementsByTagName("head")[0].appendChild(script);
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
    extend:function(info)
    {
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
        arjs.system._currentModule = undefined;
        if(info.defines != undefined)
        {
            arjs.system._currentModule = info.defines
        }
        if(info.run != undefined)
        {
            arjs.system.moduleRunQueue.push(info.run);
        }
    }
};
arjs.system.arjsUrl = arjs.system.arjsUrl.replace(location.href.substring(0, location.href.lastIndexOf("/")+1),'');
arjs.system.loadRequiredScript(arjs.system.arjsUrl + 'init.js');