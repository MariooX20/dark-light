var dpage = document.getElementById("page");

var dbtn = document.getElementById("btn");

function DarkMode() {
  if (dpage.style.backgroundColor == "white") {
    dpage.style.backgroundColor = "black";
    dbtn.innerHTML = "Light";
  } else {
    dpage.style.backgroundColor = "white";
    dbtn.innerHTML = "Dark";
  }
}
