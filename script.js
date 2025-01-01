//your JS code here. If required.
  const codes = document.querySelectorAll('.code');

    codes.forEach((code, index) => {
      code.addEventListener('input', () => {
        if (code.value.length > 0 && index < codes.length - 1) {
          codes[index + 1].focus();
        }
      });

      code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (code.value.length === 0 && index > 0) {
            codes[index - 1].focus();
          }
        }
      });
    });

    // Autofocus the first input field
    codes[0].focus();
	
	
}