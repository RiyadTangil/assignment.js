// var number1 = .2;
// var number2 = .4;
// var total = number1+number2;
// total = total.toFixed(3)
// console.log(total);


// var number = -2.658;
// var absoluteNumber = Math.abs(number);
// var absoluteNumber = Math.round(number);
// var absoluteNumber = Math.ceil(number);
// var absoluteNumber = Math.floor(number);
// var absoluteNumber = Math.random(number);
// console.log(absoluteNumber);









// ...................condition..................

// var biscuitPrice = 12 
// // if(biscuitPrice > 10){
// // if(biscuitPrice > 10){
//     if(biscuitPrice != 12){
//   console.log("I will eat buscuit");
// }
// else{
//   console.log("Only cha is better option");
// }

// var jobPaiso = true;
// var savingAmount = 4000;
// if(jobPaiso=true && savingAmount > 30000){
//     console.log("cholo patri khuji");
// }
// else{
//     console.log("tor kopale biya naye");
// }

// var jobPaiso = true;
// var savingAmount = 4000;
// if(jobPaiso=true || savingAmount > 30000){
//     console.log("cholo patri khuji");
// }
// else{
//     console.log("tor kopale biya naye");
// }


// var jobPaiso = true;
// var savingAmount = 4000;
// if(jobPaiso=true && savingAmount > 30000){
//     console.log("cholo patri khuji");
// }
// else if(jobPaiso=true){
//     console.log("wait for some time");
// }
// else{
//     console.log("tor kopale biya naye");
// }



// ..............summery...................

// var date = new Date;
// console.log(date);


// *****************************************************13**********************************************

// arry



// var friendsAge = [10,15,20,29];
// friendsAge[1] = 12;
// console.log(friendsAge[1]) 

// var friendsAge = [10,15,20,29];
// friendsAge[1] = 12;
// var position = friendsAge.indexOf(29);
// friendsAge.push(22);
// console.log(friendsAge.length) ;
// // friendsAge.pop();
// friendsAge.push(22);
// friendsAge.pop();
// friendsAge.unshift();
// console.log(friendsAge);

// ........................ Array advanced, push(remove from last), pop(add from last), array length(total number of arry).toFixed(set number of digit after comma)...............

// var number = [10,20,30,50];
// number.push(15);
// number.pop();
// number.unshift(22);
// console.log(number)


// .......................13-4 array add(.shift) and remove(unshift) element from the beginning and slice(slice kore kico dekhano) and splice( arry ke change kore kico dekhano).................

// var number = [1, 20, 40, 55,39];
// number.unshift(20);
// var part = number.slice(1,3);
// console.log(part);
// console.log(number);



// ............................13-5 While loop{for,while}(for repeat action), debug JavaScript(place red button first ) code,...............


// var num = 0;
// while(num < 15){
//   console.log(num);
//   num++;
// }

// .................................v=13-6 For loop, run a loop for each element of an array.............................


// var nums = [20,30,55,86,89,90];
// for(var i = 0; i < nums.length; i++ ){
//   var elemet = nums[i];
//   console.log(elemet);
// }



// ..........................13-7 Javascript switch(besi condition ar khetre else if effieient na  which is better ,brack is importent) case break and default.......................

// var num = 1000;
// switch(num){
// case 100:
//   console.log("I am 100 number");
//   brack;
//   case 500:
//     console.log("i am 500 number");
//     brack;
//     case 1000:
//       console.log("I am 1000 number");
//       default:
//         console.log("no match");
// }




// ...............................13-8 Function(ak kothay onek kaz,tooth brash), call function....................

// loop ak bare kaz Key 
// function ke koekbar kaz korano jay

// function sayLoveAllah(){
//   console.log("I love Allah");
//   console.log("I love mohammod sm");
// }
// sayLoveAllah();
// var date =14;
// var place = "resturent";
// sayLoveAllah();
// var hangOut = "TSC";

// .........................13-9 Function parameter, multiple parameter, function return......,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


// function doubleIT (num){
//   var result = num*2;
//   console.log(result);
// }

// doubleIT(50);
// doubleIT(30);


// function doubleIT (num){
//   var result = num*2;
//   return result;
// }

// var first =doubleIT(5);
// var second = doubleIT(90);
// var total =first + second;
// console.log(total);


// function add( num1, num2){
//   var result = num1+num2;
//   return result;
// }
// var sum = add(10, 16);
// console.log(sum);

// single line Comment and multiline commetn/*

// ...............................13-10 Comment, multiple lines comment.................


// ...............................13-11 Object(proparty+value), key value pair, get object property(3  ways), set value/change value(object.proparty = changed number;).................

// var student = {id:121 , phone:158, name:"Abir"};
// var student2 = {id:121, phone:150, name:"Mahi"};
// // fb te am i object (amar id ase name ase etc)

// // console.log(student); // to see object

// // to see single propary value of object;  3wayes
// var studentNumber1 = student.phone;
// var studentNum2= student["phone"];
// var phonePopeNumber = "phone";
// var studentNum3 = student[phonePopeNumber];
// student2.phone = 250; //to change valure of proparty of object

