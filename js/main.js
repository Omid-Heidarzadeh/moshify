const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    collapsibles.forEach(elm => { if (elm != this) elm.classList.toggle("collapsible--expanded", false) });
    setTimeout(() => { this.classList.toggle("collapsible--expanded") }, 250);
  })
);