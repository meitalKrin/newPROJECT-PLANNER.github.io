function renderProductList(element, index, arr) {
  const projectUL = document.getElementById("projectlist");
  const nopro = document.getElementById("nopro");

  nopro.style.display = "none";
  console.log("hi");
  var li = document.createElement("li");
  li.setAttribute("class", "item");

  projectUL.appendChild(li);

  li.innerHTML = li.innerHTML + element;
}
