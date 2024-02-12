function countDown(message) {
  console.log(message);

  let nextNumber = message - 1;
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(3);
