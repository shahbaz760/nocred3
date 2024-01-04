import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MessageIcon, PhoneIcon } from '../../assets/svg';
import Footer from '../../common/footer';
import Header from '../../common/header';
import SectionHeading from '../../components/sectionHeading';
import styles from './contact.module.scss';
import InputField from '../../theme/input';
import { useFormik } from 'formik';
import CustomButton from '../../theme/button';
import { contactUsValidationScheme } from '../../validations/validations';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: contactUsValidationScheme,
    onSubmit: (values) => {
      console.log('formik', values);
    },
  });

  const detailBox = [
    {
      icon: <MessageIcon />,
      title: 'Chat to support',
      description: "We're here to help.",
      link: 'support@attorneyshoppe.com',
    },
    {
      icon: <PhoneIcon />,
      title: 'Call us',
      description: 'Mon-Fri from 8am to 5pm.',
      link: '+1 (555) 000-0000',
    },
  ];

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.top_section}>
          <Header noContainer />
          <div className={styles.page_heading}>
            <h1>Contact us</h1>
          </div>
          <div className={styles.detail_wrapper}>
            {detailBox.map((item, index) => (
              <div className={styles.detail_box_col} key={index}>
                <div className={styles.detail_box}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <Link to={`${index === 0 ? 'mailto' : 'tel'}:${item.link}`}>
                    {item.link}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.form_section}>
          <div className={styles.heading}>
            <SectionHeading
              heading='Get in touch'
              subHeading='We’d love to hear from you. Please fill out this form.'
            />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.form_wrap}>
              <Row className={`${styles.form_row}`}>
                <Col md={6}>
                  <InputField
                    label='First name'
                    formik={formik}
                    placeholder='First name'
                    name='first_name'
                  />
                </Col>
                <Col md={6}>
                  <InputField
                    label='Last name'
                    formik={formik}
                    placeholder='Last name'
                    name='last_name'
                  />
                </Col>
                <Col md={12}>
                  <InputField
                    label='Email'
                    formik={formik}
                    placeholder='you@company.com'
                    name='email'
                  />
                </Col>
                <Col md={12}>
                  <InputField
                    label='Phone number'
                    formik={formik}
                    placeholder='+1 (555) 000-0000'
                    name='phone'
                  />
                </Col>
                <Col md={12}>
                  <InputField
                    label='Message'
                    as='textarea'
                    rows={8}
                    formik={formik}
                    placeholder='Leave us a message...'
                    name='message'
                  />
                </Col>
                <Col md={12}>
                  <Form.Check // prettier-ignore
                    type='checkbox'
                    id='checkBox'
                    label={
                      <>
                        You agree to our friendly{' '}
                        <Link to='' target='_blank'>
                          privacy policy.
                        </Link>
                      </>
                    }
                  />
                </Col>
                <CustomButton className={styles.form_btn} type='submit'>
                  Send Message
                </CustomButton>
              </Row>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default Contact;
