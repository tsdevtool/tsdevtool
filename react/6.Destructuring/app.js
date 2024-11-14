// DESTRUCTURING

// with array

var array = ["JS", "Ruby", "PHP", "C++", "C#", "Java"];

var [a, , c, ...rest] = array;

console.log(a, c);
console.log(rest);

// with object
var course = {
  name: "JS",
  price: 1000,
  desciption: "JavaScript",
  image: "image--address",
  children: {
    name: "ReactJS",
  },
};

var {
  name: parentName,
  description = "default", // khong hien thi vi da co roi
  children: { name: childrenName },
  ...rest
} = course;
console.log(parentName, childrenName, rest);

// RETS parameters
function logger(...params) {
  console.log(params);
}

logger(1, 2, 3, 4, 5, 6, 7, 8);
