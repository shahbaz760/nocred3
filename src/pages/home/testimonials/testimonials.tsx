import { Container } from 'react-bootstrap';
import styles from './testimonials.module.scss';
import SectionHeading from '../../../components/sectionHeading';
import { StarIcon } from '../../../assets/svg';

const Testimonials = () => {
  const BoxesContent = [
    {
      heading:
        'Amazing! AttorneyShoppe helped me find a stellar lawyer for way less than I expected. Huge relief!',
      name: 'Caitlyn K.',
      designation: 'Head of Design, Layers',
      rating: 5,
    },
    {
      heading:
        'After my accident, I was in pain and totally lost. AttorneyShoppe made finding a great, affordable lawyer so easy.',
      name: 'Caitlyn K.',
      designation: 'Head of Design, Layers',
      rating: 5,
    },
    {
      heading:
        'Amazing! AttorneyShoppe helped me find a stellar lawyer for way less than I expected. Huge relief!',
      name: 'Caitlyn K.',
      designation: 'Head of Design, Layers',
      rating: 5,
    },
  ];

  return (
    <div className={styles.testimonials}>
      <Container>
        <SectionHeading
          heading='Customer testimonials'
          subHeading='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <div className={styles.wrapper}>
          {BoxesContent.map((item) => (
            <div className={styles.single_box_col}>
              <div className={styles.single_box}>
                <h4>{item.heading}</h4>
                <div className={styles.profile}>
                  <img src='/images/home/avatarDummy.png' alt='' />
                  <div className={styles.name}>
                    <h5>{item.name}</h5>
                    <p>{item.designation}</p>
                  </div>
                  <div className={styles.rating}>
                    {[...Array(item.rating)].map(() => (
                      <StarIcon />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default Testimonials;
