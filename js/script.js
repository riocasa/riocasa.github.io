window.onload = function () {
  const today = new Date();

  // Extract day, month, and year
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();

  // Format the date as DD/MM/YYYY
  const formattedDate = `${day}/${month}/${year}`;
  document.getElementById('today').value = formattedDate;
};


var inputs = document.querySelectorAll('input[type=text], input[type=email]');
for (i = 0; i < inputs.length; i++) {
  var inputEl = inputs[i];
  if (inputEl.value.trim() !== '') {
    inputEl.parentNode.classList.add('input--filled');
  }
  inputEl.addEventListener('focus', onFocus);
  inputEl.addEventListener('blur', onBlur);
}

function onFocus(ev) {
  ev.target.parentNode.classList.add('inputs--filled');
}

function onBlur(ev) {
  if (ev.target.value.trim() === '') {
    ev.target.parentNode.classList.remove('inputs--filled');
  } else if (ev.target.checkValidity() == false) {
    ev.target.parentNode.classList.add('inputs--invalid');
    ev.target.addEventListener('input', liveValidation);
  } else if (ev.target.checkValidity() == true) {
    ev.target.parentNode.classList.remove('inputs--invalid');
    ev.target.addEventListener('input', liveValidation);
  }
}

function liveValidation(ev) {
  if (ev.target.checkValidity() == false) {
    ev.target.parentNode.classList.add('inputs--invalid');
  } else {
    ev.target.parentNode.classList.remove('inputs--invalid');
  }
}

var submitBtn = document.querySelector('input[type=submit]');
submitBtn.addEventListener('click', onSubmit);

function onSubmit(ev) {
  var inputsWrappers = ev.target.parentNode.querySelectorAll('span');
  for (i = 0; i < inputsWrappers.length; i++) {
    input = inputsWrappers[i].querySelector('input[type=text], input[type=email]');
    if (input.checkValidity() == false) {
      inputsWrappers[i].classList.add('inputs--invalid');
    } else if (input.checkValidity() == true) {
      inputsWrappers[i].classList.remove('inputs--invalid');
    }
  }
}
function changeHeaderText() {
  var selectElement = document.getElementById("resort");
  var selectedOption = selectElement.options[selectElement.selectedIndex].text;
  var h2Element = document.getElementById("current-resort");
  h2Element.textContent = selectedOption;
}