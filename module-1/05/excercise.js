// Write a function to get the lowest, highest and average value in the array (with and without sort function)

function getMinMaxAvgSort(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  const min = arr[0];
  const max = arr[arr.length - 1];
  const sum = arr.reduce((a, b) => a + b);
  console.log(sum);
  const avg = sum / arr.length;
  return { min, max, avg };
}

console.log(getMinMaxAvgSort([1, 4, 6, 2, 10, 24]));

function getMinMaxAvg(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  const avg = sum / arr.length;
  return { min, max, avg };
}

console.log(getMinMaxAvg([1, 4, 6, 2, 10, 24]));

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

function joinWords(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (i === words.length - 1) {
      result += "and " + words[i];
    } else {
      result += words[i] + ", ";
    }
  }
  return result;
}

console.log(joinWords("string"));

// Write a function to split a string and convert it into an array of words
function splitStringBuild(str) {
  return str.split(" ");
}

console.log(splitStringBuild("hello world"));

function splitStrings(sent) {
  return sent.split(" ");
}

console.log(splitStrings("Hello World"));

// benar
const string2Array = (string) => {
  let word = "";
  let newArray = [];
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
    if (string[i] !== " ") {
      word += string[i];
      if (i == string.length - 1) {
        newArray.push("word");
      }
      console.log(word);
    } else {
      newArray.push(word);
      word = "";
    }
  }
  console.log(word);
  // if (word !== "") {
  //   newArray.push(word);
  // }
  return newArray;
};

console.log(string2Array("hello world "));

// salah
function splitString(str) {
  let arr = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      arr.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }

  return arr;
}

console.log(splitString("hello world"));

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.

function calculateArray(arr1, arr2) {
  let message = `[${arr1}] + [${arr2}] -> `;
  let newArr = [];
  for (i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] + arr2[i]);
  }
  message += `[${newArr}]`;
  return message;
}

console.log(calculateArray([1, 2, 3], [4, 5, 6]));

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

function addNonExisting(n) {
  let arr = ["Puma", "Nikee", "Adidas", "Reebok"];

  let find = arr.find((value) => value == n);
  if (!find) {
    arr.push(n);
  } else {
    return `${n} already exist`;
  }

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == n) {
  //     return `${n} already exist`;
  //   }
  // }
  // arr.push(n);

  return arr;
}

console.log(addNonExisting("Puma"));

// Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
function swapCharacter(strings) {
  let message = "";
  let splits = strings.split("");
  console.log(splits);
  for (let i = 0; i < strings.length; i++) {
    if (splits[i] === splits[i].toUpperCase()) {
      splits[i] = splits[i].toLowerCase();
    } else {
      splits[i] = splits[i].toUpperCase();
    }
  }
  message = splits.join("");
  return message;
}
console.log(swapCharacter("The Quick Brown Fox"));

function getRandomItem(arr) {
  let random = arr[Math.floor(Math.random() * arr.length)];

  return random;
}

console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

function removeOdd(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(removeOdd([5, 4, 2, 3, 6, 1]));

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input.
// The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).

function insertArr(max, ...num) {
  console.log(num);
  let newArr = [];

  for (let i = 0; i < max; i++) {
    if (num[i] !== undefined) newArr.push(num[i]);
  }

  return newArr;
}

console.log(insertArr(5, 2, 4, 1, 2, 3, 4, 5));

// Write a function that will combine 2 given array into one array

function combineArr(arr1, arr2) {
  console.log(...arr1);
  console.log(...arr2);
  let newArr = [...arr1, ...arr2];

  return newArr;
}

console.log(combineArr([5, 4, 2], [2, 6, 3]));

// Write a function to find duplicate values in an array

function findDupe(arr) {
  let dupe = [];
  let reverseArr = arr.sort();
  console.log(reverseArr);
  for (let i = 0; i < arr.length; i++) {
    if (
      reverseArr[i] === reverseArr[i - 1] ||
      reverseArr[i] === reverseArr[i + 1]
    ) {
      if (!dupe.find((x) => x == reverseArr[i])) {
        dupe.push(reverseArr[i]);
      }
    }
  }

  return dupe;
}

console.log(findDupe([5, 4, 6, 5, 2, 3, 1, 6, 1]));

// Write a function to find the difference in 2 given array

function findDiff(arr1, arr2) {
  let newArr = [];

  if (arr1.length !== arr2.length) return "Panjang array harus sama";

  for (let i = 0; i < arr1.length; i++) {
    let diff1 = arr1.find((x) => x == arr2[i]);
    let diff2 = arr2.find((x) => x == arr1[i]);
    if (!diff1) {
      newArr.push(arr2[i]);
    }
    if (!diff2) {
      newArr.push(arr1[i]);
    }
  }

  return newArr.sort();
}

console.log(findDiff([1, 2, 3, 4, 5], [2, 3, 4, 7, 8]));

// Based on the array below write a function that will return primitive data types only.                                             let arr = [1, [], undefined, {}, "string", {}, []];
// arr = [1, [], undefined, {}, "string", {}, []];

function sumNum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i])) result++;
  }
  return result;
}

