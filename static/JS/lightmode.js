function toggleStylesheet() {
  var style = document.getElementById("pagestyle");

  if (style.getAttribute("href") == "static/css/style.css") {
    style.setAttribute("href", "static/css/light_style.css");
  } else {
    style.setAttribute("href", "static/css/style.css");
  }
}
