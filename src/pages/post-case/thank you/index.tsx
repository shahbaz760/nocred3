import styles from '../thank you/thankyou.module.scss';
import { Link } from 'react-router-dom';
import CustomButton from '../../../theme/button';
import { ArrowRightIcon, CheckCircleFilledIcon } from '../../../assets/svg';
import Header from '../../../common/header';
const ThankYou = () => {
  return (
    <>
      <div className={styles.page_wrapper_bg}>
        <div className='d-lg-none'>
          <Header />
        </div>
        <div className={styles.form_steps}>
          <p className={styles.single_tab}>
            <CheckCircleFilledIcon />
            Client and Accident Details
          </p>
          <span className={styles.arrowIcon}>
            {' '}
            <ArrowRightIcon />
          </span>

          <p className={styles.single_tab}>
            <CheckCircleFilledIcon />
            Injuries and Damage
          </p>
          <span className={styles.arrowIcon}>
            <ArrowRightIcon />
          </span>

          <p className={styles.single_tab}>
            <CheckCircleFilledIcon />
            Other Party’s Details
          </p>
        </div>
        <div className={styles.complete_view}>
          <CheckCircleFilledIcon />
          <div className={styles.text_content}>
            <h4>Congratulations!</h4>
            <h5>You've Successfully Completed the Intake Form</h5>
          </div>
          <Link to='/' replace>
            <CustomButton className={styles.goHome_btn}>
              Go To Home
            </CustomButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
