import { Container } from 'react-bootstrap';
import styles from './home.module.scss';
import Header from '../../common/header';
import Banner from './banner';
import HowItWorks from './howWorks';

const Home = () => {
  return (
    <div className={styles.page}>
      <Container>
        <div
          className={styles.first_view}
          style={{
            backgroundImage:
              'url(/images/home/dots.png), linear-gradient(90deg, #fff, #ffffff8b, #ffffff8b, #fff)',
          }}
        >
          <div className={styles.first_viewInner}>
            <Header />
            <Banner />
          </div>
        </div>
        <HowItWorks />
      </Container>
    </div>
  );
};
export default Home;
