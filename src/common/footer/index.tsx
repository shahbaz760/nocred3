import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <Container>
          <div className={styles.footer_top}>
            <div className={styles.footer_topLeft}>
              <img src='/images/logo.svg' alt='logo' />
              {/* <p>We connect Attorneys with Clients.</p> */}
            </div>
            <div className={styles.footer_topLinks}>
              <div className={styles.links_column}>
                {/* <h6>Product</h6> */}
                <div className={styles.links_list}>
                  <Link to='/'>Home</Link>
                </div>
              </div>
              <div className={styles.links_column}>
                {/* <h6>Company</h6> */}
                <div className={styles.links_list}>
                  <Link to='/about'>About</Link>
                </div>
              </div>
              <div className={styles.links_column}>
                {/* <h6>Legal</h6> */}
                <div className={styles.links_list}>
                  <Link to='/contact'>Contact Us</Link>
                </div>
              </div>
              <div className={styles.links_column}>
                {/* <h6>Legal</h6> */}
                <div className={styles.links_list}>
                  <Link to='/privacy-policy'>Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className={styles.footer_bottom}>
          <Container>
            <div className={styles.footer_bottomWrap}>
              <p>© 2023 Attorney Shoppe. All rights reserved.</p>
              {/* <div className={styles.socialLinks}>
                <Link to=''>
                  <JdxIcon />
                </Link>
                <Link to=''>
                  <LinkedinIcon />
                </Link>
                <Link to=''>
                  <FacebookIcon />
                </Link>
                <Link to=''>
                  <TwitterIcon />
                </Link>
                <Link to=''>
                  <VictoryIcon />
                </Link>
                <Link to=''>
                  <DribbleIcon />
                </Link>
              </div> */}
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
