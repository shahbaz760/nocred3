import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import CheckEmail from './pages/authentication/check-email';
import ForgotPassword from './pages/authentication/forgot-password';
import Login from './pages/authentication/login';
import PassResetComplete from './pages/authentication/reset-complete';
import ResetPassword from './pages/authentication/reset-password';
import SignUp from './pages/authentication/signup';
import Contact from './pages/contact';
import Home from './pages/home';
import NotFound from './pages/not-found';
import PostCase from './pages/post-case';
import ThankYou from './pages/post-case/thankyou';
import './styles/App.scss';
import Step2 from './pages/post-case/steps/step2';
import Step3 from './pages/post-case/steps/step3';
import Policy from './pages/policy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacy-policy' element={<Policy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/post-case/step2' element={<Step2 />} />
        <Route path='/post-case/step3' element={<Step3 />} />
        <Route path='/post-case' element={<PostCase />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/check-email' element={<CheckEmail />} />
        <Route path='/password-reset-success' element={<PassResetComplete />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
