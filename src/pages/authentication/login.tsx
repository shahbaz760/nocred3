import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthenticationLayout from '../../layouts/auth/authLayout';
import CustomButton from '../../theme/button';
import InputField from '../../theme/input';
import styles from './authentication.module.scss';
import { GoogleLogo } from '../../assets/svg/logos';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    onSubmit: () => {},
  });

  return (
    <AuthenticationLayout
      heading='Log in to your account'
      subheading='Welcome back! Please enter your details.'
    >
      <div className={styles.login_page}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.form_field_wrapper}>
            <InputField
              formik={formik}
              label='Email'
              name='email'
              placeholder='Enter your email'
            />
            <InputField
              formik={formik}
              label='Password'
              name='password'
              placeholder='Create password'
              type='password'
            />
            <div className={styles.remember_wrap}>
              <Form.Check // prettier-ignore
                type='checkbox'
                id='checkBox'
                name='remember'
                checked={formik.values.remember}
                label={'Remember for 30 days'}
                onChange={(e) =>
                  formik.setFieldValue('remember', e.target.checked)
                }
              />
              <Link to='/forgot-password'>Forgot password</Link>
            </div>
          </div>
          <div className={styles.submit_btn}>
            <CustomButton type='submit'>Get started</CustomButton>
            <CustomButton variant='outline-light' className={styles.google_btn}>
              <GoogleLogo /> Sign up with Google
            </CustomButton>
          </div>
          <div className={styles.already_account}>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </div>
        </form>
      </div>
    </AuthenticationLayout>
  );
};
export default Login;
