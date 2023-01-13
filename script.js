gsap.from(".header", { duration: 1.8, x: "100%" });
gsap.from(".cover", {
  duration: 1.8,
  ease: "power1.out",
  x: "200%",
});
gsap.from(".desc", { duration: 2.5, x: "100%" });
gsap.from(".story", { duration: 2.7, x: "100%" });

var timing;

function loadAnimation() {
  timing = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

let menuDiv = document.getElementById("menu-div");

document.getElementById("menu_button").addEventListener("click", showMenu);
document.getElementById("menu-div").addEventListener("click", exitMenu);

function showMenu() {
  menuDiv.classList.add("show_my_menu");
}

function exitMenu() {
  menuDiv.classList.remove("show_my_menu");
}
