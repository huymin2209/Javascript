// ------------------------------------------


/*
Một số hàm Built-in
1. Alert
2. Console
3. Confirm
4. Prompt
5. Set timeout
6. Set interval 
 */





// ------------------------------------------

// khai bao bien
// var fullName = 'Pham Quang Huy 22'


// goi ham thong bao
// alert(fullName)
// alert('HI Pham Quang Huy')


// console.log(fullName)

// confirm('xac nhan')

// prompt('xac nhan')


/*
setTimeout(function() {
    alert('Thong bao')
}, 1000)
*/

 /*
setInterval(function() {
    console.log('day la thong bao' + Math.random())
}, 500)
*/





// ------------------------------------------

/* Toán tử trong Javascript
1. Toán tử số học - Arithmetic
2. Toán tử gán - Assignment
3. Toán tử so sánh - Comparison
4. Toán tử Logic - Logical
 */

/* 1
var a = 1+2
console.log(a)
*/


/* 2
var fullName = 'Huy'
*/

/* 3
var a = 1
var b = 2 
if (a < b) {
    alert('Dung')
}
*/


/* 4
var a = 1
var b = 2

if (a > 0 && b > 0) {
    alert("a & b lon hon 0")
*/





// ------------------------------------------

/** Toán tử số học
 +     ---> Cộng
 -     ---> Trừ
 *     ---> Nhân
 **    ---> Luỹ thừa
 /     ---> Chia
 %     ---> Chia lấy số dư
 ++    ---> Tăng một giá trị số
 --    ---> Giảm một giá trị số
 */

 /*
 var a = 1
 var b = 2

 var c = 1120 % 2
 console.log(c)
 */


 /*
 var a =5 

 a++
 a--
 a--

 console.log(a)
 */ 



// ------------------------------------------

// Toán tử ++ --
//  Prefix & Postfix (tiền tố & hậu tố)


/*
var a = 6

a++

console.log(a)
*/

/*
var number = 6 

var output = number++ *2 - --number *2

console.log('output', output)
*/

// var person = "hege"




// ------------------------------------------

/* Toán tử chuỗi - String Operato */


/*
var firstName = 'Huy'

var lastName = 'Pham'

console.log(firstName + ' ' + lastName)
*/


/*
var name = 'Son'

name = name + ' Dang'

console.log(name)
*/




// ------------------------------------------

/* Toán tử so sánh - 1 

Toán tử
==      -->    Bằng
!=      -->    Không bằng
>       -->    Lớn hơn
<       --<    Nhỏ hơn
>=      -->    Lớn hơn hoặc bằng
<=      -->    Nhỏ hơn hoặc bằng

*/




// ------------------------------------------

/* Kiểu dữ liệu Boolean
var a = 1 
var b = 2 

var isSuccess = a > b
console.log(isSuccess)
*/




// ------------------------------------------

/* If và Else*/
/** _Các giá trị false ( ngoài các giá trị này luôn true)
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */

/* VD If & Else:
var isSuccess = 2 > 1 

if (isSuccess) {
    console.log('dieu kien dung')
} else {
    console.log('dieu kien sai ')
}
*/





// ------------------------------------------

/** Toán tử logical
 * 1. && - And : Tất cả phải đúng 
 * 2. || - Or : 1 trong các vế  đúng là đc vào
 * 3. ! - Not : đúng thành sai - sai thành đúng 
 */


/* VD : &&
var a = 1 
var b = 2 
var c = 3 

if (a > 0 && b > 0) {
    console.log('True')
}
*/


/* VD: || 
var a = 1
var b = 2 
var c = 3 

if ( a < 0 || b > 0 || c > 0 ) {
    console.log('True')
}
*/


/* VD: !
var a = 1 
var b = 2 
var c = 3 

if (!(a < 0)) {
    console.log ('True')
}
*/




// ------------------------------------------

/* Kiểu dữ liệu trong Javascript 

1. Dữ liệu nguyên thuỷ - Primitive Data
    - Number
    - String
    - Boolean: 
    - Undefined
    - Null 
    - Symbol

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object 
*/ 

// Number type
var a = 1 
var b = 2.5

// String type 
var fullName = 'Huy Pham'

// Boolean (thể hiện đúng sai)
var isSuccess = true
var isSuccess = false

// Undefined type (1 biến ko gán giá trị cho nó)
var age

// Null (không có gì)
var isNull = null

// Symbol (có tính duy nhất)
var id = Symbol('id')




// ------------------------------------------

/* Toán tử so sánh - P2 */
/**
 *  ===
 *  !==
 */

/* VD: 
var a = '1' 
var b = 1 

console.log(a !== b)
*/




// ------------------------------------------

/* Toán tử Logical và câu lệnh điều kiện If */

/* 
var a = 1 
var b = 2 

if ( a < b ) {
    console.log ('True')
} else {
    console.log('False')
}
 */

/* 
var a = 1
var b = 2

var result = a < b && a > 0

console.log(result)
*/


/*
var a = 1
var b = 2 

var result = 'A' && 'B' && 'C'

if (result) {
    console.log('True')
} else {
    console.log('False')
}
*/

/*
var a = 1
var b = 2

var result = 'A' || 'B' || 'C' || 'D'

console.log('result', result)
*/




// ------------------------------------------

/* Chuỗi Trong JavaScript

1. Tạo chuỗi
    - Các cách để tạo chuỗi
    - Nên dùng cách nào? Lý do?
    -Kiểm tra data type

2. Một số case sử dụng trong backslash (\)

3. Xem độ dài chuỗi

4. Chú ý độ dài khi viết code

5. Template string ES6
*/

// VD:

var fullName













/* -- JS INTRODUCTION --

document.getElementById("demo").innerHTML = "Hello PQH";

document.getElementById("demo").style.fontSize = "50px"

document.getElementById('demo').style.display = 'none'

document.getElementById('demo').style.display = 'block'

*/



/* -- JS WHERE TO --

_sửa luôn bên trong file .html _có thể đặt trong <head> hoặc <body>

<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

function myFunction() {
    document.getElementById('demo').innerHTML = "hello"
}

*/




