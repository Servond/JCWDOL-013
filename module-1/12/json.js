//Convert JSON to object
const text =
  '{"employees": [' +
  '{"firstName": "john", "lastName": "doe"},' +
  '{"firstName": "john", "lastName": "smith"},' +
  '{"firstName": "john", "lastName": "Jones"} ]}';
// console.log(text);
console.log(JSON.parse(text));

// Convert object to json
const stringify = {
  employees: [
    {
      firstName: " john",
      lastName: "doe",
    },
    {
      firstName: " john",
      lastName: "jones",
    },
    {
      firstName: " john",
      lastName: "smith",
    },
  ],
};
// console.log(stringify);
console.log(JSON.stringify(stringify));
