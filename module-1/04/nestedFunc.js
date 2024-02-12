function getMessage(firstName, lastName, i) {
  // getMessage function body
  let lastName1 = "c";
  function sayHello(name) {
    //sayHello function body
    return `Hello ${name} ${lastName1} `;
  }

  const welcomeMessage = function () {
    console.log(sayHello());
    return "Welcome to Purwadhika!.";
  };
  console.log(sayHello(firstName));
  return sayHello(firstName) + welcomeMessage();
}
console.log(getMessage("Budi", "Widodo", 1));
// console.log(getMessage("user", "1"));
let a = "test";
console.log(a);
console.log(a);
