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

setInterval(function() {
    console.log('day la thong bao' + Math.random())
}, 1000)
