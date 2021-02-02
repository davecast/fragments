const mySelf = {
  name: "David Castillo",
  age: 32,
};
const attributes = {
  weight: "tengo que rebajar",
  height: "1.82cm",
};

const data = { ...mySelf, ...attributes };

console.log(data);
//{
//  name: "David Castillo",
//  age: 32,
//  weight: "tengo que rebajar",
//  height: "1.82cm"
//}
