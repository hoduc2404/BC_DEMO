document.getElementById("open").addEventListener("click", function () {
  document.getElementById("open").classList.add("d-none");
  document.getElementById("close").classList.remove("d-none");
  document.getElementById("close").classList.add("d-block");
});
document.getElementById("close").addEventListener("click", function () {
  document.getElementById("open").classList.remove("d-none");
  document.getElementById("close").classList.remove("d-block");
  document.getElementById("close").classList.add("d-none");
});
