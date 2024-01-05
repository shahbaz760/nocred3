import { useFormik } from 'formik';
import moment from 'moment';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckCircleFilledIcon } from '../../assets/svg';
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

const PostCase = () => {
  const [activeStep, setActiveStep] = useState(1);

  const formikStep1 = useFormik({
    initialValues: {
      full_name: '',
      phone_number: '',
      email_address: '',
      date_birth: moment('2000-01-01').format('YYYY-MM-DD'),
      date_accident: moment().format('YYYY-MM-DD'),
      location_accident: '',
      description_accident: '',
      weather_condition: '',
    },
    validationSchema: postCaseValidationStep1,
    onSubmit: () => {
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
      setActiveStep(4);
    },
  });

  const topTabs = [
    { title: 'Client and Accident Details' },
    { title: 'Injuries and Damage' },
    { title: "Other Party's Details" },
  ];

  return (
    <div className={styles.post_page}>
      <Container>
        <div className={styles.page_wrapper}>
          <div className={styles.horizontal_tabs}>
            {topTabs.map((item, index) => (
              <>
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
              </>
            ))}
          </div>

          {activeStep === 1 ? (
            <PostCaseStep1 formik={formikStep1} />
          ) : activeStep === 2 ? (
            <PostCaseStep2 formik={formikStep2} setActiveStep={setActiveStep} />
          ) : activeStep === 3 ? (
            <PostCaseStep3 formik={formikStep3} setActiveStep={setActiveStep} />
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
        </div>
      </Container>
    </div>
  );
};

export default PostCase;
