// import { useNavigate } from "react-router-dom";
import { postCaseValidationStep3 } from "../../validations/validations";
import InputField from "../../theme/input";
import SelectField from "../../theme/select_input";
import CustomButton from "../../theme/button";
import styles from "../post-case/postCase.module.scss";
import { useFormik } from "formik";
import PageLayout from "../../layouts/pageLayout/pageLayout";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon, CheckCircleFilledIcon } from "../../assets/svg";
import Header from "../../common/header";
import { postCaseFormTemplate } from "../../components/emailTemplates";
import { sendGridSubmitCall } from "../../services";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Step3 = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(3);
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const formikStep3 = useFormik({
    initialValues: {
      company_name: "",
      policy_number: "",
      accident_report: "no",
    },
    validationSchema: postCaseValidationStep3,
    onSubmit: () => {
      if (!loading) handleSubmit();
    },
  });
  const topTabs = [
    { title: "Client and Accident Details" },
    { title: "Injuries and Damage" },
    { title: "Other Party's Details" },
  ];

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const data = postCaseFormTemplate({
        ...state,
        ...formikStep3.values,
      });
      const responseStatus = await sendGridSubmitCall(data, "New case posted");
      if (responseStatus) {
        formikStep3.resetForm();
        scrollToTop();
        navigate("/thank-you");
        setActiveStep(3);
        // setActiveStep(4);
      } else {
        toast.error("Something went wrong, Please try after sometime");
      }
    } catch (error) {
      toast.error("Something went wrong, Please try after sometime");
    }
    setLoading(false);
  };
  useEffect(() => {
    if (!state) {
      navigate(-1);
    }
  }, []);
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
            <h4>Other Party's Details</h4>
            <div className={styles.form_section}>
              <h5>Other details</h5>
              <div className={styles.fields_wrapper}>
                <div>
                  <InputField
                    label="Insurance company name (Optional)"
                    formik={formikStep3}
                    placeholder="Name"
                    name="company_name"
                  />
                </div>
                <div>
                  <InputField
                    label="Policy number (Optional)"
                    formik={formikStep3}
                    placeholder="Number"
                    name="policy_number"
                  />
                </div>
              </div>
            </div>
            <div className={styles.form_section}>
              <h5>Accident Report</h5>
              <div className={styles.fields_wrapper}>
                <div>
                  <SelectField
                    label="Was an official accident report filled"
                    formik={formikStep3}
                    name="accident_report"
                    optionList={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ]}
                    isRequired
                  />
                </div>
              </div>
            </div>
            <div className={styles.submit_btn_wrap}>
              <NavLink to="/post-case">
                <CustomButton
                  variant="outline-primary"
                  onClick={() => navigate("/post-case")}
                  // onClick={() => setActiveStep((prev) => prev - 1)}
                >
                  Cancel
                </CustomButton>
              </NavLink>

              <CustomButton
                //   loading={loading}
                onClick={() => formikStep3.handleSubmit()}
              >
                Save & Finish
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Step3;
