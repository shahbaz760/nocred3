/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from 'formik';
import CustomButton from '../../../theme/button';
import InputField from '../../../theme/input';
import SelectField from '../../../theme/select_input';
import styles from '../postCase.module.scss';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  formik: FormikProps<any>;
  setActiveStep: Dispatch<SetStateAction<number>>;
  loading?: boolean;
}

const PostCaseStep3: React.FC<IProps> = ({
  formik,
  loading,
  setActiveStep,
}) => {
  return (
    <div className={styles.form_card}>
      <h4>Other Party's Details</h4>
      <div className={styles.form_section}>
        <h5>Other details</h5>
        <div className={styles.fields_wrapper}>
          <div>
            <InputField
              label='Insurance company name'
              formik={formik}
              placeholder='Name'
              name='company_name'
            />
          </div>
          <div>
            <InputField
              label='Policy number'
              formik={formik}
              placeholder='Number'
              name='policy_number'
            />
          </div>
        </div>
      </div>
      <div className={styles.form_section}>
        <h5>Accident Report</h5>
        <div className={styles.fields_wrapper}>
          <div>
            <SelectField
              label='Was an official accident report filled'
              formik={formik}
              name='accident_report'
              optionList={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className={styles.submit_btn_wrap}>
        <CustomButton
          variant='outline-primary'
          onClick={() => setActiveStep((prev) => prev - 1)}
        >
          Cancel
        </CustomButton>
        <CustomButton loading={loading} onClick={() => formik.handleSubmit()}>
          Save & Finish
        </CustomButton>
      </div>
    </div>
  );
};

export default PostCaseStep3;
