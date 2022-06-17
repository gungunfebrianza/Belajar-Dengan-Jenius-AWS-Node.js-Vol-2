const obj = {
  name: "joe",
  age: 35,
  person1: {
    name: "Tony",
    age: 50,
    person2: {
      name: "Albert",
      age: 21,
      person3: {
        name: "Peter",
        age: 23,
      },
    },
  },
};
console.dir(obj, { depth: null });
