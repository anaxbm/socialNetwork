import { timeLine } from './routes/timeLine.js'; //devuelven un componente
import { login } from './routes/login.js';
import { register } from './routes/register.js';

import { auth } from './lib/auth.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
// Connect with html
export const root = document.getElementById('root'); // In this node is where everything is render

const routes = {
  //key  value
  '/': login,
  '/login': login,
  '/timeline': timeLine,
  '/register': register,
};

onAuthStateChanged(auth, (user) => {
  /* auth es un objeto que devuelve servicio que permite manejar las cuentas, usuarios, etc */
  if (user) {
    console.log('estas logueado');
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    onNavigate('/timeline');
    //console.log(uid);
  } else {
    console.log('no estas logueado');
    onNavigate('/login');
    // User is signed out
    // ...
  }
});
/*console.log(window);*/

export const onNavigate = (pathname) => {
  //console.log('OnNavigate');

  window.history.pushState(
    // history del navegador tiene la propiedad push que empuja una nueva entrada
    {}, // State
    pathname, // title
    window.location.origin + pathname // pidiendo que concatene el pathname
  );

  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]()); //pathname es / y se ejecuta, el value,una funcion que regresa un componente
  /*console.log(routes[pathname]());*/
};

const pages = routes[window.location.pathname]; // Render to
//accediendo a la propiedad window y a su propiedad location y el pathname que corresponde al /url

/* funciona con las flechas*/
window.onpopstate = () => {
  //console.log('running');
  root.removeChild(root.firstChild); //resetea root
  //console.log(routes);
  root.appendChild(routes[window.location.pathname]()); // se ejectuta la funcion que es el value del key y renderiza nuevo componente
};
console.log(pages);
root.appendChild(pages());
