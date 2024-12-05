// var a = 1;
// var b = 2;

// /**Toan tu logic */
// /**Toan tu so sanh */
// var ketQua = a > b;
// console.log(ketQua); //false
// /**Toan tu gan */

// a += b; // a = a + b
// console.log(a);
// /**Toan tu so hoc */
// // Vượt qua thử thách này bằng cách tạo biến nextAge để lưu số tuổi tiếp theo được tính toán từ giá trị của biến age. Ví dụ: age = 35 thì nextAge sẽ là 36.
// var age = 20;
// var nextAge = age + 1;
// console.log(nextAge); // 21
// // Lưu ý: không thay đổi giá trị của biến age.
// var c = a + b;
// console.log(c);
/*
    Built-in ham xay dung san
*/

// setInterval(function () {
//   console.log("So cua ban la: ", Math.random());
// }, 3000); //Thuc hien sau 3s thuc hien tiep

// setTimeout(function () {
//   console.log("Ham setTimeout");
// }, 5000); //Sau 5s se hien len thong tin trong console

// prompt("Dien ten cua ban vao day"); //Hien thi hop thoai co input truyen vao
// confirm("Ten cua ban la Nguyen Thanh Sieu dung chu"); //Hien thi hop thoai xac nhan
// alert("Nguyen Thanh Sieu"); //hien cua so hop thoai
// console.log("Nguyen Thanh Sieu"); //Hien thong tin ben man hinh console
// console.warn("Day la mot canh bao");
// console.error("Day la mot loi");

/*Bien trong JS */
// var fullName = "Nguyen Thanh Sieu";
// var age = "20";

// alert(fullName);
// alert(age);


function ham(a){
    case 1:
    case 3:
}

console.log(ham(5)); // 10