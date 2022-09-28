// import pages
import { timeLine } from './routes/timeLine.js';
import { login } from './routes/login.js';
import { register } from './routes/register.js';
import { auth } from '../lib/auth.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

export const userInfo = onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const userEmail = user.email;
    //console.log(uid, userEmail);
    const userJean = auth.currentUser;
    const jeanEmail = userJean.email;
    console.log(jeanEmail);
    onNavigate('/timeline');
  } else {
    onNavigate('/');
    console.log('No tas conectao');
  }
});

/*export const userEmailInfo = function (email) {
  return userEmail;
};
userEmailInfo(userEmail);
console.log(userEmailInfo);*/
// Connect with html
export const root = document.getElementById('root'); // In this node is where everything is render
const routes = {
  // Object that contains the routes and what to render
  '/': login,
  '/timeline': timeLine,
  '/register': register,
};

export const onNavigate = (pathname) => {
  // Takes pathname and render section according to it
  window.history.pushState(
    {}, // State
    pathname, // Title
    window.location.origin + pathname // Domian or url
  );
  root.removeChild(root.firstChild); //
  root.appendChild(routes[pathname]()); // Run the function to enter the pathname received
};
const pages = routes[window.location.pathname]; // Render to "/"

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(pages());
};

root.appendChild(pages());
