import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import AuthenticationLayout from '../../layouts/auth/auth';
import CustomButton from '../../theme/button';
import InputField from '../../theme/input';
import styles from './authentication.module.scss';
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {},
  });

  return (
    <AuthenticationLayout
      heading='Create an account'
      subheading='Start your 30-day free trial.'
    >
      <div className={styles.signup_page}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.form_field_wrapper}>
            <InputField
              formik={formik}
              label='Name'
              name='name'
              placeholder='Enter your name'
            />
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
export default SignUp;
