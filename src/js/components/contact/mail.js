export const useMail = () => {
  document.getElementById('emailInput').addEventListener('input', function() {
  var email = this.value;
  var errorMessage = '';

  if (!email) {
    errorMessage = 'Email не может быть пустым.';
  } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(email)) {
    errorMessage = 'Email должен содержать символ @ и доменное имя.';
  }

  var errorOutput = document.getElementById('errorOutput');
  if (errorMessage) {
    errorOutput.textContent = errorMessage;
    errorOutput.style.display = 'block';
  } else {
    errorOutput.style.display = 'none';
  }
});
};
