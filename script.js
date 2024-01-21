function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./asstes/joji.png");
    img.style.border = "2px solid gray";
    img.style.borderRadius = "50%";
  } else {
    img.setAttribute("src", "./asstes/avatar@2x.png");
    img.style.border = "0";
    img.style.borderRadius = "0";
  }
}
