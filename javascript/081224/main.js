Array.prototype.myEvery=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(!callback(this[index], index, this)){
                return false;
            }
        }
    }
    return true;
}

//some
Array.prototype.mySome = function(cb) {
    for(var index in this){
        //Kiem tra co phai phan tu empty hay khong
        if(this.hasOwnProperty(index)){
            if(cb(this[index], index, this)){
                return true;
            }
        }
    }

    return false;
}
var array = [
    {
        name: "John",
        age: 20
    },
    {
        name: "Jane",
        age: 25
    },
    {
        name: "Mike",
        age: 30
    }
]


var result = array.myEvery(function(arr, index){
    return arr.age > 19;
})

console.log(result); // true