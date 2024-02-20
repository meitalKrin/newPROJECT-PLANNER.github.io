const listfinished = document.getElementById("finished2");
const nopro = document.getElementById("nopro1");

if (listfinished == null) {
  console.log("null");
  nopro.style.display = "none";
} else {
  console.log("not null");
  nopro.style.display = "block";
}
