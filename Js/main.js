var modal = document.getElementById('modal-pozadina');
var span = document.getElementById("close");

document.getElementById("dugme").onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}