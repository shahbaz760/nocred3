import { Container } from 'react-bootstrap';
import CustomButton from '../../../theme/button';
import styles from './getInTouch.module.scss';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
  return (
    <div className={styles.getTouch}>
      <Container>
        <div className={styles.getTouch_box}>
          <div className={styles.images}>
            <span className={`${styles.single_img} ${styles.img1}`}>
              <img src='/images/home/avatar1.png' alt='' />
            </span>
            <span className={`${styles.single_img} ${styles.img2}`}>
              <img src='/images/home/avatar2.png' alt='' />
            </span>
            <span className={`${styles.single_img} ${styles.img3}`}>
              <img src='/images/home/avatar3.png' alt='' />
            </span>
            <img src='' alt='' />
          </div>
          <div className={styles.content}>
            <h5>Still have questions?</h5>
            <p>
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <Link to='/contact'>
            <CustomButton>Get in Touch</CustomButton>
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default GetInTouch;
