import { Link } from 'react-router-dom';
import CustomButton from '../../../theme/button';
import styles from './banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.wrapper}>
        <div className={styles.banner_content}>
          <h1>
            With One Intake Form, <span>Let Lawyers Shop</span> for Your Case
          </h1>
          <h5>
            Skip the hassle and uncertainty. Fill out just one intake form and
            get competitive offers from top attorneys.
          </h5>
          <Link to='/post-case' className={styles.post_btn}>
            <CustomButton variant='primary'>Post a Case</CustomButton>
          </Link>
          {/* <button className='btn btn-primary'>Post a Case</button> */}
        </div>
        <div className={styles.banner_img}>
          <img src='/images/home/banner_graphic.svg' alt='graphic' />
        </div>
      </div>
    </div>
  );
};
export default Banner;
