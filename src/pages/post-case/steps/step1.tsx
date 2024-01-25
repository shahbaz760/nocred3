import { FormikProps } from "formik";
import CustomButton from "../../../theme/button";
import DateField from "../../../theme/date_input";
import InputField from "../../../theme/input";
import styles from "../postCase.module.scss";
import SelectField from "../../../theme/select_input";

interface IProps {
  formik: FormikProps<any>;
}

const PostCaseStep1: React.FC<IProps> = ({ formik }) => {
  return (
    <div className={styles.form_card}>
      <h4>Client and Accident Details</h4>
      <div className={styles.form_section}>
        <h5>Client's Personal Details</h5>
        <div className={styles.fields_wrapper}>
          <div className={styles.md6}>
            <InputField
              label="Full name"
              formik={formik}
              placeholder="Name"
              name="full_name"
              isRequired
            />
          </div>
          <div className={styles.md6}>
            <InputField
              label="Phone number"
              formik={formik}
              placeholder="Phone"
              name="phone_number"
              isRequired
            />
          </div>
          <div className={styles.md6}>
            <InputField
              label="Email address"
              formik={formik}
              placeholder="Email"
              name="email_address"
              isRequired
            />
          </div>
          <div className={styles.md6}>
            <div className={styles.field_wrap}>
              <label htmlFor="age">Age</label>
              <br />

              <SelectField
                formik={formik}
                name="age"
                optionList={Array.from(
                  { length: 109 },
                  (_, index) => index + 12
                ).map((item) => ({ label: item, value: item }))}
                isRequired
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.form_section}>
        <h5>Accident Information</h5>
        <div className={styles.fields_wrapper}>
          <div className={styles.md6}>
            <DateField
              formik={formik}
              label="Date of accident"
              name="date_accident"
              selected={formik?.values?.date_accident}
              onChange={(date) => formik.setFieldValue("date_accident", date)}
              placeholderText="Select date"
            />
          </div>
          <div className={styles.md6}>
            <InputField
              label="Location of accident"
              formik={formik}
              placeholder="Freeway"
              name="location_accident"
            />
          </div>
          <div>
            <InputField
              label="Brief description of the accident"
              as="textarea"
              rows={6}
              formik={formik}
              placeholder="Enter a description..."
              name="description_accident"
              isRequired
            />
          </div>
          <div>
            <InputField
              label="Weather and road conditions (if relevant)"
              as="textarea"
              rows={6}
              formik={formik}
              placeholder="Enter a description..."
              name="weather_condition"
            />
          </div>
        </div>
      </div>
      <div className={styles.submit_btn_wrap}>
        <CustomButton
          variant="outline-primary"
          // onClick={() => setActiveStep((prev) => prev - 1)}
        >
          Cancel
        </CustomButton>
        <CustomButton onClick={() => formik.handleSubmit()}>
          Save & Next
        </CustomButton>
      </div>
    </div>
  );
};

export default PostCaseStep1;
