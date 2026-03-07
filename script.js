function toggleDarkMode() {
document.body.classList.toggle("dark");
}

/* SEARCH FUNCTION */

const search = document.getElementById("search");

if (search) {
search.addEventListener("keyup", function () {

let filter = search.value.toLowerCase();
let items = document.querySelectorAll(".sidebar ul li");

items.forEach(function (item) {

let text = item.innerText.toLowerCase();

if (text.includes(filter)) {
item.style.display = "block";
} else {
item.style.display = "none";
}

});

});
}

/* MENU TOGGLE */

function toggleMenu(menuId){

let menu = document.getElementById(menuId);

if(menu.style.display === "block"){
menu.style.display = "none";
}else{
menu.style.display = "block";
}

}
