document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('work-form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error === 0) {
      //   formAddAproved(input, 'Succes!');
      // Дія при успішному відправленні форми
      //   aprovedLabel.remove();
    } else {
      alert('Заполните обязательные поля');
    }
  }

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

  //   function formAddAproved(input, text) {
  //     input.parentElement.classList.add('_aproved');
  //     input.classList.add('_aproved');
  //     const aprovedLabel = document.createElement('label');
  //     aprovedLabel.textContent = text;
  //     aprovedLabel.classList.add('_aproved');
  //     input.parentElement.append(aprovedLabel);
  //   }

  //   function formRemoveAproved(input) {
  //     input.parentElement.classList.remove('_aproved');
  //     input.classList.remove('_aproved');
  //     const aprovedLabel = input.parentElement.querySelector('label._aproved');
  //     if (aprovedLabel) {
  //       aprovedLabel.remove();
  //     }
  //   }
});
