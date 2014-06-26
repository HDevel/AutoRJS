arjs.clearArr = function(arr){
    var newArr = new Array();
    for(var i = 0; i < arr.length; i++){
        if(arr[i] != undefined){
            newArr.push(arr[i])
        }
    }
    return newArr
}