// console.log(student2);




// .........................................13_5-1 What is javascript, key features of javascript...,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


// Interpretation (tormoz, sathe sathe khawa jay),javasecript ,cline sited,front but backend be useable
// node hocce javasecript runtime environment(for backend of js),single treated(server)
// conpailer (law ,sathe sathe useable hoy na)


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,13_5-2 How javascript code executes,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


// js ke run korar jonno akta engeen ace V8 jeta chorom brouser ar use kora hoy
// V8 ar kaz holo kono code dile se seta pore and JIT compile code output dia deye



// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,13_5-3 Revisit string, array, loop,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// kono kaz imnediately var var korte chile loop use kora hoy

// var marks =[89,87,89,52,63,85];
// for (i = 0; i <marks.length; i++){
//     var result =marks[i];
//     console.log(result);
// }





// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,13_5-4 Remove confusion with function and function vs loop,,,,,,,,,,,,,,,,,,,,,,,,,,

// function ke bar bar call kora jay, loop akbare for for kore cholte thake.

// function add(number1, number2){
//     var total= number1 + number2;
//     return total;
// }


//  console.log(total);
// var result =add(500,80);
// console.log(result);



// function largerNumber(numbers){
//     var larger = numbers[0];
//     for (var i =0; i < numbers.larger; i++){
//         var element = numbers[i];
//         if(element >larger){
//             larger = element;
//         }
//     }
//     return larger;
// }
// var numbers = [50,55,60,78,636]
// var output = largerNumber(numbers);
// console.log(output)




// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,14-2 Unit Convert Inch to Feet use variable and function,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,



// var inch = 156;
// var feet = inch/12;

// console.log(feet);



// function inchToFeet(inch){
//  var feet =inch/12;
//  return feet


// }
// var nanaFeet = inchToFeet(156);
// console.log(nanaFeet);


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,14-3 variable let and const and how to use them,,,,,,,,,,,,,,,,,,,,,,,,,


// variable ar value change kora jaygay

// var nam="babu"
// if(nam.length > 3){
//     nam ="bab"
//     console.log(nam);
//  }

// var age = 55;
// age = 60;

// variabel ar value constent thakle var ar  porobortite const use kora hoy
// varable ar value change kole var ar jaygay let use kora hoy

// constent ar khetre owada change korle problem hoy



// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,14-4 check whether a year is a Leap Year or not,,,,,,,,,,,,,,,,,,

// akta equal sign --set
// 2ta die check

// const year = 5568;
// let reminder = year % 4;
// if(reminder == 0){
//     console.log("this is a leaper year");
// }

//     else{
//         console.log("this is not a leaper");
// }




// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

// function leapYear(year) {

//     const reminder = year % 4;

//     if(reminder == 0){

//         return true;

//     }

//     else{

//         return _____;

//     }

// }


// var outputLeapYear = leapYear(1904);
// console.log(outputLeapYear)



// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,14-5 Calculate Factorial of a number using for loop,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


// initial valu 1 for *
// initial value is 0 for + -



// function factorial (n) {

//     var factorial = 1;
//     for (var i = 1; i <= n; i++) {
//         factorial = factorial * i;

//     }
//     return factorial;
// }

// var result = factorial(0);
// console.log(result);




// ,,,,,,,,,,,,,,,,,,,,,,14-6 Calculate Factorial of a number using a while loop,,,,,,,,,,,,,,,

// loop ar vhitore consoel log hole output bar bar hoy
// loop ar bahire console log korle output ak bar hoy


// var i=1;
// var factorial =1;
// while(i<=10){
//     factorial =factorial*i;

//     i++;
// }
// console.log(i,factorial);


// var i = 1;
// function facrorial(n) {

//     var factorial = 1;
//     while (i <= n) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;


// }

// var result = facrorial(20);

// console.log(result);





// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,14-7 Calculate Factorial in a Recursive(function theke function call) function,,,,,,,,,,,,,,,,,,,,

// 6!=(6-1)!*6;

// function factorial(n){
//     if(n == 0){
//         return 1;
//     }
//     else{
//         return n* factorial(n-1);
//     }
// }

// var result = factorial(10);
// console.log(result);


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,14-8 Create a Fibonacci Series using a for loop,,,,,,,,,,,,,,,,,,,
// some condition for fibo nachhi
// 1,[0,1]
// 2,i=2

// febo[3] = febo[3-1] + febo[3-2];

// var fibo =[0,1];
// for(var i=2; i<10; i++){
//    fibo[i] =  fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);






// function Fibonacci(n) {


//     var fibo = [0, 1];
//     for (var i = 2; i <= n; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// var result = Fibonacci(12);
// console.log(result);





// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,14-9 Fibonacci Element in a Recursive Way,,,,,,,,,,,,,,,,,,,,,,




// function fibonacci(n){
//     if (n == 0) {
//         return  0;
//     }
//     if (n == 1){
//         return 1;
//     }
//     else { 
//         return fibonacci(n-1) +fibonacci(n-2);
//     }
// }

