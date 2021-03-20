function totalFibonacci(num) {
  if (num <= 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  var sum = 1;

  function findFibonacci(var1, var2) {
    if (var2 <= num) {
      if (var2 % 2 !== 0) {
        sum += var2;
      }
      return findFibonacci(var2, var2 + var1);
    }
  }
  findFibonacci(1, 1);

  return sum;
}
console.log(totalFibonacci(1));
console.log(totalFibonacci(10));
console.log(totalFibonacci(20));
console.log(totalFibonacci(4));
console.log(totalFibonacci(-5));

module.exports = totalFibonacci;
