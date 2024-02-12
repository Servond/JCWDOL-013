function greeting(name) {
  const defaultMessage = "Hello ";

  return function () {
    return defaultMessage + name;
  };
}
const result = greeting("Budi");
console.log(result());

console.log(greeting("Dodo")());
