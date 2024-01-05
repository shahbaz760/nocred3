import { Link } from 'react-router-dom';
import { BackArrowIcon, EmailIcon } from '../../assets/svg';
import AuthenticationLayout from '../../layouts/auth/authLayout';
import CustomButton from '../../theme/button';
import styles from './authentication.module.scss';

const CheckEmail = () => {
  return (
    <AuthenticationLayout
      heading='Check your email'
      subheading={
        <p>
          We sent a password reset link to{' '}
          <span style={{ fontWeight: 500 }}>mark@gmail.com</span>
        </p>
      }
      icon={<EmailIcon />}
    >
      <div className={styles.login_page}>
        <div className={styles.submit_btn}>
          <CustomButton type='submit'>Open email app</CustomButton>
        </div>
        <div className={styles.already_account}>
          Didn't receive the email? <Link to=''>Click to resend</Link>
        </div>
        <div className={styles.bottom_backBtn}>
          <Link to='/login' replace>
            <BackArrowIcon /> Back to log in
          </Link>
        </div>
      </div>
    </AuthenticationLayout>
  );
};
export default CheckEmail;
