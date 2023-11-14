console.log("helllo world");
//alert("hello world");
//document.write("Hello world");
let age;
age = 10;

//Template string - es6 (truyền biến vào chuỗi)
let name = "Bùi Hiên";
let year = 1997;

console.log(
  `Xin chào các bạn, mình tên là ${name}. Năm nay ${2023 - year} tuổi`
);
console.log(
  "Xin chào các bạn, mình tên là " +
    name +
    ". Năm nay " +
    (2023 - year) +
    " tuổi"
);

//function
//c1: regular function ( thông thường)
function sum(a, b) {
  return a + b;
}
console.log(sum(3,4));

//c2: function expression (gán 1 function cho 1 biến)
const sum2 = function (a,b) {
    return a + b;
}
console.log(sum2(4,5));

//c3: arrow function - es6 (lambda expression - java8)
const sum3 = (a = 10, b = 20) => {    //default parameter (sẽ gọi gtrị mặc định nếu ko truyền gtrị)
    console.log(a,b);
    return a + b;
}
//const sum3 = (a, b) => a + b;
// console.log(sum3(1,2));
// console.log(sum3(1));
// console.log(sum3());
console.log(2 == 2);
console.log(2 == '2'); //thực hiện convert xong so sánh 2 số
console.log(2 === '2'); //so sánh cả kiểu dữ liệu