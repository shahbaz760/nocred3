import { Container } from 'react-bootstrap';
import Footer from '../../common/footer';
import Header from '../../common/header';
import Banner from './banner/banner';
import ExplorePlatform from './explore/explore';
import Faq from './faq/faq';
import GetInTouch from './getInTouch/getInTouch';
import styles from './home.module.scss';
import HowItWorks from './howWorks/howWorks';
import Testimonials from './testimonials/testimonials';

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
            <Header noContainer />
            <Banner />
          </div>
        </div>
      </Container>
      <HowItWorks />
      <ExplorePlatform />
      <Faq />
      <GetInTouch />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default Home;
