// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('work-form');
//   //   const input = document.getElementById('formComment');
//   //   const maxLength = 30;
//   form.addEventListener('submit', formSend);

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

//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form);

//     if (error === 0) {
//       formAddApproved(form.querySelector('._req'), 'Success!');

//       // Дія при успішному відправленні форми
//       // approvedLabel.remove();
//     } else {
//       alert('Заполните обязательные поля');
//     }
//   }

//   // ================================================================
//   // Валідація форми
//   // ================================================================

//   function formValidate(form) {
//     let error = 0;
//     let formReq = document.querySelectorAll('._req');

//     for (let index = 0; index < formReq.length; index++) {
//       const input = formReq[index];
//       formRemoveError(input);

//       if (input.classList.contains('_email')) {
//         if (emailTest(input)) {
//           formAddError(input, 'Invalid email, try again');
//           error++;
//         }
//       } else {
//         if (input.value === '') {
//           formAddError(input, 'This field is required');
//           error++;
//         }
//       }
//     }

//     return error;
//   }

//   function formAddError(input, text) {
//     input.parentElement.classList.add('_error');
//     input.classList.add('_error');
//     const errorLabel = document.createElement('label');
//     errorLabel.textContent = text;
//     errorLabel.classList.add('_error');
//     input.parentElement.append(errorLabel);
//   }

//   function formRemoveError(input) {
//     input.parentElement.classList.remove('_error');
//     input.classList.remove('_error');
//     const errorLabel = input.parentElement.querySelector('label._error');
//     if (errorLabel) {
//       errorLabel.remove();
//     }
//   }

//   function emailTest(input) {
//     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//   }

//   function formAddApproved(input, text) {
//     formRemoveApproved(input);
//     input.parentElement.classList.add('_approved');
//     input.classList.add('_approved');
//     const approvedLabel = document.createElement('label');
//     approvedLabel.textContent = text;
//     approvedLabel.classList.add('_approved');
//     input.parentElement.append(approvedLabel);
//   }

//   function formRemoveApproved(input) {
//     input.parentElement.classList.remove('_approved');
//     input.classList.remove('_approved');
//     const approvedLabel = input.parentElement.querySelector('label._approved');
//     if (approvedLabel) {
//       approvedLabel.remove();
//     }
//   }
// });

import axios from 'axios';

const form = document.querySelector('.work-together-form');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

form.addEventListener('submit', formSubmitHandler);

const email = form.elements.email;
const comment = form.elements.userComment;
console.dir(comment);
email.addEventListener('input', onEmailInput);
comment.addEventListener('input', onCommentInput);

async function formSubmitHandler(e) {
  e.preventDefault();
  if (!email.value.trim() || !comment.value.trim()) {
    return alert('Some fields empty...');
  }
  if (comment.value.trim().length < 3)
    return alert('fill out the form correctly');
  const data = {
    email: email.value.trim(),
    comment: comment.value.trim(),
  };
  try {
    const res = await postData(data);
    alert('Send to server');
    console.log(res);
    form.reset();
    clearApprovedState();
  } catch (error) {
    alert('ooops... something went wrong');
    console.log(error.message);
  }
}
function onEmailInput() {
  if (!email.validity.valid) {
    email.classList.add('_error');
    email.classList.remove('_approved');
  } else if (!email.value.trim()) {
    email.classList.remove('_error');
  } else {
    email.classList.remove('_error');
    email.classList.add('_approved');
  }
}

function onCommentInput() {
  if (comment.value.trim().length < 3 && comment.value.trim().length > 0) {
    comment.classList.add('_error');
    comment.classList.remove('_approved');
  } else if (!comment.value.trim()) {
    comment.classList.remove('_error');
  } else {
    comment.classList.remove('_error');
    comment.classList.add('_approved');
  }
}

async function postData(userData) {
  return await axios.post('/requests', userData);
}

function clearApprovedState() {
  comment.classList.remove('_approved');
  email.classList.remove('_approved');
}
