import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationLayout from '../../layouts/auth/authLayout';
import CustomButton from '../../theme/button';
import InputField from '../../theme/input';
import styles from './authentication.module.scss';
import { BackArrowIcon, KeyIcon } from '../../assets/svg';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: () => {
      navigate('/check-email');
    },
  });

  return (
    <AuthenticationLayout
      heading='Forgot password?'
      subheading="No worries, we'll send you reset instructions."
      icon={<KeyIcon />}
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
          </div>
          <div className={styles.submit_btn}>
            <CustomButton type='submit'>Reset password</CustomButton>
          </div>
          <div className={styles.bottom_backBtn}>
            <Link to='/login' replace>
              <BackArrowIcon /> Back to log in
            </Link>
          </div>
        </form>
      </div>
    </AuthenticationLayout>
  );
};
export default ForgotPassword;
