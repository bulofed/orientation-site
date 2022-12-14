document.getElementById("icon-mode2").addEventListener("click", modeChange);

function modeChange() {
    let doc = document.getElementById("mode");
    let icon1 = document.getElementById("icon-mode1");
    let icon2 = document.getElementById("icon-mode2");
    if (doc.className === "light") {
        doc.classList.replace("light", "dark");
        icon2.classList.replace("lune", "soleil");
        icon1.classList.replace("lang-light", "lang-dark");
    } else {
        doc.classList.replace("dark", "light");
        icon2.classList.replace("soleil", "lune");
        icon1.classList.replace("lang-dark", "lang-light");
    }
}

function toggle_text_1() {
    var div = document.getElementById("texte_1");
    let toHide = document.getElementById("to_hide_1");
    let toShow = document.getElementById("to_show_1");
    if(div.style.display == "none") {
      div.style.display = "inline";
      toHide.classList.replace("show_1", "hide_1");
      toShow.classList.replace("hide_1", "show_1");
    } else {
      div.style.display = "none";
      toHide.classList.replace("hide_1", "show_1");
      toShow.classList.replace("show_1", "hide_1");} }


function toggle_text_2() {
    var div = document.getElementById("texte_2");
    let toHide = document.getElementById("to_hide_2");
    let toShow = document.getElementById("to_show_2");
    if(div.style.display == "none") {
      div.style.display = "inline";
      toHide.classList.replace("show_2", "hide_2");
      toShow.classList.replace("hide_2", "show_2");
    } else {
      div.style.display = "none";
      toHide.classList.replace("hide_2", "show_2");
      toShow.classList.replace("show_2", "hide_2");} }

function toggle_text_3() {
  var div = document.getElementById("texte_3");
  let toHide = document.getElementById("to_hide_3");
  let toShow = document.getElementById("to_show_3");
  if(div.style.display == "none") {
    div.style.display = "inline";
    toHide.classList.replace("show_3", "hide_3");
    toShow.classList.replace("hide_3", "show_3");
  } else {
    div.style.display = "none";
    toHide.classList.replace("hide_3", "show_3");
    toShow.classList.replace("show_3", "hide_3");} }


