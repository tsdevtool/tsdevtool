
Array.prototype.myFilter = function(cb) {
    var output = [];
    for(var i in this){
        if(this.hasOwnProperty(i)){
            var results = cb(this[i],i,this)
            if(results){
                output.push(this[i]);
            }
        }
    }    
    return output;
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

var results = array.myFilter(function(value, index, array){
    return value.age > 24;
})

console.log(results)
// Array.prototype.myMap = function(cb) {
//     if(typeof cb !== 'function'){
//         return cb(new Error("This is not a function"));
//     }else{
//         var results = [];
//         var length = this.length;
//         for(var i = 0; i<length; i++){
//             results.push(cb(this[i], i));
//         }
//         return results;
//     }
// }


// const numbers = [1,2,3,4]

// var myMap = numbers.myMap(function(number,i) {
//     return number;
// })

// console.log(myMap); // Output: [1, 2, 3, 4]
// // const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]
// function sumCb(a, b) {
//     return a + b
// }

// function subCb(a,b){return a - b}
// function multiCb(a,b){return a * b}
// function divCb(a,b){return a / b}

// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// // Expected results
// console.log(caculate(1, 2, sumCb))// Output: 3
// console.log(caculate(1, 2, subCb))// Output: -1
// console.log(caculate(1, 2, multiCb)) // Output: 2
// console.log(caculate(3, 1, divCb))// Output: 3