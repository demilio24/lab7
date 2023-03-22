function init() {
  const alertDiv = document.getElementById('entrybutton');
  const inputField = document.getElementById('entryinput');
  const submitButton = document.getElementById('submit-btn');
  const h2 = document.getElementById('textoutput');

  alertDiv.addEventListener('click', function() {
    const text = inputField.value;
    const message = `Emilio Arias: ${text}`;
    alert(message);
  });

  submitButton.addEventListener('click', function() {
    // Show an Alert box with the contents of the text field in the Alert box
    const text = inputField.value;
    const message = `Emilio Arias: ${text}`;
    alert(message);

    h2.textContent = text;
  });
}

window.addEventListener('load', init);
