function toggleDarkMode() {
document.body.classList.toggle("dark");
}

const search = document.getElementById("search");

if(search){
search.addEventListener("keyup", function() {

let filter = search.value.toLowerCase();
let links = document.querySelectorAll(".sidebar ul li");

links.forEach(function(item){

let text = item.innerText.toLowerCase();

if(text.includes(filter)){
item.style.display="";
}
else{
item.style.display="none";
}

});

});
}
