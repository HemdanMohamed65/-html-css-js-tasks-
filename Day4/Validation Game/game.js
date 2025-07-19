function validateForm() {
  var valid = true;

  var name = document.getElementById("name").value.trim();
  var pass = document.getElementById("pass").value.trim();
  var email = document.getElementById("email").value.trim();
  var gender = document.querySelector('input[name="gender"]:checked');
  var sports = document.querySelectorAll('input[name="sport"]:checked');
  var country = document.getElementById("country").value;

  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  var namePattern = /^[A-Za-z\s]{5,}$/;               
  var passPattern = /^.{9,}$/;                       
  var emailPattern = /^[\w.-]+@[\w.-]+\.\w{2,}$/;      
  if (!namePattern.test(name)) {
    document.getElementById("nameError").textContent = "Name must be at least 5 letters";
    valid = false;
  }
  if (!passPattern.test(pass)) {
    document.getElementById("passError").textContent = "Password must be at least 9 characters";
    valid = false;
  }
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Email is not valid";
    valid = false;
  }
  if (!gender) {
    document.getElementById("genderError").textContent = "Choose your gender";
    valid = false;
  }
  if (sports.length === 0) {
    document.getElementById("sportError").textContent = "Choose at least one sport";
    valid = false;
  }
  if (valid) {
    var selectedSports = Array.from(sports).map(s => s.value);
    console.log("Hemdan's name :", name);
    console.log("Hemdan's Password :", pass);
    console.log("Hemdan's Email :", email);
    console.log("Hemdan's Gender :", gender.value);
    console.log("Hemdan's Sports :", selectedSports.join(", "));
    console.log("Hemdan's Country :", country);
  }

  return false;
}
