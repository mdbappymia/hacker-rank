// fizzBuzz solve demo
function fizzBuzz(n) {
  if (n % 3 == 0 && n % 5 == 0) {
    return "FizzBuzz";
  }
  if (n % 3 == 0 && n % 5 != 0) {
    return "Fizz";
  }
  if (n % 3 != 0 && n % 5 == 0) {
    return "Buzz";
  }
  if (n % 3 != 0 && n % 5 != 0) {
    return n;
  }
}

//solve 3
function compareTriplets(a, b) {
  let alicePoint = 0;
  let bobsPoint = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicePoint++;
    } else if (a[i] < b[1]) {
      bobsPoint++;
    }
  }
  return [alicePoint, bobsPoint];
}
// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
function aVeryBigSum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
// console.log(
//   aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
// );

function diagonalDifference(arr) {
  let arrayLength = arr.length;
  let a = 0;
  let b = 0;

  for (let i = 0; i < arrayLength; i++) {
    a += arr[i][i];
    b += arr[arrayLength - 1 - i][i];
  }
  return Math.abs(a - b);
}
// console.log(
//   diagonalDifference([
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
//   ])
// );

function plusMinus(arr) {
  let positiveNumberArray = 0;
  let negativeNumberArray = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumberArray++;
    } else if (arr[i] < 0) {
      negativeNumberArray++;
    } else {
      zero++;
    }
  }
  const positiveFraction = positiveNumberArray / arr.length;
  const negativeFraction = negativeNumberArray / arr.length;
  const zeroFraction = zero / arr.length;
  console.log(
    positiveFraction.toFixed(6) + "\n",
    negativeFraction.toFixed(6) + "\n",
    zeroFraction.toFixed(6) + "\n"
  );
}
// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
function staircase(n) {
  let output = "";

  for (let i = 1; i <= n; i++) {
    for (let s = n - 1; s >= i; s--) {
      output += " ";
    }

    for (let h = 1; h <= i; h++) {
      output += "#";
    }
    output += "\n";
  }
  console.log(output);
}
staircase(5);
