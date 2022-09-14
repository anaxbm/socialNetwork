import { onNavigate } from '../main.js';

export const register = () => {
  const sectionInput = document.createElement('section');
  sectionInput.setAttribute('class', 'sectionInput');
  const sectionLine = document.createElement('section');
  sectionLine.setAttribute('class', 'sectionLine');
  const sectionAll = document.createElement('section');
  sectionAll.setAttribute('class', 'register');

  const registerButton = document.createElement('button');
  registerButton.setAttribute('class', 'registerButton');
  const googleButton = document.createElement('button');
  googleButton.setAttribute('class', 'googleButton');

  const title = document.createElement('h2');
  title.setAttribute('class', 'title');
  const email = document.createElement('input');
  const emailOne = document.createElement('p');
  const confirmEmail = document.createElement('input');
  const emailTwo = document.createElement('p');
  const pass = document.createElement('input');
  const passOne = document.createElement('p');
  const confirmPass = document.createElement('input');
  const passTwo = document.createElement('p');
  const hrone = document.createElement('hr');
  const leter = document.createElement('p');
  const hrtwo = document.createElement('hr');

  title.textContent = 'Animal Pawnet';
  registerButton.textContent = 'Registrarse';
  googleButton.textContent = 'continuar con Google';
  emailOne.textContent = 'Email';
  emailTwo.textContent = 'Confirmar Email';
  passOne.textContent = 'Contraseña';
  passTwo.textContent = 'Confirmar contraseña';
  leter.textContent = 'ó';

  registerButton.addEventListener('click', () => {
    onNavigate('/');
  });
  googleButton.addEventListener('click', () => {});

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
  sectionLine.append(hrone, leter, hrtwo);
  sectionAll.append(
    title,
    sectionInput,
    registerButton,
    sectionLine,
    googleButton
  );

  return sectionAll;
};
