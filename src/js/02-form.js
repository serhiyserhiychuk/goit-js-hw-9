const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

email.value = localStorage.getItem(localStorageKey.email) ?? '';
textarea.value = localStorage.getItem(localStorageKey.message) ?? '';

form.addEventListener('input', inputHandler);

function inputHandler(event) {
  event.preventDefault();
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      email: event.target.value,
      message: event.target.value,
    })
  );
}

form.addEventListener('input', evt => {});

form.addEventListener('submit', submitHandler);

function submitHandler(evt) {
  evt.preventDefault();
  const emailText = evt.target.elements.email.value.trim();
  const messageText = evt.target.elements.message.value.trim();
  if (emailText !== '' && messageText !== '') {
    console.log({
      email: emailText,
      message: messageText,
    });
  } else {
    console.error('All inputs must be filled!');
  }
  localStorage.removeItem(localStorageKey);
  form.reset();
}
