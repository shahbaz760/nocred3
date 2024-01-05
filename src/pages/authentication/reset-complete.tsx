import { Link } from 'react-router-dom';
import { BackArrowIcon, CheckCircleOutlineIcon } from '../../assets/svg';
import AuthenticationLayout from '../../layouts/auth/authLayout';
import CustomButton from '../../theme/button';
import styles from './authentication.module.scss';

const PassResetComplete = () => {
  return (
    <AuthenticationLayout
      heading='Password reset'
      subheading={
        <p>
          Your password has been successfully reset.
          <br />
          Click below to log in magically.
        </p>
      }
      icon={<CheckCircleOutlineIcon />}
    >
      <div className={styles.login_page}>
        <div className={styles.submit_btn}>
          <CustomButton type='submit'>Continue</CustomButton>
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
export default PassResetComplete;
