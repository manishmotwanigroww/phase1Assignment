function resetForm() {
  document.getElementById("myForm").reset();
}

function whiteSpaces(value) {
  return value.indexOf(" ") >= 0;
}

function checkTerms() {
  let termsCheck = document.getElementById("termsConditions").checked;
  if (termsCheck == false) {
    alert("Please Accept The Terms and Conditions");
    return false;
  }
  return true;
}

function onSubmit(e) {
  e.preventDefault();

  let inputs = document.getElementById("myForm").getElementsByTagName("input");

  var checks = true;
  for (let i = 0; i < inputs.length; i++) {
    if (
      (inputs[i].id == "firstName" && inputs[i].value != "") ||
      (inputs[i].id == "lastName" && inputs[i].value != "") ||
      (inputs[i].id == "spouseName" && inputs[i].value != "")
    ) {
      if (whiteSpaces(inputs[i].value)) {
        alert(inputs[i].id + " can't contain any white spaces");
        checks = false;
        break;
      }
    } else if (inputs[i].id == "spouseName" && inputs[i].disabled == true) {
      continue;
    } else if (inputs[i].value == "") {
      alert(inputs[i].id + " can't be empty");
      checks = false;
      break;
    }
  }

  if (checks == true && checkTerms()) {
    alert("Thanks For The Response");
    window.location.reload();
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
