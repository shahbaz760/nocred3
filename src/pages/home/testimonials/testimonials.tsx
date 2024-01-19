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
      img: '/images/home/avatarDummy.png',
      rating: 5,
    },
    {
      heading:
        'After my accident, I was in pain and overwhelmed. AttorneyShoppe made finding a lawyer easy',
      name: 'Joshua R.',
      designation: 'Head of Design, Layers',
      img: '/images/home/avatarDummy2.png',
      rating: 5,
    },
    {
      heading:
        'Attorneys will contact you with their proposals, allowing you to compare and choose the best match for your legal needs.',
      name: 'Jeric H.',
      designation: 'Head of Design, Layers',
      img: '/images/home/avatarDummy3.png',
      rating: 5,
    },
  ];

  return (
    <div className={styles.testimonials}>
      <Container>
        <SectionHeading
          heading='Customer Testimonials'
          subHeading='Hear from clients who found their attorney through AttorneyShoppe.'
        />
        <div className={styles.wrapper}>
          {BoxesContent.map((item, index) => (
            <div className={styles.single_box_col} key={index}>
              <div className={styles.single_box}>
                <h4>{item.heading}</h4>
                <div className={styles.profile}>
                  <img src={item.img} alt='client image' />
                  <div className={styles.name}>
                    <h5>{item.name}</h5>
                    {/* <p>{item.designation}</p> */}
                  </div>
                  <div className={styles.rating}>
                    {[...Array(item.rating)].map((_, ratingIndex) => (
                      <StarIcon key={ratingIndex} />
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
