import { Link } from 'react-router-dom';
import { CheckCircleFilledIcon } from '../../assets/svg';
import PostCaseLayout from '../../layouts/postCase/postCaseLayout';
import CustomButton from '../../theme/button';
import styles from './postCase.module.scss';

const ThankYou = () => {
  return (
    <PostCaseLayout activeStep={4}>
      <div className={styles.complete_view}>
        <CheckCircleFilledIcon />
        <div className={styles.text_content}>
          <h4>Congratulations!</h4>
          <h5>You've Successfully Completed the Intake Form</h5>
        </div>
        <Link to='/' replace>
          <CustomButton className={styles.goHome_btn}>Go To Home</CustomButton>
        </Link>
      </div>
    </PostCaseLayout>
  );
};

export default ThankYou;
