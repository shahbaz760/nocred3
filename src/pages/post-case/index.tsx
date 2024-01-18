import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowRightIcon, CheckCircleFilledIcon } from '../../assets/svg';
import { postCaseFormTemplate } from '../../components/emailTemplates';
import { sendGridSubmitCall } from '../../services';
import CustomButton from '../../theme/button';
import {
  postCaseValidationStep1,
  postCaseValidationStep2,
  postCaseValidationStep3,
} from '../../validations/validations';
import styles from './postCase.module.scss';
import PostCaseStep1 from './steps/step1';
import PostCaseStep2 from './steps/step2';
import PostCaseStep3 from './steps/step3';
import Header from '../../common/header';
import PageLayout from '../../layouts/pageLayout/pageLayout';

const PostCase = () => {
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const currentDate = new Date();
  const twentyYearsAgo = new Date(currentDate);
  twentyYearsAgo.setFullYear(currentDate.getFullYear() - 30);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const formikStep1 = useFormik({
    initialValues: {
      full_name: '',
      phone_number: '',
      email_address: '',
      date_birth: twentyYearsAgo,
      date_accident: currentDate,
      location_accident: '',
      description_accident: '',
      weather_condition: '',
    },
    validationSchema: postCaseValidationStep1,
    onSubmit: () => {
      scrollToTop();
      setActiveStep(2);
    },
  });
  const formikStep2 = useFormik({
    initialValues: {
      injury_description: '',
      medical_attention: 'no',
      first_medical: '',
      damage_property: '',
      seat_belt: 'yes',
      damage_description: '',
      insurance_provider: '',
      policy_number: '',
    },
    validationSchema: postCaseValidationStep2,
    onSubmit: () => {
      scrollToTop();
      setActiveStep(3);
    },
  });

  const formikStep3 = useFormik({
    initialValues: {
      company_name: '',
      policy_number: '',
      accident_report: 'no',
    },
    validationSchema: postCaseValidationStep3,
    onSubmit: () => {
      if (!loading) handleSubmit();
    },
  });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = postCaseFormTemplate({
        ...formikStep1.values,
        ...formikStep2.values,
        ...formikStep3.values,
      });
      const responseStatus = await sendGridSubmitCall(data, 'New case posted');
      if (responseStatus) {
        formikStep1.resetForm();
        formikStep2.resetForm();
        formikStep3.resetForm();
        scrollToTop();
        setActiveStep(4);
      } else {
        toast.error('Something went wrong, Please try after sometime');
      }
    } catch (error) {
      toast.error('Something went wrong, Please try after sometime');
    }
    setLoading(false);
  };

  const topTabs = [
    { title: 'Client and Accident Details' },
    { title: 'Injuries and Damage' },
    { title: "Other Party's Details" },
  ];

  return (
    <PageLayout>
      <div className={styles.post_page}>
        <div className={styles.page_wrapper}>
          <div className='d-lg-none'>
            <Header />
          </div>
          <div className={styles.horizontal_tabs_wrap}>
            <div className={styles.horizontal_tabs}>
              {topTabs.map((item, index) => (
                <React.Fragment key={index}>
                  <span
                    className={`${styles.single_tab} ${
                      index < activeStep ? styles.active : ''
                    }`}
                    key={index}
                  >
                    <span>
                      {index + 1 < activeStep ? (
                        <CheckCircleFilledIcon />
                      ) : (
                        `${index + 1}.`
                      )}
                    </span>
                    {item.title}
                  </span>
                  {topTabs.length > index + 1 ? (
                    <span className={styles.arrowIcon}>
                      <ArrowRightIcon />
                    </span>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>

          <Container>
            {activeStep === 1 ? (
              <PostCaseStep1 formik={formikStep1} />
            ) : activeStep === 2 ? (
              <PostCaseStep2
                formik={formikStep2}
                setActiveStep={setActiveStep}
              />
            ) : activeStep === 3 ? (
              <PostCaseStep3
                formik={formikStep3}
                setActiveStep={setActiveStep}
                loading={loading}
              />
            ) : activeStep === 4 ? (
              <div className={styles.complete_view}>
                <CheckCircleFilledIcon />
                <div className={styles.text_content}>
                  <h4>Congratulations!</h4>
                  <h5>You've Successfully Completed Intake Form</h5>
                </div>
                <Link to='/' replace>
                  <CustomButton className={styles.goHome_btn}>
                    Go To Home
                  </CustomButton>
                </Link>
              </div>
            ) : null}
          </Container>
        </div>
      </div>
    </PageLayout>
  );
};

export default PostCase;
