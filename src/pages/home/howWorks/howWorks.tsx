import { Container } from 'react-bootstrap';
import SectionHeading from '../../../components/sectionHeading';
import styles from './howWorks.module.scss';
import { ArrowWaveDotted } from '../../../assets/svg';

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
        'When posting the case Attorneys see your case and start sending you proposals',
    },
    {
      image: '/images/home/how_works3.png',
      heading: 'Wait for Attorneys Call',
      subheading:
        'Client send a call request to the Attorney, Attorney pays to accept the call request ',
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
              <ArrowWaveDotted className={styles.arrow} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default HowItWorks;
