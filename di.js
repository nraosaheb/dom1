// document.getElementById('list1').style.color = "red";
// document.getElementsByClassName('list-item').length

// let items = document.getElementsByClassName("list-group-item");
// items[1].style.backgroundColor = "green";
// items[2].style.display = "none"


// let item = document.querySelectorAll(".list-group-item");
// item[1].style.color = "red";


// let odd = document.querySelectorAll("li:nth-child(odd)");

// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = "green";
// }

// TRAVERSING THE DOM //
let item1 = document.getElementById("item1")
let itemList = document.querySelector('#items');
let item0 = document.createTextNode('hello word');
itemList.appendChild(item0);
itemList.insertBefore(item0, item1);

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNode 
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild
// console.log(itemList.firstChild);
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
//console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);
//previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);

//createElement

// //create a div
var newDiv = document.createElement('div');
let newdiv1 = document.createElement('div'); 
//Add  class
newDiv.className = 'hello';
newdiv1.className = 'hello'
//Add id
newDiv.id = 'hello1';


//Add Attr
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivtext = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivtext);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

//console.log(newDiv);
newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);