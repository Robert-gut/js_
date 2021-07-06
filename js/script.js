// alert('hello world');
// console.log('edit node')

// document.body.style.background = 'red';


// let name = 'Pol';
// var age = 22;
// const PI = 3.14;
// console.log(typeof(name));  
// console.log(typeof(age)); 
// console.log(typeof(PI));
// console.log(typeof(PI + name)) 


// alert('hello world');

// let age = confirm("are you 18?")
// console.log(age)

// let a = +prompt('перше число');
// let b = +prompt('друге число');

// console.log((a + b)/2);

// let age = +prompt('Input age');

// if(age >= 18){
//     console.log('open')
// }else{
//     console.log('close')
// };

// let number_day = +prompt('введіть номер дня');
// if(number_day == 1){
//     console.log('Пн')
// }
// else if(number_day == 2){
//     console.log('вт')
// }
// else if(number_day == 3){
//     console.log('ср')
// }
// else if(number_day == 4){
//     console.log('чт')
// }
// else if(number_day == 5){
//     console.log('пт')
// }
// else if(number_day == 6){
//     console.log('суб')
// }
// else if(number_day ==7){
//     console.log('нд')
// }
// else{
//     console.log('eroor 1-7')
// }

// let number = +prompt('input numbers')

// if(number > 0 && number <= 20){
//     console.log('ok')
// }else if(number <= 0 || number > 20){
//     console.log('no 1-20')
// }else{
//     console.log('error')
// }


// let login = prompt('хто прийшов?')
// if(login == 'admin'){
// console.log('admin')
//     let password = prompt('password')
//     if(password == 'ШАГ'){
//             console.log('ласкаво просимо')
//     }else if(password == null){
//         console.log('вхід скасована')
//     }else{
//         console.log('пароль не вірний')
//     }
// }else if(login == null){
//     console.log('вхід скасована')
// }else{
//     console.log('я вас не знаю')
// }


////////////3333


// let number = +prompt('темперратура')

// if(number <= 20  || number >= 46){
//     console.log('ви труп')
// }else if(number >= 20 && number <= 27){
//     console.log('ви у комі')
// }else if(number >= 27 && number < 36 || number > 37 && number <= 42){
//     console.log('ви хворі')
// }else if(number >= 36 && number <= 37){
//     console.log('ви здорові')
// }else if(number >= 42 && number <= 46){
//     console.log('ви втратили свідомісьть')
// }else{
//     console.log('помилка')
// }





//////444444
// let abc = +prompt('якщо 1 - то переводимо гривні в долари ' + '\n' + 'якщо 2 - то переводимо долари в гривні.')

// if(abc == 1){
//     let abc1 = +prompt('к-ть')
//     console.log(abc1 * 0.036)
// }else if (abc == 2){
//     let abc2 = +prompt('к-ть')
//     console.log(abc2 * 27.53)
// }else{
//     console.log('не коректні дані')
// }


//////////5555

// let abc = +prompt('якщо 1 - то ви чоловік' + '\n' + 'якщо 2 - то ви жінка.')

// if(abc == 1){
//     let abc1 = +prompt('вік')
//     if(abc1 >= 65){
//         console.log('Ви пінціонер')  
//     }else if(abc1 < 65){
//         console.log('ви не пенсіонер')
//     }
// }else if (abc == 2){
//     let abc2 = +prompt('вік')
//     if(abc2 >= 60){
//         console.log('Ви пінціонер')  
//     }else if(abc2 < 60){
//         console.log('ви не пенсіонер')
//     }
// }else{
//     console.log('не коректні дані')
// }


/////////////666666


// let abc = +prompt('якщо 1 - децеметри ' + '\n' + 'якщо 2 - метри' + '\n' + 'якщо 3 - сантиментри' + '\n' + 'якщо 4 - міліметри')

// if(abc == 1){
//     let abc1 = +prompt('дицеметрів')
//     let asdf = abc1 * 0.1
//     console.log(asdf + 'м')
// }else if (abc == 2){
//     let abc1 = +prompt('метрів')
//     console.log(abc1 + 'м') 
// }else if (abc == 3){
//     let abc1 = +prompt('сантиметрів')
//     let asdf = abc1 * 0.01
//     console.log(asdf + 'м')
// }else if (abc == 4){
//     let abc1 = +prompt('сантиметрів')
//     let asdf = abc1 * 0.001
//     console.log(asdf + 'м')
// }else{
//     console.log('не короктні дані')
// }


/////////////777777777

