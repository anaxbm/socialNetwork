import { onNavigate } from '../main.js';

export const register = () => {
  const imgBackground = document.createElement('img');
  imgBackground.setAttribute('src', './images/inicio_de_sesión.png');
  imgBackground.setAttribute('class', 'register-background');
  const section = document.createElement('section');
  section.setAttribute('class', 'register');
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

  section.append(title, inputEmail, emailOne, confirmEmail, emailTwo, inputPass, passOne, confirmPass, passTwo, registerButton, googleButton);

  return section;
};
