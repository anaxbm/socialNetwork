import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from '../main.js';
import { auth, signInUser, googleProvider } from '../lib/auth.js';

export const login = () => {
  // section main of login padre
  const mainLogin = document.createElement('main');
  mainLogin.setAttribute('class', 'main');
  const sectionLogin = document.createElement('section');
  sectionLogin.setAttribute('class', 'section_login_register');
  // add the buttons of login or register este lo cambio a mi nodo padre?
  const divloginButtons = document.createElement('div');
  divloginButtons.setAttribute('class', 'register-buttons-div');
  const sectionInputs = document.createElement('section');
  sectionInputs.setAttribute('class', 'section_imputs');
  const sectionLinesHr = document.createElement('section');
  sectionLinesHr.setAttribute('class', 'section-lines-hr');

  const animalPawnet = document.createElement('h2');
  animalPawnet.setAttribute('class', 'animal-pawnet');
  animalPawnet.textContent = 'Animal Pawnet';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'inputEmail');
  inputEmail.setAttribute('class', 'inputs');
  const textEmail = document.createElement('p');
  textEmail.textContent = 'Email';
  const inputPassWord = document.createElement('input');
  inputPassWord.setAttribute('class', 'inputs');
  inputPassWord.setAttribute('id', 'inputPassword');
  inputPassWord.setAttribute('type', 'password');
  const textPasword = document.createElement('p');
  textPasword.textContent = 'Contraseña';

  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('id', 'log-in');
  buttonLogin.setAttribute('class', 'login-button');
  buttonLogin.textContent = 'Inicia sesión';

  const hrLeft = document.createElement('hr');
  hrLeft.setAttribute('class', 'hr-sec-log');
  const leterSec = document.createElement('p');
  leterSec.setAttribute('class', '.p');
  leterSec.textContent = 'ó';
  const hrRight = document.createElement('hr');
  hrRight.setAttribute('class', 'hr-sec-log');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.setAttribute('id', 'register');
  buttonRegister.setAttribute('class', 'go-register-button');
  const loginError = document.createElement('p');
  loginError.setAttribute('class', 'error');

  const googleButton = document.createElement('button');
  googleButton.setAttribute('class', 'google-login');

  const textRegister = document.createElement('p');
  textRegister.setAttribute('class', 'text-register');
  textRegister.textContent = '¿No tienes cuenta?';
  sectionInputs.append(
    inputEmail,
    textEmail,
    inputPassWord,
    textPasword,
    loginError,
    buttonLogin
  );
  // appends the section lines
  sectionLinesHr.append(hrLeft, leterSec, hrRight);
  // appends the buttons to the main tag
  divloginButtons.append(googleButton, textRegister, buttonRegister);

  sectionLogin.append(sectionInputs, sectionLinesHr, divloginButtons);

  mainLogin.append(animalPawnet, sectionLogin);

  buttonLogin.addEventListener('click', () => {
    const email = inputEmail.value;
    const userpassword = inputPassword.value;

    signInUser(auth, email, userpassword)
      .then((userCredential) => {
        //console.log(email);
        // console.log(userpassword);
        onNavigate('/timeline');
      })
      .catch((error) => {
        const errorCode = error.code; // auth/invalid-email
        const errorMessage = error.message; // Firebase: Error (auth/invalid-email)
        loginError.innerHTML = 'Email o contraseña no válido';
        // console.log('que esta pasando');
      });
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
    /*console.log('registrandome');*/
  });

  googleButton.addEventListener('click', () => {
    //console.log(auth);
    signInWithPopup(auth, googleProvider)
      .then(() => {
        onNavigate('/timeline');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });

  return mainLogin;
};