// let abc = +prompt('1 бажаю узнати свою ідеальну вагу')

// if(abc == 1){
//     let abc1 = +prompt('який твій зріст?')
//     let abc2 = +prompt('який рік народження?')
//     abc3 =  2021 - abc2
//     if(abc3 < 40){
//         let ggg = abc1 - 100
//         console.log('твоя ідеальна вага ' + ggg)
//     }else if(abc3 > 40){
//         let ggg = abc1 - 90
//         console.log('твоя ідеальна вага ' + ggg)
//     }
// }else{
//     console.log('не короктні дані')
// }

////////////8888888

// let number = +prompt('input number')

// if(number % 3 ==0){console.log('multiple 3')}
// if(number % 4 ==0){console.log('multiple 5')}
// if(number % 7 ==0){console.log('multiple 7')}
// if(number % 9 ==0){console.log('multiple 9')}
// if(number % 3 !=0 && number % 5 !=0){console.log('no multiple 3 5 7')}

//////////999999999
// let number = +prompt('numbers')

// if((number % 2)==0){
//     console.log('even')
// }else if((number % 2) == 1){console.log('odd')}

/////////////10

// let number = +prompt('катет')
// let num = +prompt('катет')
// let n = +prompt('гіпотенузу')

// let fgh = number **2 + num **2
// if(fgh == n**2){
//     console.log('трикутник прямокутний')
// }else if(fgh != n**2){
//     console.log('трикутник не прямокутний')
// }

// const age = +prompt("Рік народження");
// console.log(age % 12)
// switch(age % 12){
//     case 4:console.log('Щур ');break;
//     case 5:console.log('Бик ');break;
//     case 6:console.log('Тигр');break;
//     case 7:console.log('Заяць ');break;
//     case 8:console.log('Дракон');break;
//     case 9:console.log('Змія');break;
//     case 10:console.log('Кінь');break;
//     case 11:console.log('Вівця ');break;
//     case 0:console.log('Мавпа');break;
//     case 1:console.log('Півень');break;
//     case 2:console.log('Собака');break;
//     case 3:console.log('Кабан ');break;
//     default: console.log('Error');
// }

// while(){

// }





// for(let i = 0; i < 10; i++){
//     document.write(`<p> ${i}.Hello!!!<p>`)
// }

// for(let i = 5; i > 0; i--){
//     alert(i)
// }

// document.body.style.background = 'url(https://lh3.googleusercontent.com/proxy/5qLASS4aUQPcR4kzeveAKhY30nUj0SHJoIX5wYeckXVRaacrTpnBxXoCP3un83lmeUxsvWAlsqX-XeGPCSfGqMq4NBpmrVLZdnpUV8fK3sRYekgbN9RPVWytZTUaVL70f7x5FQ437uy7EUNqtxeLeg) no-repeat'; 


// let b = +prompt('number')

// for(let i = 1; i <= 10; i++){
//     document.write(`${i} <br>`)
// }

// let q,w,e;
// plas = 0;
// min = 0;
// nul = 0;

// let b = +prompt('введіть скільки цифер')
// for(let i = 0; i < b; i++){
//     let q = +prompt('введіть цифри');
//     if( q == 0 ){
//         nul++
//     }else if( q > 0 ){
//         plas++
//     }else if(q < 0){
//         min++ 
//     }  
    
// }

// console.log(plas);
// console.log(min);
// console.log(nul);



// for(let i = 0; i < 5; i++){
//     let b = +prompt('введіть цифри');
//     let c = +prompt('введіть цифри');
//     if(b > c){
//         console.log(b)
//     }else if(b < c){
//         console.log(c)
//     }else if(b == c){
//         console.log(`${b} = ${c}`)
//     }
// }



// for(let i = 35; i < 88; i++){
//     if(i % 7 == 1 || i % 7 == 2 || i % 7 == 5){
//         console.log(i)
//     }

// }


// let c = 1;
// let b = +prompt('введіть factorial');
// for(let i = 1; i < b; ){
//     c = c*++i;
//     console.log(c)
// }


// let l = 0
// let r = 0
// let b = +prompt('введіть 5 значне число');
// let c = 0;
// for(; b != 0;){
//     let v = b % 10
//     if(v % 2 == 0){
//         l += v
//     }else if(v % 2 != 0){
//         r += v
//     }
//     b = parseInt(b/10)
//     console.log(l + r)
// }



// const arr = []
// for (let i = 0; i < 6; i++) {
//     arr[i]= +prompt('numbers');   
// }
// console.log(arr)

