const obj = {
  value: "before",
};

console.log(obj.value);

obj.value = "after";

console.log(obj.value);

// obj = {}; TypeError: Assignment to constant variable.
