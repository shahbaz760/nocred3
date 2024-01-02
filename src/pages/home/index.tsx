import { Container } from 'react-bootstrap';
import styles from './home.module.scss';
import Header from '../../common/header';
import Banner from './banner/banner';
import HowItWorks from './howWorks/howWorks';
import ExplorePlatform from './explore/explore';
import Faq from './faq/faq';

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
      </Container>
      <HowItWorks />
      <ExplorePlatform />
      <Faq />
    </div>
  );
};
export default Home;
