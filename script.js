window.addEventListener("load", () => {
  const button = document.querySelector("#clear");
  button.addEventListener("click", () => {
    document.querySelector("#display").value = "";
  });
});
function del() {
  let out = document.getElementById("display").value;
  document.getElementById("display").value = out.substring(0, out.length - 1);
}
function equal() {
  let out = document.getElementById("display").value;
  if (out) {
    document.getElementById("display").value = eval(out).toFixed(2);
  }
}
function operator(value) {
  let op = (document.getElementById("display").value += value);
  return op;
}

function keys(value) {
  let currentval = (document.getElementById("display").value += value);
  return currentval;
}
function dot(value) {
  document.getElementById("display").value += ".";
}
