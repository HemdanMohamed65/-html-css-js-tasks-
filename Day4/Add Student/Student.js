function addStudent() {

  var name = document.getElementById("name").value.trim();
  var id = document.getElementById("id").value.trim();
  var age = document.getElementById("age").value.trim();
  document.getElementById("nameError").textContent = "";
  document.getElementById("idError").textContent = "";
  document.getElementById("ageError").textContent = "";
  var isValid = true;
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  } else if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  }
  if (id === "") {
    document.getElementById("idError").textContent = "ID is required.";
    isValid = false;
  } else if (isNaN(id)) {
    document.getElementById("idError").textContent = "ID must be a number.";
    isValid = false;
  }
  if (age === "") {
    document.getElementById("ageError").textContent = "Age is required.";
    isValid = false;
  } else if (isNaN(age)) {
    document.getElementById("ageError").textContent = "Age must be a number.";
    isValid = false;
  }
  var ids = document.querySelectorAll("#studentTable tbody tr td:first-child");
  for (var cell of ids) {
    if (cell.textContent === id) {
      document.getElementById("idError").textContent = "This ID is already used!";
      isValid = false;
      break;
    }
  }
  if (!isValid) return;
  var tableBody = document.querySelector("#studentTable tbody");
  var tr = document.createElement("tr");
  ["id", "name", "age"].forEach(field => {
    var td = document.createElement("td");
    td.textContent = document.getElementById(field).value.trim();
    tr.appendChild(td);
  });
  var tdAction = document.createElement("td");
  var delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete-btn");
  delBtn.onclick = () => tr.remove();
  tdAction.appendChild(delBtn);
  tr.appendChild(tdAction);
  tableBody.appendChild(tr);
  ["name", "id", "age"].forEach(field => document.getElementById(field).value = "");
}
