//Lab2-Bài 1
function checkMark(mark) {
  if (mark >= 85) return "A";
  else if (70 <= mark && mark < 85) return "B";
  else if (40 <= mark && mark < 70) return "C";
  else return "D";
}
console.log(checkMark(10));

//Lab3-Bài 1
function checkDay(day) {
  switch (day) {
    case 0:
      return "Hôm nay là Chủ nhật";
    case 1:
      return "Hôm nay là Thứ 2";
    case 2:
      return "Hôm nay là Thứ 3";
    case 3:
      return "Hôm nay là Thứ 4";
    case 4:
      return "Hôm nay là Thứ 5";
    case 5:
      return "Hôm nay là Thứ 6";
    case 6:
      return "Hôm nay là Thứ 7";
    default:
        return "Wrong value";
  }
}
console.log(checkDay(2));

//Lab4-Bài 1
function repeatString(a) {
    let string = a;
    for (let index = 0; index < 9; index++) {
        string += a;
    }
    return string;
}
console.log(repeatString('1'));

//Lab4-Bài 2
function repeatString2(a) {
    let string = a;
    for (let index = 0; index < 9; index++) {
        string += '-' + a;
    }
    return string;
}
console.log(repeatString2('c'));

//Lab4-Bài 3
function repeatString3(a, n) {
    let string = a;
    for (let index = 0; index < n - 1; index++) {
        string += '-' + a;
    }
    return string;
}
console.log(repeatString3('b', 5));

//Lab4-Bài 4
function sum() {
    let num = 0;
    for (let index = 0; index < 101;    index++) {
        if(index % 5 == 0) {
            num += index;
        }
    }
    return num;
}
console.log(sum());

//Lab4-Bài 5
function volume(r) {
    return (4/3) * Math.PI * r * r * r;
}
console.log(volume(1));

//Lab4-Bài 6
function sum2(a, b) {
    let c = 0;
    for (let i = a + 1; i < b; i++) {
        c += i;
    }
    return c;
}
console.log(sum2(1,5));