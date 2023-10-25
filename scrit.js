const carInfo = {
  brand: "Toyota",
  price: 30000000,
  purchasedYear: 2022,
  model: 2021,
};

const person1 = {
  name: "Aung Paine", //Key value pair
  age: 50,
  hight: 180,
  city: "Yangon",
  dateOfBirth: 1970,
  isActor: true,
  walk: () => {
    alert("Aung paine is walking now...");
  },
};

// setting new properties and methods
person1.hobby = "football";
person1.isMale = true;
person1.eat = () => {
  alert("Aung paine is walking now...");
};

const input1Value = "";
const input2Value = "";
const propertyName = "donatedBy" + input1Value;
// donatedByMgMg :10000
person1[propertyName] = input2Value;

// window object
alert("Hello");
console.log("Welcome");
