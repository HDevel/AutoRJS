window.arjs =
{
    system:
    {
        baseUrl: (window.location.origin == undefined ? window.location.protocol+"//"+window.location.host : window.location.origin) + '/',
        arjsUrl: document.getElementsByTagName('script')[document.getElementsByTagName('script').length-1].src.replace(document.URL,'').match(/[^.]+[/]{1}/)[0],
        loadRequiredScript: function (url)
        {
            if(arjs.system.loadedScript[url] == undefined)
            {
                arjs.system.loadedScript[url] = new Array();
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.onload = function(){
                    for(var i in arjs.system.loadedScript[url]){
                        var item = arjs.system.loadedScript[url][i];
                        arjs.system.runQueue[item].left--;
                        if(arjs.system.runQueue[item].left == 0){
                            arjs.system.runQueue[item].run();
                        }
                    }
                };
                script.src = url;
                document.getElementsByTagName("head")[0].appendChild(script);
            }
        },
        runQueue: new Object(),
        loadedScript: new Object()
    },
    assetLoad: 0,
    extend:function(info)
    {
        var nestedArr = info.name.split('.');
        var obj = arjs;

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
        if(info.required != undefined)
        {
            arjs.system.runQueue[info.name] =
            {
                left:info.required.length,
                run: function(){}
            };
            for(var f in info.required)
            {
                var requiredArr = info.required[f].split('.');
                var url = '';
                for(var i in requiredArr)
                {
                    var name = requiredArr[i];
                    name = name.replace('%siteBase%',arjs.system.baseUrl)
                    name = name.replace('%arjsBase%',arjs.system.arjsUrl)
                    if(i != requiredArr.length - 1)
                    {
                        url += name + '/';
                    } else {
                        url += name + '.js';
                    }
                }
                arjs.system.loadRequiredScript(url);
                arjs.system.loadedScript[url].push(info.name);
            }
        }
        if(info.run != undefined)
        {
            arjs.system.runQueue[info.name].run = info.run;
        }
    }
};
arjs.extend({
    name: 'init',
    required: [
        'lib.arjs.add'
    ],
    defines: function(){

    },
    run: function (){
        alert(2)
    }
});