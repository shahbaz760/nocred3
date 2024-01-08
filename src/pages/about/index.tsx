import { Container } from 'react-bootstrap';
import Footer from '../../common/footer';
import Header from '../../common/header';
import styles from './about.module.scss';
import SectionHeading from '../../components/sectionHeading';

const About = () => {
  return (
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
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
              </p>
              <p>
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                nulla odio nisl vitae. In aliquet pellentesque aenean hac
                vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                vitae malesuada.
              </p>
              <p>
                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                imperdiet commodo consectetur convallis risus. Sed condimentum
                enim dignissim adipiscing faucibus consequat, urna. Viverra
                purus et erat auctor aliquam. Risus, volutpat vulputate posuere
                purus sit congue convallis aliquet.
              </p>
              <p>
                Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                mauris id. Non pellentesque congue eget consectetur turpis.
                Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                aenean.
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
  );
};
export default About;