// document.write(`<ol>`)  
// for (let i = 0; i < arr.length; i++) {
//     document.write(`<li> ${arr[i]}</li>`)   
// }
// document.write(`</ol>`)  

// let a = [[1, 2],[14, 42],[12, 99]]

// for (let i = 0; i < a.length; i++) {
//     document.write(`<p> ${a[i][0]} and ${a[i][1]}</p>`)
    
// }
// console.log(a.flat)


// const m = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', ]
// const c = ['Black', 'White', 'Brown', 'Red', 'Grey', 'Blue', 'Green', 'Pink', 'Purple', 'Yellow', 'Orange', 'Beige', ]

// for (let i = 0; i < m.length; i++) {
//     document.write(`<p style="color: ${c[i]}"> ${m[i]}</p>`)
   
// }

/////////////ddddddddddddzzzzzzzzzzzzzzzzzz

// const m = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', ]

// let a = m[parseInt(Math.random()*10)];
// console.log(a)

// let v = ["*" ,"*" , "*", "*", "*", "*", "*", "*"]

// while(true){
//     alert(v)
//     let b = prompt('1 символ')
//     if(b.length == 1){
//         for (let i = 0; i < a.length; i++) {
//             if(b == a[i].toLowerCase()){
//                 console.log(`Правельна буква ${i}`)
//                 v[i] = b
              
//             }
//         }
    
//     }else{
//         console.log('тільки 1 букву')
//     }
//





// let arr = [1,2,3,4,5,6];

// console.log(arr); 
// console.log(arr.sort()); 





// console.log(arr.reverse()); 





// console.log(arr.indexOf(2)); 
// console.log(arr.lastIndexOf(2)); 

// arr.push(7);
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.join(''));
// let date = '20.20.2021'
// console.log(date.split('.'))

// let arr2 = arr.slice(1,4);
// console.log(arr2)

// let arr3 = arr.splice(1,1,99,88);
// console.log(arr3)
// console.log(arr)



// function showMessage(){
//     console.log('hello world')
// };

// showMessage();


// let showcolor = function(str){
//     console.log(str)
// };

// showcolor('red');

// let sum = function(a, b){
//     return a + b;
// }

// console.log(sum(1,2))



// let countDigit = function(number){
//     let counter = 0;
//     while(number != 0){
//         number = parseInt(number / 10);
//         counter++;
//     }
//     return counter;
// }
// let number = +prompt('Input numbe: ');
// let length = countDigit(number);
// console.log(length)




//////////////////////1111111111
// let numbers = function (a ,b){
//     let c = 0
//     if(a > b){
//         c = b
//     }if(a < b){
//         c = a
//     }
//     return c;
// }
// let a = +prompt('a =');
// let b = +prompt('b =');
// console.log(numbers(a ,b))

///////////////////22222222222
// let numbers = function (a ,b){
    
//     return a**b;
// }
// let a = +prompt('num =');
// let b = +prompt('step =');
// console.log(numbers(a ,b))

///////////////////33333333333
// let numbers = function (a,b,c){
//     let q = 0
//     if(c == '+'){
//         q = a + b
//     }if(c == '-'){
//         q = a - b
//     }if(c == '*'){
//         q = a * b
//     }if(c == '/'){
//         q = a / b
//     }
//     return q;
// }
// let a = +prompt('a =');
// let b = +prompt('b =');
// let c = prompt('+-*/');
// console.log(numbers(a,b,c))

//////////////4444

// let prime = function (number){
//    for(let i = 2; i < number; i++){
//     if(number % i == 0) return false;{
//         return true
//     }

// }
// let a = +prompt('a =');
// console.log(numbers(a))


/////////////////////5555555555555

// let numbers = function (a){

//     for (i = 0; i < 9; i++) {
//         console.log(a * i)
//     };
// }
// let a = +prompt('a =');
// console.log(numbers(a))

///////////////////////66666666666666

// let numbers = function (a,b){
   
//     return a - parseInt(a / b) *  b;
// }
// let a = +prompt('a /');
// let b = +prompt('b');

// console.log(numbers(a,b,))

/////////////////////7777777777777

// let numbers = function (a,b,c,d,e){
   
//     return a+b+c+d+c;
// }
// let a = +prompt('a');
// let b = +prompt('b');
// let c = +prompt('c');
// let d = +prompt('d');
// let e = +prompt('e');
// console.log(numbers(a,b,c,d,e))



