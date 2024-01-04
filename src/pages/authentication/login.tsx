import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthenticationLayout from '../../layouts/auth/auth';
import CustomButton from '../../theme/button';
import InputField from '../../theme/input';
import styles from './authentication.module.scss';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {},
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
            />
            <div className={styles.remember_wrap}>
              <Form.Check // prettier-ignore
                type='checkbox'
                id='checkBox'
                label={'Remember for 30 days'}
              />
              <Link to=''>Forgot password</Link>
            </div>
          </div>
          <div className={styles.submit_btn}>
            <CustomButton type='submit'>Get started</CustomButton>
            <CustomButton variant='outline-light'>
              Sign up with Google
            </CustomButton>
          </div>
          <div className={styles.already_account}>
            Already have an account? <Link to='/login'>Login</Link>
          </div>
        </form>
      </div>
    </AuthenticationLayout>
  );
};
export default Login;
