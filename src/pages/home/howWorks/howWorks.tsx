import { Container } from 'react-bootstrap';
import SectionHeading from '../../../components/sectionHeading';
import styles from './howWorks.module.scss';
import { ArrowWaveDotted, ArrowWaveVerticalDotted } from '../../../assets/svg';

const HowItWorks = () => {
  const BoxesList = [
    {
      image: '/images/home/how_works1.png',
      heading: 'Fill out the Intake Form',
      subheading:
        'Upload any necessary documents, fill out the case background, and let us take it from there.',
    },
    {
      image: '/images/home/how_works2.png',
      heading: 'Post the Case',
      subheading:
        'Share your case with our network. Attorneys interested in your case will be notified and have the opportunity to review it. Your case will be made visible to our network of attorneys, ready for their review.',
    },
    {
      image: '/images/home/how_works3.png',
      heading: 'Review Proposals',
      subheading:
        'Attorneys will contact you with their proposals, allowing you to compare and choose the best match for your legal needs.',
    },
  ];
  return (
    <div className={styles.howWorks}>
      <Container>
        <SectionHeading heading='How it works' />
        <div className={styles.wrapper}>
          {BoxesList.map((item, index) => (
            <div className={styles.single_box} key={index}>
              <img src={item.image} alt='' />
              <h4>{item.heading}</h4>
              <p>{item.subheading}</p>
              <div className={styles.arrow_wrap}>
                <ArrowWaveDotted className={styles.arrow_desktop} />
                <ArrowWaveVerticalDotted className={styles.arrow_mobile} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default HowItWorks;