// ////////////////8888888888888
// let numbers = function (a,b,c,d,e){
//    if(a > )
//     return a+b+c+d+c;
// }
// let a = +prompt('a');
// let b = +prompt('b');
// let c = +prompt('c');
// let d = +prompt('d');
// let e = +prompt('e');
// console.log(numbers(a,b,c,d,e))



// let aquare = (w,h) => h==undefined ? w**2 : w*h
// console.log(aquare(2,4))

// let checkLucky = (number) =>{
//     let sum = 0;
//     for(i = 0; i < number; i++){
//         if(number % i == 0) sum+= i;
//     }    
//     return number == sum ? true : false;
// }

// let rangePerfect = (min,max) =>{
//     let temp;
//     if(min > max){
//         temp = min;
//         min = max;
//         max = temp;
//     }
//     for (let i = min; i <= max; i++) {
//         if(checkLucky(i)){console.log(i); temp = true};
//     }
//     if(!temp) console.log('perfect')
// }

// rangePerfect(1,100)


// let time = (h = 0 ,m = 0,s = 0) => {
//     h = h < 10 ? '0' +h : h; 
//     m = m < 10 ? '0' +m : m; 
//     s = s < 10 ? '0' +s : s; 
//     document.write(`${h}:${m}:${s}`)
//     return `${h}:${m}:${s}`;
// }
// console.log(time(10,6,7))


// let getSeconds = (h,m,s) => h * 3600 + m * 60 + s;



// let getTime = (s) => time(parseInt(s / 3600),parseInt((s%=3600) / 60),s%=60)



// let getSudTime = (h1,m1,s1,h2,m2,s2) => {
//     let sub = getSeconds(h1,m1,s1) - getSeconds(h2,m2,s2);
//     return sub < 0 ? getTime(sub*-1) :  getTime(sub);
// }







// let cheackLeapYear = (year) => (year % 4 ==0 && year % 100 != 0 || year % 400 == 0) ? true : false; 


// let getDaysForMouns = (mouth) => {
//     switch(mouth){
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//             return 31; 
//         case 4: case 6: case 9: case 11:
//             return 30;
//         case 2:
//             return cheackLeapYear(year) ? 29 : 28;
//     }
// }


// let date = (day = 0, mouth = 0,yaer = 0) => `${day < 10 ? '0' + day : day}.${mouth < 10 ? '0' + mouth : mouth}.${yaer}`;

// let getNextDey = (day,month,yaer) => {
//     day++;
//     if(day > getDaysForMouns(month,yaer)){
//         day = 1
//         month++;
//     }if(month > 12){
//         month = 1;
//         yaer++;   
//     }
//     return date(day,month,yaer)
// }

// console.log(getNextDey(31,12,2020))



// let arr = [2,3,5,8,4,545,5545,58,54,55,5548784,84,84,4,654,654,6584];

// let print = (mas) => {
//     for (let i = 0; i < mas.length; i++) {
//         if(mas[i] % 2 == 0)console.log(mas[i]);
//     }
// }
// // print(arr)

// let getMaxArray = (mas) => {
//     // let max = mas[];
//     for (let i = 1; i < mas.length; i++) {
//         if(max < mas[i]) max = mas[i];
//     }
//     return max;
// }

// let res = Math.max(...arr);
// let result = arr.filter( el => el%2 == 0 ? el : null)



// let fact = (n) => {
//     if(n == 1) return 1;
//     return n * fact(n - 1);
// }

// console.log(fact(7))




// let show = (n) => {
//     document.write('(')
//     if (n!=1) show(n-1);
//     document.write(')')
// }
// show(2)


// let show = (n) => {
//     if(n < 10) return n;
//     return n%10 + show(parseInt(n/10))
// }

// console.log(show(1357))





// let $btn = document.querySelector('button');

// $btn.onclick = () => {
//     p.style.color = 'red';
//     p.style.textAlign = 'center';
// }


// let p = document.querySelectorAll('#text');
// let btn = document.querySelector('button');

// let flag = false;
// for (let i = 0; i < p.length; i++) {
//     p[i].addEventListener('click',function(){
//         if(this.style.color != 'red'){
//             this.style.color = 'red';
//             this.style.fontSize = '24px';
//             this.textContent = 'Active'
            
//         }
//         else{
//             this.style.color = 'black';
//             this.style.fontSize = '16px';
//             this.textContent = 'Hello World'
            
//         }
      
//     })
    
// }




// let p = document.querySelector('p')

