import { useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { MinusCircle, PlusCircle } from '../../../assets/svg';
import SectionHeading from '../../../components/sectionHeading';
import styles from './faq.module.scss';
import { AccordionEventKey } from 'react-bootstrap/esm/AccordionContext';

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState<
    string | AccordionEventKey
  >('0');

  console.log(activeAccordion);

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
          <Accordion
            activeKey={activeAccordion}
            onSelect={(eventKey) => setActiveAccordion(eventKey)}
          >
            {FaqList.map((item, index) => (
              <Accordion.Item eventKey={`${index}`} key={index}>
                <Accordion.Header>
                  <h5>{item.heading}</h5>
                </Accordion.Header>
                <Accordion.Body>{item.description}</Accordion.Body>
                <div className={styles.toggleIcon}>
                  {`${index}` === activeAccordion ? (
                    <MinusCircle />
                  ) : (
                    <PlusCircle />
                  )}
                </div>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};
export default Faq;
