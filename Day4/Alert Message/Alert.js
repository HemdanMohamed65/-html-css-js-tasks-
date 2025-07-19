document.addEventListener("DOMContentLoaded", function () {
  var successBtn = document.querySelector(".success-btn");
  var errorBtn = document.querySelector(".error-btn");
  successBtn.addEventListener("click", function () {
    showAlert("success");
  });
  errorBtn.addEventListener("click", function () {
    showAlert("error");
  });
});
function showAlert(type) {
  var alertBox = document.getElementById("alertBox");
  var alertTitle = document.getElementById("alertTitle");
  var alertMessage = document.getElementById("alertMessage");
  var alertIcon = document.getElementById("alertphoto");

  if (type === 'success') {
    alertBox.classList.remove("error");
    alertTitle.textContent = "Success";
    alertMessage.textContent = "This is a Success Message";
    alertMessage.style.color = "green";
    alertIcon.src = "Success Alert.png";
  } else if (type === 'error') {
    alertBox.classList.add("error");
    alertTitle.textContent = "Error";
    alertMessage.textContent = "This is an Error Message";
    alertMessage.style.color = "red";
    alertIcon.src = "Error Alert.jpg";
  }
  alertBox.style.display = "block";
}
