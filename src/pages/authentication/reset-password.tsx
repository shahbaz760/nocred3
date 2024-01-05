import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import {
  BackArrowIcon,
  CheckCircleFilledIcon,
  LockIcon,
} from '../../assets/svg';
import AuthenticationLayout from '../../layouts/auth/authLayout';
import CustomButton from '../../theme/button';
import InputField from '../../theme/input';
import styles from './authentication.module.scss';

const ResetPassword = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_password: '',
    },
    onSubmit: () => {
      navigate('/password-reset-success');
    },
  });

  return (
    <AuthenticationLayout
      heading='Set new password'
      subheading='Your new password must be different to previously used passwords.'
      icon={<LockIcon />}
    >
      <div className={styles.login_page}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.form_field_wrapper}>
            <InputField
              formik={formik}
              label='Password'
              name='password'
              placeholder='Enter new password'
              type='password'
            />
            <InputField
              formik={formik}
              label='Confirm password'
              name='confirm_password'
              placeholder='Confirm new password'
              type='password'
            />
            <div className={styles.password_checks}>
              <span>
                <CheckCircleFilledIcon /> Must be at least 8 characters
              </span>
              <span>
                <CheckCircleFilledIcon /> Must contain one special character
              </span>
            </div>
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
export default ResetPassword;
