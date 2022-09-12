// import pages
import { timeLine } from './routes/timeLine.js';
import { login } from './routes/login.js';
// eslint-disable-next-line import/no-cycle, import/named
import { register } from './routes/register.js';

// Connect with html
export const root = document.getElementById('root');// In this node is where everything is render

const route = { // Object that contains the routes and what to render
  '/': login,
  '/timeLine': timeLine,
  '/register': register,
};
export const onNavigate = (pathname) => { // Takes pathname and render section according to it
  window.history.pushState(
    {}, // State
    pathname, // Title
    window.location.origin + pathname, // Domian or url
  );
  root.removeChild(root.firstChild);//
  root.appendChild(route[pathname]());// Run the function to enter the pathname received
};
const pages = route[window.location.pathname];// Render to "/"

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(pages());
};

root.appendChild(pages());
