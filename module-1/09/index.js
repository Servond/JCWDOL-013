// Brute Force

function checkDuplicate1(arr) {
  for (let i in arr) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) return true;
    }
    i++;
  }
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     console.log(i);
  //     if (arr[i] == arr[j]) return true;
  //   }
  // }

  return false;
}

console.log(checkDuplicate1([2, 1, 3, 6, 14, 7, 8, 12, 13, 1]));

// Optimize with extra memory

function checkDuplicate2(arr) {
  const uniqueData = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (uniqueData.has(arr[i])) return true;
    else uniqueData.add(arr[i]);
    console.log(arr[i], uniqueData);
  }
  return false;
}

console.log(checkDuplicate2([1, 2, 3, 1]));

// Optimize without extra memory
function checkDuplicate3(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }

  return false;
}

console.log(checkDuplicate3([1, 2, 3, 5, 6, 9, 10, 14, 15, 19, 20, 14]));

// Linear Search

function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([4, 5, 6, 20, 11], 20));

// Binary Search

function binarySearch(arr, l, r, x) {
  console.log(arr, l, r, x);
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    console.log(mid);

    console.log(arr[mid]);
    if (arr[mid] == x) return mid;

    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
    console.log(r);
    return binarySearch(arr, mid + 1, r, x);
  }

  return -1;
}

let arr = [2, 3, 4, 10, 40, 20, 14, 13];
arr.sort((a, b) => a - b);
console.log(arr);
let x = 13;
console.log(binarySearch(arr.sort(), 0, arr.length - 1, x));

// Bubble Sort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([5, 3, 7, 8, 4, 6]));

// Selection Sort

function selectionSort(arr) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
      console.log(arr);
    }

    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
