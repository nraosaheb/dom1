// document.getElementById('list1').style.color = "red";
// document.getElementsByClassName('list-item').length

// let items = document.getElementsByClassName("list-group-item");
// items[1].style.backgroundColor = "green";
// items[2].style.display = "none"


let item = document.querySelectorAll(".list-group-item");
item[1].style.color = "red";


let odd = document.querySelectorAll("li:nth-child(odd)");

for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = "green";
}