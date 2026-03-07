
// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Collapsible Sidebar Menu
function toggleMenu(menuId) {
  let menu = document.getElementById(menuId);
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Sidebar Search
const search = document.getElementById("search");
if (search) {
  search.addEventListener("keyup", function () {
    let filter = search.value.toLowerCase();
    let items = document.querySelectorAll(".sidebar ul li");
    items.forEach(function (item) {
      let text = item.innerText.toLowerCase();
      item.style.display = text.includes(filter) ? "block" : "none";
    });
  });
}
