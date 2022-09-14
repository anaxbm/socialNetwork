import { onNavigate } from '../main.js';

export const login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');

  // const div = document.createElement('div');

  // section header
  /* const headerLogin = document.createElement('header');
  headerLogin.setAttribute('class', 'login-header');
  const title = document.createElement('h2');
  title.textContent = 'BIENVENIDO A ANIMAL PAWNET';
  appends the header title
  headerLogin.append(title); */

  // section main of login padre
  const mainLogin = document.createElement('main');
  mainLogin.setAttribute('class', 'login-main');

  const sectionLogin = document.createElement('section');
  sectionLogin.setAttribute('class', 'section_login');

  // add the buttons of login or register este lo cambio a mi nodo padre?
  const divloginButtons = document.createElement('div');
  divloginButtons.setAttribute('class', 'register-buttons-div');

  const sectionInputs = document.createElement('section');
  sectionInputs.setAttribute('class', 'section_imputs');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('class', 'email_input');
  const email = document.createElement('p');
  email.textContent = 'Email';
  const inputPassWord = document.createElement('input');
  inputPassWord.setAttribute('class', 'pasword_imput');
  const pasword = document.createElement('p');
  pasword.textContent = 'pasword';

  // appends the inputs to main
  sectionInputs.append(inputEmail, email, inputPassWord, pasword);

  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('id', 'log-in');
  buttonLogin.setAttribute('class', 'login-button');
  buttonLogin.textContent = 'Inicia sesión';

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'registrate';
  buttonRegister.setAttribute('id', 'register');
  buttonRegister.setAttribute('class', 'register-button');

  // appends the buttons to the main tag
  divloginButtons.append(buttonLogin, buttonRegister);

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register'); // falta el archivo de registro
  });

  sectionLogin.append(sectionInputs, divloginButtons);
  mainLogin.append(sectionLogin);

  return mainLogin;

  return div;
};
