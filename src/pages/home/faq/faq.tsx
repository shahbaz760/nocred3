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

  const FaqList = [
    {
      heading:
        'How soon can I expect to hear from attorneys after submitting the intake form?',
      description:
        'After submitting your intake form on AttorneyShoppe, you can typically expect to start receiving responses from attorneys within an hour, and at the latest, within 24 hours.',
    },
    {
      heading:
        'What are the advantages of using AttorneyShoppe compared to directly approaching attorneys?',
      description:
        'AttorneyShoppe simplifies the process of finding legal help by providing a single, comprehensive intake form that reaches a wide network of attorneys. This approach encourages competitive bids, which could potentially result in lower contingency fees and better terms for you, while saving the time and effort of consulting multiple attorneys individually.',
    },
    {
      heading:
        "What should I do if I'm not satisfied with the offers I receive?",
      description:
        "If you're not satisfied with the initial offers, you can request more. Our aim is to ensure that you find the right attorney for your case, and we are committed to providing you with as many options as necessary.",
    },
    {
      heading: 'Is there a fee for using AttorneyShoppe to find an attorney?',
      description:
        'No, there is no fee for clients to use AttorneyShoppe. Our platform is designed to connect you with attorneys free of charge.',
    },
    {
      heading: "How are attorneys selected for AttorneyShoppe's network?",
      description: "How are attorneys selected for AttorneyShoppe's network?",
    },
  ];
  return (
    <div className={styles.faq}>
      <Container>
        <SectionHeading
          heading='Frequently asked questions'
          subHeading='Your guide to navigating AttorneyShoppe.'
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
