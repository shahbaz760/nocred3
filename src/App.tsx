import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/not-found';
import SignUp from './pages/authentication/signup';
import Login from './pages/authentication/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
