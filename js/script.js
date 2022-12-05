'use strict';

const email = document.querySelector('#email');
const btn = document.querySelector('#btn');

// Validate email
// https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const isEmailValid = input => {
  const email = String(input.value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (email !== null) {
    displaySuccess(input);
  } else if (input.value === '') {
    displayError(input, 'Whoops! It looks like you forgot to add your email');
  } else {
    displayError(input, 'Please provide a valid email address');
  }
};

// Display error
const displayError = (input, err) => {
  const inputParent = input.parentElement;
  inputParent.className = 'main__input error';
  const errMessage = document.querySelector('#required-email');
  errMessage.textContent = err;
};

// Display success
const displaySuccess = input => {
  const inputParent = input.parentElement;
  inputParent.className = 'main__input success';
  input.value = '';
};

btn.addEventListener('click', e => {
  e.preventDefault();
  isEmailValid(email);
});
