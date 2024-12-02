

/* Không sử dụng các hàm có sẵn
    Hãy xoá các phần tử trùng trong mảng
    input = ['a', 'b', 'c', 'd', 'a', 'a', 'c']
    output = ['a','b','c','d']
    */

var array = ['a', 'b', 'c', 'd', 'a', 'a', 'c'];

//Trong JS thì có 1 constructor là Set thì khi sử dụng hàm Set này thì nó chỉ lặp 2 các phần tử chỉ 1 lần thôi, xem ví dụ nè

console.log(new Set(array)); // a,b,c,d
//Vậy làm sao cho nó chuyển từ Set thành Arrays
console.log([...(new Set(array))]); // a,b,c,d

//Tuy nhiên mình sẽ không được sử dụng các hàm có sẵn vì thế nên chúng ta sẽ dùng một loại là đệ quy
//Su dung Loop thì tốn CPU
//Sử dụng đệ quy thì tốn RAM
//Thì hàm đệ quy nó sẽ có hữu hạn Stack nếu dùng quá nhiều mà không có điểm dừng thì sẽ bị tràn stack và sẽ không báo lỗi

function deQuy(num){
    if(num <=0){
        return;
    }
    console.log(num);
    return deQuy(num-1);
}


deQuy(0)


// function run(object) {
//     var array = [];
//     for(var key in object) {
//         array.push( `Thuộc tính ${key} có giá trị ${object[key]}`);
//     }
//     return array;
// }

// Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
/*
//Tinh tong cac gia tri cua don hang
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getToTalPrice(order) {
    var length = order.length;
    if(length===0){
        return 0; //Neu khong co don hang nao thi tong gia tri la bang 0
    }else{
        var total = 0;
        for(;length;length--){
            total += order[length-1].price;
        }
        return total;
    }
}

console.log(getToTalPrice(orders));

/*
function getTotal(arr) {
    
    var length = arr.length;
    if(length === 0){
        console.log('Khong co gia tri nao trong mang');
    }else{
        var total = 0;
        for(;length!==0;length--){
            total += arr[length-1]
        }
        console.log(total)
    }
}

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
getTotal([4, 5, 3, 5]) // Output: 17

/*
//Tao danh sach so ngau nhien
function getRandNumbers(min, max, length){
    var arrays = [];
    for(var i = 0; i<length; i++){
        var rand = Math.random() * (max-min) + min;
        arrays.push(Math.round(rand));
    }
    return arrays;
}

//In ra 10 so ngau nhien tu 1 den
console.log(getRandNumbers(1,10,10));


/*
Toan tu 3 ngoi
// Làm bài

function getCanVoteMessage(age){
    return age >=18?'Bạn có thể bỏ phiếu':'Bạn không được bỏ phiếu';
}



// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'*/