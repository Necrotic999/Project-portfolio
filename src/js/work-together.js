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
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.work-together-form');
const email = form.elements.email;
const comment = form.elements.userComment;
const modalContainer = document.querySelector('.modal-container');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

form.addEventListener('submit', formSubmitHandler);
email.addEventListener('input', onEmailInput);
comment.addEventListener('input', onCommentInput);
window.addEventListener('keydown', onCloseKeydown);

async function formSubmitHandler(e) {
  e.preventDefault();
  if (!email.value.trim() || !comment.value.trim()) {
    return showError('Some fields empty...');
  }
  if (comment.value.trim().length < 3)
    return showError('fill out the form correctly');
  const data = {
    email: email.value.trim(),
    comment: comment.value.trim(),
  };
  try {
    const res = await postData(data);
    clearApprovedState();
    form.reset();
    const markup = modalTemplate(res);
    modalContainer.innerHTML = markup;
    closeModalByClickBackdrop();
  } catch (error) {
    showError('ooops... something went wrong');
  }
}

function showError(messageErr) {
  return iziToast.error({
    title: '',
    backgroundColor: '#c55f5f',
    message: messageErr,
    color: '#fff',
    position: 'topRight',
    progressBarColor: '#B51B1B',
  });
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

function closeModalByClickBackdrop() {
  const modalOverlay = document.querySelector('.modal-overlay');
  modalOverlay.addEventListener('click', onCloseClickBackdrop);
  const modalCloseBtn = document.querySelector('.close');
  modalCloseBtn.addEventListener('click', onCloseBtnCLick);
  return;
}

function modalTemplate(obj) {
  return `
    <div class="modal-overlay">
      <div class="modal-content">
        <span class="close-btn">
          <svg class="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <h2 class="modal-title">${obj.data.title}</h2>
        <p class="modal-message">
         ${obj.data.message}
        </p>
      </div>
    </div>
  `;
}
function onCloseKeydown(e) {
  if (e.key === 'Escape') {
    modalContainer.innerHTML = '';
  }
}
function onCloseClickBackdrop(e) {
  if (e.currentTarget !== e.target) return;
  modalContainer.innerHTML = '';
}

function onCloseBtnCLick(e) {
  if (e.currentTarget !== e.target) return;
  modalContainer.innerHTML = '';
}
