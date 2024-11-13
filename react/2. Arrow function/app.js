// Arrow function - ham mui ten
const logger = (log) => {
  console.log(log);
};

logger("Message...");

const sum = (a, b) => {
  return a + b;
};

console.log(sum(2, 2));

const object = (a, b) => ({ a: a, b: b });

console.log(object(2, 2));

const logger2 = (log) => console.log(log);
logger2("Message...");

const obj = {
  name: "JavaScript bacic",
  getName: () => {
    return this;
  },
};

console.log(obj.getName());

// khong dung duoc contructor
