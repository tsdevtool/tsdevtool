

/*
function run(a) {
    if(a%3 === 0 && a%5 === 0) {
        return 3;
    }else if(a%5 === 0){
        return 2;
    }else if(a%3===0){
        return 1;
    }
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

/*
// Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.
function getRandomItem(array){
    var randomIndex = Math.floor(Math.random()*array.length)
    return array[randomIndex]
}


var arrrays =[
    "Sieu",
    'Nhung',
    'Nhu',
    'Huy'
]

console.log(getRandomItem(arrrays));


// Làm bài tại đây

/**Để vượt qua thử thách này, bạn hãy tạo một object constructor Student gồm: firstName, lastName. Sau đó, định nghĩa thêm phương thức là getFullName, phương thức này sẽ trả về tên đầy đủ của sinh viên.

Giữa firstName và lastName cần có 1 khoảng trắng (1 dấu space). */
/*
function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'




/*
// Viết hàm tại đây
function getLastElement(arrays){
    var lastElement = arrays[arrays.length -1];
    return lastElement;
}


// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
/*
// Tạo biến games với giá trị là 1 array, array này có ít nhất 3 phần tử là tên của các games mà bạn biết.
var games = ['LOL','FO4','PUPG'];
// Tạo biến numbers và gán cho nó 1 array, array này có ít nhất 3 phần tử là các giá trị số.
var numbers = [1,2,3,]
*/
/*

//Viet ham kiem tra kieu number
// isNumber la mot kieu cua number
function isNumber(value){
    // return typeof value === 'number' ;//neu nhu the nay thi NaN van tra ve true khong dung voi yeu cau
    return typeof value === 'number' && isFinite(value); // sau khi kiem tra xong thi kiem tra xem value co phai la kieu so khong bang isFinite()
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false

//Ket qua mong muon
// Tạo hàm isNumber
// Hàm isNumber có 1 tham số đặt tên là value
// isNumber(value) trả về true khi value có kiểu số, ngược lại trả về false
// isNumber(NaN) cần trả về false
*/