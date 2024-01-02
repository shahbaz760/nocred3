import { Container } from 'react-bootstrap';
import SectionHeading from '../../../components/sectionHeading';
import styles from './explore.module.scss';
import { ArrowWaveDotted } from '../../../assets/svg/svg';

const ExplorePlatform = () => {
  const BoxesList = [
    {
      image: '/images/home/explore2.svg',
      heading: 'Save and Compare',
      description:
        "We're committed to ensuring you get the most reasonable legal rates available. Tap into our network of top attorneys who offer competitive contingency fees, meaning they only get paid if you win your case. We foster a competitive environment that drives down attorney fees, reducing a typical 33% rate to on average of 27% post settlement",
    },
    {
      image: '/images/home/explore1.svg',
      heading: 'Save and Compare',
      description:
        "We're committed to ensuring you get the most reasonable legal rates available. Tap into our network of top attorneys who offer competitive contingency fees, meaning they only get paid if you win your case. We foster a competitive environment that drives down attorney fees, reducing a typical 33% rate to on average of 27% post settlement",
    },
  ];
  return (
    <div className={styles.explore}>
      <Container>
        <SectionHeading heading='Explore our platform' />
        <div className={styles.wrapper}>
          {BoxesList.map((item) => (
            <div className={styles.single_row}>
              <div className={styles.imagePart}>
                <img src={item.image} alt='' />
              </div>
              <div className={styles.contentPart}>
                <SectionHeading noCenter heading={item.heading} />
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default ExplorePlatform;
