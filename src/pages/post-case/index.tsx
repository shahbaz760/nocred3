import { useFormik } from "formik";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon, CheckCircleFilledIcon } from "../../assets/svg";
import Header from "../../common/header";
import PageLayout from "../../layouts/pageLayout/pageLayout";
import { postCaseValidationStep1 } from "../../validations/validations";
import styles from "./postCase.module.scss";
import PostCaseStep1 from "./steps/step1";

const PostCase = () => {
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();

  const currentDate = new Date();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const formikStep1 = useFormik({
    initialValues: {
      full_name: "",
      phone_number: "",
      email_address: "",
      age: "",
      date_accident: currentDate,
      location_accident: "",
      description_accident: "",
      weather_condition: "",
    },
    validationSchema: postCaseValidationStep1,
    onSubmit: () => {
      scrollToTop();
      setActiveStep(2);
      navigate("/post-case/step2", { state: formikStep1.values });
    },
  });
  const topTabs = [
    { title: "Client and Accident Details" },
    { title: "Injuries and Damage" },
    { title: "Other Party's Details" },
  ];

  return (
    <PageLayout>
      <div className={styles.post_page}>
        <div className={styles.page_wrapper}>
          <div className="d-lg-none">
            <Header />
          </div>
          <div className={styles.horizontal_tabs_wrap}>
            <div className={styles.horizontal_tabs}>
              {topTabs.map((item, index) => (
                <React.Fragment key={index}>
                  <span
                    className={`${styles.single_tab} ${
                      index < activeStep ? styles.active : ""
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
            <PostCaseStep1 formik={formikStep1} />
          </Container>
        </div>
      </div>
    </PageLayout>
  );
};

export default PostCase;
