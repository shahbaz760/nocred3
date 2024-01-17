import { Container } from 'react-bootstrap';
import Footer from '../../common/footer';
import Header from '../../common/header';
import styles from './about.module.scss';
import SectionHeading from '../../components/sectionHeading';
import PageLayout from '../../layouts/pageLayout/pageLayout';

const About = () => {
  return (
    <PageLayout>
      <div className={styles.page}>
        <Header />
        <div className={styles.page_content}>
          <Container>
            <div className={styles.page_heading}>
              <SectionHeading heading='Where Clients and Attorneys Connect Effortlessly' />
            </div>
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <h6 className='heading_sm_primary'>Our story</h6>
                <h4>The AttorneyShoppe Journey</h4>
                <p>
                  At AttorneyShoppe, we're reshaping the legal landscape with a
                  simple yet powerful idea: connecting clients with attorneys
                  shouldn't be complicated. Our team, fueled by a shared passion
                  for innovation and justice, has created a platform where
                  finding trustworthy legal representation is as easy as a few
                  clicks.
                </p>
                <p>
                  Our journey is driven by the challenges we've all faced in
                  navigating the legal system. We've channeled our engineering
                  expertise and legal insights into a streamlined service that
                  demystifies the process of hiring an attorney. AttorneyShoppe
                  embodies a commitment to transparency and competitive choice,
                  empowering you to make informed decisions with ease.
                </p>
                <p>
                  Our approach is rooted in the belief that a strong community
                  and shared experiences are the keystones of innovation. With
                  every feature and update, we prioritize your needs, making our
                  service intuitive and efficient.
                </p>
                <p>
                  Join us as we pave the way to a future where legal support is
                  straightforward and just a click away—a future where
                  AttorneyShoppe is your trusted partner in the journey toward
                  justice.
                </p>
              </div>
              <picture className={styles.image}>
                <source
                  media='(min-width:768px)'
                  srcSet='/images/about/about.jpg'
                />
                <img src='/images/about/about_mobile.jpg' alt='' />
              </picture>
            </div>
          </Container>
        </div>

        <Footer />
      </div>
    </PageLayout>
  );
};
export default About;
