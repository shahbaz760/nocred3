import { useFormik } from "formik";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { postCaseFormTemplate } from "../../../components/emailTemplates";
import PostCaseLayout from "../../../layouts/postCase/postCaseLayout";
import { sendGridSubmitCall } from "../../../services";
import CustomButton from "../../../theme/button";
import InputField from "../../../theme/input";
import SelectField from "../../../theme/select_input";
import { postCaseValidationStep3 } from "../../../validations/validations";
import styles from "../postCase.module.scss";

const Step3 = () => {
  const [loading, setLoading] = useState(false);
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
        window.scrollTo(0, 0);
        navigate("/thank-you");
      } else {
        toast.error("Something went wrong, Please try after sometime");
      }
    } catch (error) {
      toast.error("Something went wrong, Please try after sometime");
    }
    setLoading(false);
  };

  return (
    <PostCaseLayout activeStep={3} state={state}>
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
              onClick={() => navigate("/post-case", { replace: true })}
            >
              Cancel
            </CustomButton>
          </NavLink>

          <CustomButton
            loading={loading}
            onClick={() => formikStep3.handleSubmit()}
          >
            Save & Finish
          </CustomButton>
        </div>
      </div>
    </PostCaseLayout>
  );
};

export default Step3;
