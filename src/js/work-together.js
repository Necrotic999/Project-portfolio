import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import closeIcon from '../img/icons/icons.svg'

const form = document.querySelector('.work-together-form');
const email = form.elements.email;
const comment = form.elements.userComment;
const modalContainer = document.querySelector('.modal-container');
const invalidEmailState = document.querySelector('.invalid');
const validEmailState = document.querySelector('.success');
const invalidCommentState = document.querySelector('.invalidComment');
const validCommentState = document.querySelector('.successComment');

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
    clearSuccessState();
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
    validEmailState.style.opacity = 0;
    invalidEmailState.style.opacity = 100;
  } else if (!email.value.trim()) {
    email.classList.remove('_error');
    invalidEmailState.style.opacity = 0;
  } else {
    email.classList.remove('_error');
    email.classList.add('_approved');
    validEmailState.style.opacity = 100;
    invalidEmailState.style.opacity = 0;
  }
}

function onCommentInput() {
  if (comment.value.trim().length < 3 && comment.value.trim().length > 0) {
    comment.classList.add('_error');
    comment.classList.remove('_approved');
    validCommentState.style.opacity = 0;
    invalidCommentState.style.opacity = 100;
  } else if (!comment.value.trim()) {
    comment.classList.remove('_error');
    invalidCommentState.style.opacity = 0;
  } else {
    comment.classList.remove('_error');
    comment.classList.add('_approved');
    validCommentState.style.opacity = 100;
    invalidCommentState.style.opacity = 0;
  }
}

async function postData(userData) {
  return await axios.post('/requests', userData);
}

function clearApprovedState() {
  comment.classList.remove('_approved');
  email.classList.remove('_approved');
}
function clearSuccessState() {
  validEmailState.style.opacity = 0;
  validCommentState.style.opacity = 0;
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
          <svg class="close" width="24" height="24">
            <use href="${closeIcon}#icon-x"></use>
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
