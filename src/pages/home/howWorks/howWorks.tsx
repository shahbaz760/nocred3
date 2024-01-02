import { Container } from 'react-bootstrap';
import SectionHeading from '../../../components/sectionHeading';
import styles from './howWorks.module.scss';
import { ArrowWaveDotted } from '../../../assets/svg/svg';

const HowItWorks = () => {
  const BoxesList = [
    {
      image: '/images/home/howItWorks.png',
      heading: 'Fill out the Intake Form',
      subheading:
        'Upload any necessary documents, fill out the case background, and let us take it from there.',
    },
    {
      image: '/images/home/howItWorks.png',
      heading: 'Fill out the Intake Form',
      subheading:
        'Upload any necessary documents, fill out the case background, and let us take it from there.',
    },
    {
      image: '/images/home/howItWorks.png',
      heading: 'Fill out the Intake Form',
      subheading:
        'Upload any necessary documents, fill out the case background, and let us take it from there.',
    },
  ];
  return (
    <div className={styles.howWorks}>
      <Container>
        <SectionHeading heading='How it works' />
        <div className={styles.wrapper}>
          {BoxesList.map((item) => (
            <div className={styles.single_box}>
              <img src={item.image} alt='' />
              <h4>{item.heading}</h4>
              <p>{item.subheading}</p>
              <ArrowWaveDotted className={styles.arrow} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default HowItWorks;
