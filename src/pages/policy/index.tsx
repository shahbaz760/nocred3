import { Container } from 'react-bootstrap';
import Footer from '../../common/footer';
import Header from '../../common/header';
import styles from './policy.module.scss';
import SectionHeading from '../../components/sectionHeading';
import PageLayout from '../../layouts/pageLayout/pageLayout';

const Policy = () => {
  return (
    <PageLayout>
      <div className={styles.page}>
        <Header />
        <div className={styles.page_wrap}>
          <Container>
            <div className={styles.page_heading}>
              <SectionHeading
                heading='Privacy Policy'
                subHeading={
                  <h5 className={styles.subtitle}>Welcome to AttorneyShoppe</h5>
                }
              />
            </div>
            <div className={styles.page_content}>
              <h4>Information Collection and Use</h4>
              <p>
                We collect several different types of information for various
                purposes to provide and improve our service to you. Types of
                data collected may include:
                <br />
                <br />
                <br />
              </p>
              <p>
                Personal Data: While using our site, we may ask you to provide
                us with certain personally identifiable information that can be
                used to contact or identify you. This may include, but is not
                limited to, your email address, name, phone number, and postal
                address.
              </p>
              <p>
                Usage Data: We may also collect information on how the website
                is accessed and used. This Usage Data may include information
                such as your computer's Internet Protocol address, browser type,
                browser version, the pages of our website that you visit, the
                time and date of your visit, the time spent on those pages, and
                other diagnostic data.
              </p>
              <h4>Use of Data</h4>
              <div className={styles.content_box}>
                <h5>
                  AttorneyShoppe uses the collected data for various purposes,
                  Including:
                </h5>
                <ul className={styles.list}>
                  <li>To provide and maintain our website</li>
                  <li>To notify you about changes to our website</li>
                  <li>
                    To allow you to participate in interactive features of our
                    website when you choose to do so
                  </li>
                  <li>To provide customer support</li>
                  <li>
                    To gather analysis or valuable information so that we can
                    improve our website
                  </li>
                  <li>To monitor the usage of our website</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>3. Data Transfer</li>
                  <li>
                    Your information, including Personal Data, may be
                    transferred to — and maintained on — computers located
                    outside of your state, province, country, or other
                    governmental jurisdiction where the data protection laws may
                    differ from those of your jurisdiction.
                  </li>
                </ul>
              </div>
              <h4>Data Transfer</h4>
              <p>
                Your information, including Personal Data, may be transferred to
                — and maintained on — computers located outside of your state,
                province, country, or other governmental jurisdiction where the
                data protection laws may differ from those of your jurisdiction.
              </p>
              <h4>Disclosure of Data</h4>
              <div className={styles.content_box}>
                <h5>
                  We May disclose your Personal Data in the good faith belief
                  that such action is necessary to:
                </h5>
                <ul className={styles.list}>
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of AttorneyShoppe
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the website
                  </li>
                  <li>
                    Protect the personal safety of users of the website or the
                    public
                  </li>
                  <li>Protect against legal liability</li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </PageLayout>
  );
};
export default Policy;
