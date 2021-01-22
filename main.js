///////////////// *** JS Workshop - 1 *** ////////////////
////////////////////*** TO DO LIST ***////////////////////

/*
Hey I started to code in JS 🙂
This is pretty cool!

JS has 2 types of comments:
    1. Block
    2. Line
*/

// We can use Emojis directly with JS.
//alert('Hey! Welcome on my app 🙂');

//////////////////// ***  Data types  *** ////////////////////
/*
Number   /// 5
String   /// 'abc'
Boolean  /// true
Null     /// null
Undefined/// undefined
*/
/*
//////////////Codes:

//If there's no quotes around the number data type is number
//1+2 = 3
alert(1+2);

//If there're  quotes around the numbers, data type is not number
//data type is string
//'1'+'2' = '12'
alert('1'+'2');
*/

//////////////////// ***  Variables  *** ////////////////////

/*
Variables are specific storages in JS. We can store any kind of data
over there and use again and again!
*/
/* 
var myFirstVar = 'This is my initial data';
var mySecVar;
mySecVar = 'My additional data';

var userName = prompt('Please let me know your name');

alert('Hello ' + userName + ', welcome on my Web App 🙂');

alert('Btw. ' + userName + ', nice to meet you');
 */
//////////////////// ***  Loops  *** ////////////////////

/*
Loops are repeating the same code block gain and again while
    the criteria is valid.

"for" is one of the most famous loop in JS.

Syntax of for:
for(initial value; criteria; calculation for the counter value)

//Short-hand: variable = variable + 1 
( counter++ // counter = counter + 1 )
*/

/* 
for (var counter = 1; counter <= 5; counter++) {
    alert(counter);
} 
*/
/* 
let itemCount = prompt("How many items you'd have?");
let items = '';
//let items // undefined
//let items = '' // empty string

for(var counter = 1; counter <= itemCount; counter++) {
    items = items + prompt('Please give me the ' + counter + '. item:') + '\n';
}

alert('Hey I note down your list.\n' + items);
 */
///////////////// ***  Functions and Conditions *** /////////////////

/*
    Functions: reusable co-blocks. Could be built-in like alert, prompt
    or we can create our own function like below.

    Conditions: built-in function which compares conditions
    and does something or anything or something else.
*/
/* 
function enterItems() {
    let itemCount = prompt("How many items you'd have?");
    let items = '';
    for(var counter = 1; counter <= itemCount; counter++) {
        items = items + prompt('Please give me the ' + counter + '. item:') + '\n';
    }
    alert('Hey I note down your list.\n' + items);
}

let goToDo = prompt('Do you mind enter some to-do?', 'yes');

if (goToDo == 'yes') {
    enterItems();
} else {
    alert('I see!');
}

 */

///////////////// ***  DOM Manipulation *** /////////////////

function clickHandler() {
    let item = document.getElementById('item').value;
    //alert(item);

    //variable += value =====>>>>> variable = variable + value
    document.getElementById('list').innerHTML+= 
    '<li> <button onclick="deleteItem(this)">🗑️</button>'+ item + '</li>';
    localStorage.setItem('items', document.getElementById('list').innerHTML);
}

document.getElementById('list').innerHTML = localStorage.getItem('items');

function deleteItem (event) {
    event.parentNode.remove();
    localStorage.setItem('items', document.getElementById('list').innerHTML);
}

