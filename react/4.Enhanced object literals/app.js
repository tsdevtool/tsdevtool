// ENHANCED OBJECT LITERAL
//1. Định nghĩa key value cho object
//2. Định nghĩa method cho 1 object
//3. Định nghĩa key cho object dưới dạng biến

var name = "JavaScript";
var price = 2000;

var course = {
  name,
  price,
  getName() {
    return name;
  },
};

console.log(course.getName());

var filedName = "new-name";
var filedPrice = "price";
const course2 = {
  [filedName]: "JavaScript",
  [filedPrice]: 1000,
};

console.log(course2);
