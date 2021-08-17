"use strict";
function vowelsAndConsonants(s) {
  let vowels = [];
  let consonas = [];
  for (var i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u"
    ) {
      vowels.push(s[i]);
    } else {
      consonas.push(s[i]);
    }
  }

  let concatArr = [...vowels, ...consonas];
  for (let i of concatArr) {
    console.log(i);
  }
}
// vowelsAndConsonants("javascriptloops");
function regexVar(s) {
  let re = /^([aeiou]).+\1$/;
  return re;
}
// console.log(regexVar("aba"));
function reverseString(s) {
  try {
    let stringArray = s.split("");
    let reverseStringArray = stringArray.reverse();
    let reverseString = reverseStringArray.join("");
    console.log(reverseString);
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}
// console.log(reverseString(1234));
function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else if (a == 0) {
    throw new console.error("Zero Error");
  } else {
    throw new console.error("Negative Error");
  }
}
// console.log(isPositive(3));
function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  let radius = readLine();
  let r = Number.parseInt(radius);
  // Print the area of the circle:
  const area = PI * r * r;
  console.log(area);
  // Print the perimeter of the circle:
  const perimeter = 2 * PI * r;
  console.log(perimeter);
  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
// main();

function getGrade(score) {
  let grade;
  if (score > 25 && score <= 30) {
    grade = "A";
  }
  if (score > 20 && score <= 25) {
    grade = "B";
  }
  if (score > 15 && score <= 20) {
    grade = "C";
  }
  if (score > 10 && score <= 15) {
    grade = "D";
  }
  if (score > 5 && score <= 10) {
    grade = "E";
  }
  if (score > 0 && score <= 5) {
    grade = "F";
  }
  return grade;
}
// Inharitance
// class Rectangle {
//   constructor(w, h) {
//     this.w = w;
//     this.h = h;
//   }
// }
// Rectangle.prototype.area = function () {
//   return this.w * this.h;
// };
// class Square extends Rectangle() {
//   constructor(s) {
//     super(s);
//   }
// }

///conditional statement

function getLetter(s) {
  let letter;
  switch (s[0]) {
    case "a" || "e" || "i" || "o" || "u":
      letter = "A";
      break; // Write your code here

    case "b" || "c" || "d" || "f" || "g":
      letter = "B";
      break;
    case "h" || "k" || "l" || "m":
      letter = "C";
      break;
    case "z" ||
      "n" ||
      "p" ||
      "q" ||
      "r" ||
      "s" ||
      "t" ||
      "v" ||
      "w" ||
      "x" ||
      "y":
      letter = "D";
  }
  return letter;
}
// console.log(getLetter("zwxy"));

// 2nd largest value in array
function getSecondLargest(nums) {
  let uniqueNums = [...new Set(nums)];
  let largest = uniqueNums[0];
  for (let i = 0; i < uniqueNums.length; i++) {
    if (uniqueNums[i] > largest) {
      largest = uniqueNums[i];
    }
  }

  let pos = uniqueNums.indexOf(largest);
  uniqueNums.splice(pos, 1);
  let secondLargest = uniqueNums[0];
  for (let i = 0; i < uniqueNums.length; i++) {
    if (uniqueNums[i] > secondLargest) {
      secondLargest = uniqueNums[i];
    }
  }
  return secondLargest;
}
// console.log(getSecondLargest([2, 3, 6, 6, 5]));

//object
function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
}

//Count object
function getCount(objects) {
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x == objects[i].y) {
      count++;
    }
  }
  return count;
}
// console.log([{}]);

//Class
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    let sum = 0;
    for (let i = 0; i < this.sides.length; i++) {
      sum += this.sides[i];
    }
    return sum;
  }
}
let triangle = new Polygon([3, 4, 5]);
// console.log(triangle.perimeter());
// Day 5: Template Literals
function sides(literals, ...expressions) {
  const a = expressions[0];
  const p = expressions[1];
  console.log(p);
  const value = Math.sqrt(p * p - 16 * a);
  return [(p + value) / 4, (p + value) / 4];
}

function sides(literals, ...expressions) {
  let area = expressions[0];
  let perimeter = expressions[1];

  let d = Math.sqrt(perimeter * perimeter - 16 * area);

  let s1 = (perimeter + d) / 4;
  let s2 = (perimeter - d) / 4;

  return [s1, s2].sort();
}

/////////////////////////////
function modifyArray(nums) {
  const sqrArrElement = (a) => {
    let ans = 0;
    if (a % 2 == 0) {
      ans = a * 2;
    } else {
      ans = a * 3;
    }
    return ans;
  };
  let sqrArr = [];
  for (let i = 0; i < nums.length; i++) {
    sqrArr.push(sqrArrElement(nums[i], i));
  }
  return sqrArr;
}
// console.log(modifyArray([1, 2, 3, 4, 5]));
// console.log(modifyArray([14, 25, 36, 47, 58, 69, 70, 81, 92]));

//min-max sum
function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;
  let minval = arr[0];
  let maxVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxVal < arr[i]) {
      maxVal = arr[i];
    }
    minSum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (minval > arr[i]) {
      minval = arr[i];
    }
    maxSum += arr[i];
  }

  console.log(minSum - maxVal, maxSum - minval);
}
// console.log(miniMaxSum([1, 2, 3, 4, 5]));

function nazrul(a) {
  return Math.sqrt(a);
}

// console.log(nazrul(0.001));
