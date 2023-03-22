function init() {
  const alertDiv = document.querySelector('#alert-me');
  const inputField = document.querySelector('#input-field');
  const submitButton = document.querySelector('#submit-btn');
  const h2 = document.querySelector('h2');


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
