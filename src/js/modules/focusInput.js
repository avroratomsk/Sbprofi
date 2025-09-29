const inputs = document.querySelectorAll('.form input[type="text"], .form input[type="tel"]');

inputs.forEach((input) => {
  const label = input.labels[0];

  input.addEventListener('focus', () => {
    if (label) label.style.cssText = `top: 0; font-size: 10px;`;
  });

  input.addEventListener('blur', () => {
    if (label && input.value.trim() === "") {
      label.style.cssText = `top: 50%; font-size: 16px;`;
    }
  });
});