// let $btn1 = document.querySelector('#btn1');
// let $btn2 = document.querySelector('#btn2');
// let $btn3 = document.querySelector('#btn3');
// let $btn4 = document.querySelector('#btn4');

// $btn1.onclick = () => {
//     p.style.color = 'black';
//     p.style.width = '500px'
//     p.style.fontStyle = '18px'
//     p.style.margin = '50px auto'
//     p.style.backgroundColor = 'rgb(170, 170, 119)'
//     p.style.padding = '10px'
//     p.style.border = 'solid 3px  rgb(130, 126, 182)'
//     p.style.borderRadius = '3px'
//     p.style.fontStyle = 'italic'
//     p.style.fontWeight = '600'
// }

// $btn2.onclick = () => {
//     p.style.color = 'rgb(59, 6, 59)';
//     p.style.width = '650px'
//     p.style.fontStyle = '15px'
//     p.style.margin = '50px 20px  50px auto'
//     p.style.backgroundColor = 'rgb(194, 71, 194)'
//     p.style.padding = '10px'
//     p.style.border = 'dashed 8px  rgb(72, 15, 148)'
//     p.style.borderRadius = '3px'
//     p.style.fontStyle = 'italic'
//     p.style.fontWeight = '600'
// }

// $btn3.onclick = () => {
//     p.style.color = 'rgb(59, 6, 59)';
//     p.style.width = '650px'
//     p.style.fontStyle = '15px'
//     p.style.margin = '50px 20px  50px auto'
//     p.style.backgroundColor = 'rgb(194, 71, 194)'
//     p.style.padding = '10px'
//     p.style.border = 'dashed 8px  rgb(72, 15, 148)'
//     p.style.borderRadius = '3px'
//     p.style.fontStyle = 'italic'
//     p.style.fontWeight = '600'
// }




// let $block = document.querySelector('.block');

// $block.addEventListener('click', (event) =>{
//     console.log(event.target);
//     if(event.target.tagName.toLowerCase() == 'p'){
//         event.target.style.color = 'red';
//     }
//     if(event.target.tagName.toLowerCase() == 'li'){
//         event.target.style.color = 'blue';       
//         event.target.style.fontSize = '25px';       
//     }
//     if(event.target.tagName.toLowerCase() == 'div'){
//         event.target.style.backgroundColor = 'yellow'      
//     }
//     if(event.target.tagName.toLowerCase() == 'ul'){
//         event.target.style.backgroundColor = 'violet'      
//     }
    
// })

// let $btn = document.querySelector('.btn');


// $btn.addEventListener('click', (event)=>{
//     let el = event.target
//     if(el.tagName == 'LI'){
//         el.style.textDecoration = 'line-through';
//     }
//     let list = document.querySelectorAll('.btn li')
//     if(el.dataset.list == 'all'){
//         for(let i = 0; i < list.length; i++){
//             list[i].style.display = 'block'
//         }
//     }
//     if(el.dataset.list == 'active'){
//         for(let i = 0; i < list.length; i++){
//             if(list[i].style.textDecoration != 'line-through'){
//                 list[i].style.display = 'block'
//             }else{
//                 list[i].style.display = 'none'
//             }
//         }
//     }
//     if(el.dataset.list == 'done'){
//         for(let i = 0; i < list.length; i++){
//             if(list[i].style.textDecoration != 'line-through'){
//                 list[i].style.display = 'none'
//             }else{
//                 list[i].style.display = 'block'
//             }
//         }
//     }
// })






let $img = document.querySelector('#current');
let $left = document.querySelector('#left');
let $right = document.querySelector('#right');
let min_img = document.querySelectorAll('.smallImg img');

let src_img = [];
for (let i = 0; i < min_img.length; i++) {
    src_img[i] = min_img[i].getAttribute('src')
}
let i = 0;
$left.addEventListener('click',() =>{
    i--;
    if(i < 0) i = src_img.length - 1;
    $img.src = src_img[i];
} )

$right.addEventListener('click',() =>{
   i++;
   if(i == src_img.length) i = 0;
   $img.src = src_img[i];
    
} )

for (let j = 0; j < min_img.length; j++) {
    min_img[j].addEventListener('click', () =>{
        $img.src = src_img[j]
        i = j;
    } )
    min_img[j].addEventListener('mouseenter', () =>{
        min_img[j].style.transform = 'scale(1.2)';
        min_img[j].style.opacity = '1';
    } )
    min_img[j].addEventListener('mouseleave', () =>{
        min_img[j].style.transform = 'scale(1)';
        min_img[j].style.opacity = '.7';
    } )
}