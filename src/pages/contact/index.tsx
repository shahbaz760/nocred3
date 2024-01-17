import { useFormik } from 'formik';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { MessageIcon, PhoneIcon } from '../../assets/svg';
import Footer from '../../common/footer';
import Header from '../../common/header';
import { contactFormTemplate } from '../../components/emailTemplates';
import SectionHeading from '../../components/sectionHeading';
import PageLayout from '../../layouts/pageLayout/pageLayout';
import { sendGridSubmitCall } from '../../services';
import CustomButton from '../../theme/button';
import InputField from '../../theme/input';
import { contactUsValidationScheme } from '../../validations/validations';
import styles from './contact.module.scss';

interface formProps {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      message: '',
      // accept_terms: false,
    },
    validationSchema: contactUsValidationScheme,
    onSubmit: (values) => {
      if (!loading) handleSubmit(values);
    },
  });

  const handleSubmit = async (values: formProps) => {
    setLoading(true);
    try {
      const data = contactFormTemplate(values);
      const responseStatus = await sendGridSubmitCall(
        data,
        'New query from contact form'
      );
      console.log('responseStatus', responseStatus);

      if (responseStatus) {
        formik.resetForm();
        toast.success('Email send successfully');
      } else {
        toast.error('Something went wrong, Please try after sometime');
      }
    } catch (error) {
      toast.error('Something went wrong, Please try after sometime');
    }
    setLoading(false);
  };

  const detailBox = [
    {
      icon: <MessageIcon />,
      title: 'Chat with Support',
      description: (
        <p>Need a quick answer? Our support team is just a message away.</p>
      ),
      link: 'support@attorneyshoppe.com',
    },
    {
      icon: <PhoneIcon />,
      title: 'Talk to Us',
      description: (
        <p>
          Prefer a conversation? We're available Monday through Friday from 8 am
          to 5 pm to take your call.
        </p>
      ),
      link: '+1 (555) 000-0000',
    },
  ];

  return (
    <PageLayout>
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
                    {item.description}
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
                heading='Get in Touch'
                subHeading="Fill out the form below, and we'll get back to you as promptly as we can."
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
                  {/* <Col md={12} className='position-relative'>
                    <Form.Check
                      type='checkbox'
                      id='checkBox'
                      name='accept_terms'
                      checked={formik.values.accept_terms}
                      onChange={(e) =>
                        formik.setFieldValue('accept_terms', e.target.checked)
                      }
                      label={
                        <>
                          You agree to our friendly{' '}
                          <Link to='' target='_blank'>
                            privacy policy.
                          </Link>
                        </>
                      }
                    />
                    {formik.errors.accept_terms &&
                    formik.touched.accept_terms ? (
                      <span className='input_check_error'>
                        {formik.errors.accept_terms}
                      </span>
                    ) : null}
                  </Col> */}
                </Row>
                <CustomButton
                  className={styles.form_btn}
                  type='submit'
                  loading={loading}
                >
                  Send Message
                </CustomButton>
              </div>
            </form>
          </div>
        </Container>
        <Footer />
      </div>
    </PageLayout>
  );
};
export default Contact;
