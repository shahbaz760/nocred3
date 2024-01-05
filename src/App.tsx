import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import CheckEmail from './pages/authentication/check-email';
import ForgotPassword from './pages/authentication/forgot-password';
import Login from './pages/authentication/login';
import PassResetComplete from './pages/authentication/reset-complete';
import SignUp from './pages/authentication/signup';
import Contact from './pages/contact';
import Home from './pages/home';
import NotFound from './pages/not-found';
import PostCase from './pages/post-case';
import './styles/App.scss';
import ResetPassword from './pages/authentication/reset-password';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/check-email' element={<CheckEmail />} />
        <Route path='/password-reset-success' element={<PassResetComplete />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/post-case' element={<PostCase />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
