document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('work-form');
  //   const input = document.getElementById('formComment');
  //   const maxLength = 30;
  form.addEventListener('submit', formSend);

  //   // ================================================================
  //   // Вміст введеного тексту перевищує розмір поля input
  //   // ================================================================

  //   input.addEventListener('input', function () {
  //     if (input.value.length > maxLength) {
  //       input.value = input.value.substring(0, maxLength); // Обрезаем текст до максимальной длины
  //       input.setAttribute('title', input.value); // Устанавливаем всплывающую подсказку с полным текстом
  //     } else {
  //       input.removeAttribute('title'); // Удаляем всплывающую подсказку, если текст укладывается в пределы максимальной длины
  //     }
  //   });

  // ================================================================
  // Відправка форми
  // ================================================================

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error === 0) {
      formAddApproved(form.querySelector('._req'), 'Success!');

      // Дія при успішному відправленні форми
      // approvedLabel.remove();
    } else {
      alert('Заполните обязательные поля');
    }
  }

  // ================================================================
  // Валідація форми
  // ================================================================

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input, 'Invalid email, try again');
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input, 'This field is required');
          error++;
        }
      }
    }

    return error;
  }

  function formAddError(input, text) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
    const errorLabel = document.createElement('label');
    errorLabel.textContent = text;
    errorLabel.classList.add('_error');
    input.parentElement.append(errorLabel);
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
    const errorLabel = input.parentElement.querySelector('label._error');
    if (errorLabel) {
      errorLabel.remove();
    }
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  function formAddApproved(input, text) {
    formRemoveApproved(input);
    input.parentElement.classList.add('_approved');
    input.classList.add('_approved');
    const approvedLabel = document.createElement('label');
    approvedLabel.textContent = text;
    approvedLabel.classList.add('_approved');
    input.parentElement.append(approvedLabel);
  }

  function formRemoveApproved(input) {
    input.parentElement.classList.remove('_approved');
    input.classList.remove('_approved');
    const approvedLabel = input.parentElement.querySelector('label._approved');
    if (approvedLabel) {
      approvedLabel.remove();
    }
  }
});
