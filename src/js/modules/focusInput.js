const inputs = document.querySelectorAll('input');
inputs?.forEach((input) => {
  input.addEventListener('focus', (e) => {
    const inputFocus = e.currentTarget;
    const label = inputFocus.nextElementSibling;
    if (inputFocus) {
      label.style.cssText = `top: 0; font-size: 10px;`;
    }
  })

  input.addEventListener('focusout', (e) => {
    const inputFocus = e.currentTarget;
    const label = inputFocus.nextElementSibling;
    if (inputFocus && inputFocus.value.trim() === "") {
      label.style.cssText = `top: 50%; font-size: 16px;`;
    }
  })
})

