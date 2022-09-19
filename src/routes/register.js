import { onNavigate } from '../main.js';

import { addUser } from '../lib/auth.js';

export const register = () => {
  const mainRegister = document.createElement('main');
  mainRegister.setAttribute('class', 'mainRegister');
  const sectionInput = document.createElement('section');
  sectionInput.setAttribute('class', 'sectionInput');
  const sectionLine = document.createElement('section');
  sectionLine.setAttribute('class', 'sectionLine');
  const sectionAll = document.createElement('section');
  sectionAll.setAttribute('class', 'sectionRegister');

  const registerButton = document.createElement('button');
  registerButton.setAttribute('class', 'registerButton');
  const googleButton = document.createElement('button');
  googleButton.setAttribute('class', 'googleButton');

  const title = document.createElement('h2');
  title.setAttribute('class', 'title');
  const email = document.createElement('input');
  email.setAttribute('class', 'inputRegister');
  const emailOne = document.createElement('p');
  emailOne.setAttribute('class', 'p');
  const confirmEmail = document.createElement('input');
  confirmEmail.setAttribute('class', 'inputRegister');
  const emailTwo = document.createElement('p');
  emailTwo.setAttribute('class', 'p');
  const pass = document.createElement('input');
  pass.setAttribute('class', 'inputRegister');
  const passOne = document.createElement('p');
  passOne.setAttribute('class', 'p');
  const confirmPass = document.createElement('input');
  confirmPass.setAttribute('class', 'inputRegister');
  const passTwo = document.createElement('p');
  passTwo.setAttribute('class', 'p');
  const hrOne = document.createElement('hr');
  hrOne.setAttribute('class', 'hr');
  const leter = document.createElement('p');
  leter.setAttribute('class', 'p');
  const hrTwo = document.createElement('hr');
  hrTwo.setAttribute('class', 'hr');

  title.textContent = 'Animal Pawnet';
  registerButton.textContent = 'Registrarse';
  googleButton.textContent = 'continuar con Google';
  emailOne.textContent = 'Email';
  passOne.textContent = 'Contraseña';
  passTwo.textContent = 'Confirmar contraseña';
  leter.textContent = 'ó';

  registerButton.addEventListener('click', () => {
    let userEmail = confirmEmail.value;
    let userPassword = pass.value;
    addUser(userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        console.log('ya te gristraste');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('no te puedes registrar', errorMessage);
        // ..
      });

    googleButton.addEventListener('click', () => {});
  });

  sectionInput.append(
    email,
    emailOne,
    confirmEmail,
    emailTwo,
    pass,
    passOne,
    confirmPass,
    passTwo
  );
  sectionLine.append(hrOne, leter, hrTwo);
  sectionAll.append(
    title,
    sectionInput,
    registerButton,
    sectionLine,
    googleButton
  );
  mainRegister.appendChild(sectionAll);

  return mainRegister;
};
