import { onNavigate } from '../main.js';

export const register = () => {
  const sectionEmail = document.createElement('section');
  sectionEmail.setAttribute('class', 'registerEmail');
  const sectionPass = document.createElement('sectionPass');
  sectionPass.setAttribute('class', 'register');
  const sectionButton = document.createElement('section');
  sectionButton.setAttribute('class', 'registerButton');
  const sectionAll = document.createElement('section');
  sectionAll.setAttribute('class', 'register');

  const title = document.createElement('h2');
  title.setAttribute('class', 'title');
  const registerButton = document.createElement('button');
  const googleButton = document.createElement('button');
  const inputEmail = document.createElement('input');
  const emailOne = document.createElement('p');
  const confirmEmail = document.createElement('input');
  const emailTwo = document.createElement('p');
  const inputPass = document.createElement('input');
  const passOne = document.createElement('p');
  const confirmPass = document.createElement('input');
  const passTwo = document.createElement('p');

  registerButton.textContent = 'Registrarse';
  googleButton.textContent = 'continuar con Google';
  title.textContent = 'Animal Pawnet';
  emailOne.textContent = 'Correo electrónico';
  emailTwo.textContent = 'Confirmar correo electrónico';
  passOne.textContent = 'Contraseña';
  passTwo.textContent = 'Confirmar contraseña';

  registerButton.addEventListener('click', () => {
    onNavigate('/');
  });
  googleButton.addEventListener('click', () => {
  });

  sectionEmail.append(title, inputEmail, emailOne, confirmEmail, emailTwo);
  sectionPass.append(inputPass, passOne, confirmPass, passTwo);
  sectionButton.append(registerButton, googleButton);
  sectionAll.append(sectionEmail, sectionPass, sectionButton);

  return sectionAll;
};
