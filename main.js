/*
Một số hàm Built-in
1. Alert
2. Console
3. Confirm
4. Prompt
5. Set timeout
6. Set interval 
 */



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





/*
Toán tử trong Javascript
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




/* Toán tử so sánh 

Toán tử
==      -->    Bằng
!=      -->    Không bằng
>       -->    Lớn hơn
<       --<    Nhỏ hơn
>=      -->    Lớn hơn hoặc bằng
<=      -->    Nhỏ hơn hoặc bằng

*/


/*
var a = 1 
var b = 2 

var isSuccess = a > b

console.log(isSuccess)
*/
 

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

 */

function myFunction() {
    document.getElementById('demo').innerHTML = "hello"
}
