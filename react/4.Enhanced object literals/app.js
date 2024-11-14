// SPREAD (...) : noi mang
var array = ["JS", "Ruby", "PHP"];
var array2 = ["ReactJS", "Dart"];
var array3 = [...array2, ...array];

console.log(array3);

// Co the dung de thong nhat 2 obj

var object1 = {
  name: "JS",
};

var object2 = {
  price: 1000,
};

var object3 = { ...object1, ...object2 };

console.log(object3);

// Truyen tham so cho ham
function logger(a, b, c) {
  console.log(a, b, c);
}

logger(...array);

//REST Parameters

function logger(a, ...params) {
  console.log(a, ...params);
}
function logger2({ name, ...rests }) {
  console.log(name);
  console.log(rests);
}
function logger3([a, b, ...rests]) {
  console.log(a);
  console.log(b);
  console.log(rests);
}

logger(1, 2, 3, 4);
logger2({
  name: "JavaScript",
  price: 1000,
  description: "A description",
});
logger3([2, 6, 2, 3, 26, 1, 45, 56]);
