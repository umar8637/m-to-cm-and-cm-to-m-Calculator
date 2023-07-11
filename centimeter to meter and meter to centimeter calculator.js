let minput = document.getElementById("minput");
let cminput = document.getElementById("cminput");

minput.addEventListener("input", function () {
  let cm = this.value * 100;

  let CM = (document.getElementById("cminput").value = cm);

  console.log(CM);
});

cminput.addEventListener("input", function () {
  let m = this.value / 100;

  let M = (document.getElementById("minput").value = m);

  console.log(M);
});