// var result = fibonacci(30);
// console.log(result);


// In recursion, the condition for which the function will stop calling itself is--base case



// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,14-10 Create Fibonacci series in a recursive way,,,,,,,,,,,,,,,,,,,,,,,,


// function fibonacci(n) {
//     if (n == 0) {
//         return [0];
//     }
//     else if (n == 1) {
//         return [0,1];

//     }
//     else{
//         var fibo = fibonacci(n-1);
//         var nextElement = fibo[n-1] + fibo[n-2];
//         fibo.push(nextElement);
//         return fibo;
//     }
// }

// var result = fibonacci(100);
// console.log(result);



// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,14-11 Check whether a number is a Prime Number( tai i=2  and less sign in N) or not,,,,,,,,,,,,,,,,,,,


// var n = 34;

// function isPrime(n) {


//     for (var i = 2; i < n; i++) {
//         if (n % i == 0) {
//             return 'not a prime number';
//         }
//     }
//     return 'Your number is a prime number';
// }


// var result = isPrime(57);
// console.log(result);


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,15-2 Swap variable, swap without temp, destructing,,,,,,,,,,,,,,,,,,,,,,,,

// var a = 4;
// var b = 5;
// console.log("before swap : a =", a,"b = ",b );

// var temp = a;
// a = b;
// b = temp;
// console.log("after swap : a =", a,"b = ",b );


// var x = 5;
// var y = 7;
// x = x+y;
// y = x-y;
// x = x-y;
// console.log("after swap : x =", x,"y = ",y );




// var p = 5;
// var q = 6;
// [p, q ] = [q,  p];
// console.log("after swap : p =", p,"q = ",q );


// ,,,,,,,,,,,,,,,,,,,,,,,,15-3 Random number, random number between 1 to 6,,,,,,,,,,,,,,,,,,,,,,,

// var num = 2.35698
// var result = Math.floor(num);
// var result1 = Math.ceil(num);
// var result3 = Math.round(num);
// console.log(result);
// console.log(result1);
// console.log(result3);


// var randomNum = Math.random() *6;
// var output = Math.round(randomNum);

// console.log(output);

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,15-4 Find max of two values, find max of three values,,,,,,,,,,,,,,,,,,,,,,,


// var minister = 1589;
// var sochib = 586;
// var business = 889;
// var max = Math.max(minister, sochib, business);
// console.log(max);

// var business = 889;
// var minister = 1589;
// var sochib = 586;

// if (business > minister) {
//     if (business > sochib) {
//         console.log("Business is bigger");

//     }
//     else {
//         console.log("sochib is better");
//     }
// }

//     else {
//         if (minister > sochib) {
//             console.log("Minister is bigger");

//         }
//         else {
//             console.log("sochibe is bigger");
//         }
// }


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,15-5 Find the largest element of an array,,,,,,,,,,,,,,,,,,,,,


// var marks = [54, 58, 54, 56, 59, 65, 63, 9,];
// var max = [0];
// for (var i = 0; i < marks.length; i++) {
//     var element = marks[i];
//     if (element > max) {
//         max = element;
//     }
// }

// console.log(max);


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,15-6 Sum of all numbers in an array,,,,,,,,,,,,,,,,,,,,,,,,,,

// var num = [54,57,54,98,66,78,3,265];
// var add = 0;
// for (var i =0; i<num.length; i++){
//     var element = num[i];
//     add = add + element;

// }

// console.log(add);

// function addArray(num) {
//     var add = 0;

//     for (var i = 0; i < num.length; i++) {
//         var element = num[i];
//         add = add + element;
//     }
//     return add;
// }

// var num = [56, 656, 56, 526, 596, 562, 56, 36];

// var result = addArray(num);
// console.log(result);



// ,,,,,,,,,,,,,,,,,,,,,15-7 Remove duplicate item from an array,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,




// var num = [2, 5, 548, 8, 2, 5, 85, 94, 85, 63, 6];
// var uniqueName = [];
// for (var i = 0; i < num.length; i++) {
//     var element = num[i];
//     var index = uniqueName.indexOf(element);
//     if (index == -1) {
//         uniqueName.push(element);
//     }
// }

// console.log(uniqueName);


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,15-8 Count the number of words in a string,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// var spech = "I am hardworking. I am serious. I am sure I will do it";

// var count = 0; 
// for (var i = 0; i< spech.length; i++){
//     var char = spech[i];
//     if (char == " " && spech[i-1] !=" "){
//         count++;
//     }
// }
// count++;

// console.log(count);

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,15-9 Reverse a string,,,,,,,,,,,,,,,,,,,,,,,,,,,

// function reverseString(str){
//     var reverse = "";
//     for (var i = 0;  i< str.length; i++){
//         var char = str[i];
//         reverse = char + reverse;
//     }
//     return reverse
// }

// var statement = "Hello alian vai brother.";
// var forAlien = reverseString(statement);
// console.log(forAlien);


console.log(5);



