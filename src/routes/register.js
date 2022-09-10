import { onNavigate } from './main.js';

export const register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassWord = document.createElement('input');
  const buttonRegister = document.createElement('button');

  title.textContent = 'BIENVENIDO A ANIMAL PAWNET';
  buttonRegister.textContent = 'Registrate';

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register'); // falta el archivo de registro
  });
  div.append(title, inputEmail, inputPassWord, buttonLogin, buttonRegister);

  return div;
};
