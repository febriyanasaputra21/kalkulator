function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}
function remove_all() {
  document.form.textview.value = "";
}
function delet() {
  var z = document.form.textview.value;
  document.form.textview.value = z.substring(0, z.length - 1);
}
function equal() {
  var y = document.form.textview.value;
  if (y == "") {
    alert("masukan angka terlebih dahulu.");
  }
  if (y) {
    document.form.textview.value = eval(y);
  }
}
