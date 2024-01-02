import { Accordion, Container } from 'react-bootstrap';
import SectionHeading from '../../../components/sectionHeading';
import styles from './faq.module.scss';

const Faq = () => {
  const FaqList = [
    {
      heading: 'How does the attorney hiring process work?',
      description:
        'Log in to the platform, upload documentations needed and fill out the Intake form with the case background, post the case and wait for the attorneys to send you proposals.',
    },
    {
      heading: 'What types of legal cases do the attorneys on the platform?',
      description:
        'Log in to the platform, upload documentations needed and fill out the Intake form with the case background, post the case and wait for the attorneys to send you proposals.',
    },
    {
      heading: 'How can clients find the right attorney for specific needs?',
      description:
        'Log in to the platform, upload documentations needed and fill out the Intake form with the case background, post the case and wait for the attorneys to send you proposals.',
    },
    {
      heading:
        'What information should clients provide when submitting a case?',
      description:
        'Log in to the platform, upload documentations needed and fill out the Intake form with the case background, post the case and wait for the attorneys to send you proposals.',
    },
    {
      heading: 'Are consultations with attorneys free of charge?',
      description:
        'Log in to the platform, upload documentations needed and fill out the Intake form with the case background, post the case and wait for the attorneys to send you proposals.',
    },
    {
      heading: 'Can clients read reviews or testimonials about the attorneys?',
      description:
        'Log in to the platform, upload documentations needed and fill out the Intake form with the case background, post the case and wait for the attorneys to send you proposals.',
    },
  ];
  return (
    <div className={styles.faq}>
      <Container>
        <SectionHeading
          heading='Frequently asked questions'
          subHeading='Everything you need to know about the Attorney Shoppe'
        />
        <div className={styles.wrapper}>
          <Accordion defaultActiveKey='0'>
            {FaqList.map((item) => (
              <Accordion.Item eventKey='0'>
                <Accordion.Header>
                  <h5>{item.heading}</h5>
                </Accordion.Header>
                <Accordion.Body>{item.description}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};
export default Faq;
