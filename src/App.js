import Navbar from './components/navbar.js';
import Intro from './components/intro.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import BackToTop from './components/back-top.js';
import CookiesCons from './components/cookies.js';

//import css in order
//import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
//import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Contact/>
      <BackToTop />
      <CookiesCons />
    </div>
  );
}

export default App;
