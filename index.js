function resetForm() {
  document.getElementById("myForm").reset();
}

function whiteSpaces(value) {
  return value.indexOf(" ") >= 0;
}

function checkTerms() {
  let termsCheck = document.getElementById("termsConditions").checked;
  if (termsCheck == false) {
    error.textContent = "Please Accept The Terms and Conditions";
    error.style.color = "red";
    error.style.backgroundColor = "#ff9194";

    return false;
  }
  return true;
}

function onSubmit(e) {
  e.preventDefault();

  let inputs = document.getElementById("myForm").getElementsByTagName("input");

  var error = document.getElementById("error");

  var checks = true;
  for (let i = 0; i < inputs.length; i++) {
    if (
      (inputs[i].id == "firstName" && inputs[i].value != "") ||
      (inputs[i].id == "lastName" && inputs[i].value != "") ||
      (inputs[i].id == "spouseName" && inputs[i].value != "")
    ) {
      if (whiteSpaces(inputs[i].value)) {
        error.textContent = inputs[i].id + " can't contain any white spaces";
        error.style.color = "red";
        error.style.backgroundColor = "#ff9194";

        checks = false;
        break;
      }
    } else if (inputs[i].id == "spouseName" && inputs[i].disabled == true) {
      continue;
    } else if (inputs[i].value == "") {
      error.textContent = inputs[i].id + " can't be empty";
      error.style.color = "white";
      error.style.backgroundColor = "#ff9194";
      checks = false;
      break;
    }
  }

  if (checks == true && checkTerms()) {
    error.textContent = "Form Submitted Successfully!!";
    error.style.color = "white";
    error.style.backgroundColor = "#83f28f";
  }
}

function handleMaritalStatus() {
  const maritalStatusButtons = document
    .getElementById("maritalStatus")
    .getElementsByTagName("input");

  for (let i = 0; i < maritalStatusButtons.length; i++) {
    const getSpouseNameElement = document.getElementById("spouseName");

    if (
      maritalStatusButtons[i].value === "married" &&
      maritalStatusButtons[i].checked
    ) {
      getSpouseNameElement.removeAttribute("disabled");
    } else if (maritalStatusButtons[i].checked) {
      getSpouseNameElement.disabled = true;
    }
  }
}
