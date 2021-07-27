function endZeros(num) {
  num = num.toString();
  let count = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] !== "0") {
      return count;
    }
    count++;
  }
  return count;
}
