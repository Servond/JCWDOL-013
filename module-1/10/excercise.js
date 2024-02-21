function convertExcelTitle(input) {
  let res = 0;
  for (let i = 0; i < input.length; i++) {
    res *= 26;
    res += input[i].toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 1;
  }

  return res;
}
console.log(convertExcelTitle("AB"));

function findNonDuplicate(arr) {
  const uniq = arr.filter((item, index) => {
    console.log(item, index);
    arr.splice(index, 1);
    console.log(arr);
    const unique = !arr.includes(item);
    arr.splice(index, 0, item);
    return unique;
  });
  console.log(arr);

  console.log(uniq);
  return uniq;
}

function findNonDuplicate(arr = []) {
  return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}
let arr = [1, 1, 2, 2, 4, 6];
console.log(findNonDuplicate(arr));

console.log(arr.includes(6));
console.log(findNonDuplicate(arr));

function checkIfAnagram(s, t) {
  let splitS = s.split("");
  console.log(splitS);
  let splitT = t.split("");
  console.log(splitT);

  splitS.sort();
  console.log(splitS);
  splitT.sort();
  console.log(splitT);

  if (splitS.join("") == splitT.join("")) {
    return `${t} is an anagram for ${s}`;
  }

  return `${t} is not an anagram for ${s}`;
}

console.log(checkIfAnagram("test", "etts"));

function findWays(n) {
  let n1 = 1;
  let n2 = 1;

  for (let i = 2; i <= n; i++) {
    let curr = n1 + n2;
    n2 = n1;
    n1 = curr;
  }

  return n1;
}

console.log(findWays(2));
