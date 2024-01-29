import { useFormik } from "formik";
import { postCaseValidationStep2 } from "../../validations/validations";
import styles from "../post-case/postCase.module.scss";
import InputField from "../../theme/input";
import SelectField from "../../theme/select_input";
import CustomButton from "../../theme/button";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon, CheckCircleFilledIcon } from "../../assets/svg";
import PageLayout from "../../layouts/pageLayout/pageLayout";
import Header from "../../common/header";

const Step2 = () => {
  const [activeStep, setActiveStep] = useState(2);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const formikStep2 = useFormik({
    initialValues: {
      injury_description: "",
      medical_attention: "no",
      first_medical: "",
      damage_property: "",
      seat_belt: "yes",
      damage_description: "",
      insurance_provider: "",
      policy_number: "",
    },
    validationSchema: postCaseValidationStep2,
    onSubmit: () => {
      //   scrollToTop();
      setActiveStep(3);
      navigate("/post-case/step3", {
        state: { ...state, ...formikStep2.values },
      });
    },
  });
  useEffect(() => {
    if (!state) {
      navigate(-1);
    }
  }, []);

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

          <div className={styles.form_card}>
            <h4>Injuries and Damage</h4>
            <div className={styles.form_section}>
              <h5>Injuries and Immediate Medical Attention</h5>
              <div className={styles.fields_wrapper}>
                <div>
                  <InputField
                    label="Describe the injuries you sustained"
                    as="textarea"
                    rows={6}
                    formik={formikStep2}
                    placeholder="Enter a description..."
                    name="injury_description"
                    isRequired
                  />
                </div>
                <div>
                  <SelectField
                    label="Did you seek medical attention"
                    formik={formikStep2}
                    name="medical_attention"
                    optionList={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ]}
                  />
                </div>
                <div>
                  <InputField
                    label="Location of first medical treatment"
                    formik={formikStep2}
                    placeholder="US"
                    name="first_medical"
                    isRequired
                  />
                </div>
                <div>
                  <SelectField
                    label="Vehicle and property damage (if applicable)"
                    formik={formikStep2}
                    name="damage_property"
                    optionList={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ]}
                    isRequired
                  />
                </div>
                <div>
                  <SelectField
                    label="Seat Belt on"
                    formik={formikStep2}
                    name="seat_belt"
                    optionList={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ]}
                  />
                </div>
                <div>
                  <InputField
                    label="Briefly describe the damage"
                    as="textarea"
                    rows={6}
                    formik={formikStep2}
                    placeholder="Enter a description..."
                    name="damage_description"
                  />
                </div>
              </div>
            </div>
            <div className={styles.form_section}>
              <h5>Insurance information of the client</h5>
              <div className={styles.fields_wrapper}>
                <div>
                  <InputField
                    label="Auto Insurance provider (Optional)"
                    formik={formikStep2}
                    placeholder="Auto insurance"
                    name="insurance_provider"
                  />
                </div>
                <div>
                  <InputField
                    label="Policy number (Optional)"
                    formik={formikStep2}
                    placeholder="Number"
                    name="policy_number"
                  />
                </div>
              </div>
            </div>
            <div className={styles.submit_btn_wrap}>
              <CustomButton
                variant="outline-primary"
                onClick={() => navigate("/post-case")}
                // onClick={() => setActiveStep((prev) => prev - 1)}
              >
                Cancel
              </CustomButton>
              <CustomButton onClick={() => formikStep2.handleSubmit()}>
                Save & Next
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Step2;