console.log(sumNum([1, [], undefined, {}, "string", {}, [], null, true]));

const primitiveDataOnly = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "object" || arr[i] === null) res.push(arr[i]);
  }
  return res;
};

console.log(
  primitiveDataOnly([1, [], undefined, {}, "string", {}, [], null, true])
);

// ===================
function findPrimitive(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] === "number" ||
      typeof arr[i] === "string" ||
      typeof arr[i] === "boolean" ||
      arr[i] == null
    ) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}
console.log(
  findPrimitive([1, [], undefined, {}, "string", {}, [], null, true])
);

// Write a function from a given array of numbers and return the second smallest number

const secondSmallestNumber = (arr) => {
  let first = Number.MAX_VALUE;
  let second = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      first = arr[i];
    }
    if (arr[i] < second && arr[i] > first) {
      second = arr[i];
    }
  }
  return second;
};

console.log(secondSmallestNumber([5, 6, 7, 8, 2, 1]));

function findSecondSmallest(arr) {
  let sort = arr.sort((a, b) => a - b);
  return sort[1];
}

console.log(findSecondSmallest([5, 6, 7, 8, 2, 3]));

// Write a function from a given array of mixed data types and return the sum of all the number
function sumAllNumbers(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(sumAllNumbers([1, 2, 3, 4, "5", true, 20, 30]));

// Write a function from the below array of number that will return sum of duplicate values.
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];

function sumDuplicate(arr) {
  let sum = 0;
  let sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);

  for (let i = 0; i < arr.length; i++) {
    if (sortedArr[i - 1] == sortedArr[i] || sortedArr[i + 1] == sortedArr[i]) {
      sum += sortedArr[i];
    }
  }

  return sum;
}

console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10, 40]));

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'.
// The function will randomly pick between rock, paper, or scissor.

function rockPaperScissor(playerHand) {
  // 1 untuk gunting
  // 2 untuk batu
  // 3 untuk kertas
  let message = "";
  let functionHand = Math.floor(Math.random() * 3) + 1;
  if (playerHand.toLowerCase() == "gunting".toLowerCase()) {
    if (functionHand == 1) {
      message = "function return gunting its a tie";
    } else if (functionHand == 2) {
      message = "function return batu its a lose";
    } else {
      message = "function return kertas its a win";
    }
  } else if (playerHand.toLowerCase() == "batu".toLowerCase()) {
    if (functionHand == 1) {
      message = "function return gunting its a win";
    } else if (functionHand == 2) {
      message = "function return batu its a tie";
    } else {
      message = "function return kertas its a lose";
    }
  } else if (playerHand.toLowerCase() == "kertas".toLowerCase()) {
    if (functionHand == 1) {
      message = "function return gunting its a lose";
    } else if (functionHand == 2) {
      message = "function return batu its a win";
    } else {
      message = "function return kertas its a tie";
    }
  }
  return message;
}

console.log(rockPaperScissor("Gunting"));
console.log(rockPaperScissor("kertas"));
console.log(rockPaperScissor("batu"));
