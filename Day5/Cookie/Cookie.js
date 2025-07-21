document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var color = document.getElementById("color").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  document.cookie = "name=" + encodeURIComponent(name) + "; path=/";
  document.cookie = "age=" + encodeURIComponent(age) + "; path=/";
  document.cookie = "color=" + encodeURIComponent(color) + "; path=/";
  document.cookie = "gender=" + encodeURIComponent(gender) + "; path=/";
  window.location.href = "result.html";
});
