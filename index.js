// JavaScript code to handle the onclick functionality
document
  .getElementById("categories_drop")
  .addEventListener("click", function (event) {
    var dropdown = document.getElementById("categories_content");

    // Toggle the display style between "none" and "block"
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
      dropdown.style.position = "absolute";
    } else {
      dropdown.style.display = "none";
    }

    event.stopPropagation();
  });

document.addEventListener("click", function () {
  var dropdown = document.getElementById("categories_content");

  // Hide the dropdown if it's currently visible
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  }
});





window.onscroll = function() {
  stickyHeader();
};

const header = document.querySelector('header.banner');
const nav = document.querySelector("nav.nav-bar")
const menuItems = document.querySelectorAll(".nav-left a, .drop-btn");

function stickyHeader() {
  if (window.scrollY > 0) {
    header.classList.add('sticky');
    nav.style.backgroundColor = "white";
    nav.style.boxShadow = "0px 4px 6px rgb(245, 245, 245, 0.6)";
    nav.style.transition = "all .3s ease-in-out";

    // Iterate through each menu item and set the color
    menuItems.forEach(item => {
      item.style.color = "black";
      item.style.transition = "all .3s ease-in";
    });
  } else {
    header.classList.remove('sticky');
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";

    // Iterate through each menu item and reset the color
    menuItems.forEach(item => {
      item.style.color = ""; // Reset to the default color or remove this line if not needed
    });
  }
}

