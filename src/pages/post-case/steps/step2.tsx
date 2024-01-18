import { FormikProps } from 'formik';
import CustomButton from '../../../theme/button';
import InputField from '../../../theme/input';
import SelectField from '../../../theme/select_input';
import styles from '../postCase.module.scss';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  formik: FormikProps<any>;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

const PostCaseStep2: React.FC<IProps> = ({ formik, setActiveStep }) => {
  return (
    <div className={styles.form_card}>
      <h4>Injuries and Damage</h4>
      <div className={styles.form_section}>
        <h5>Injuries and Immediate Medical Attention</h5>
        <div className={styles.fields_wrapper}>
          <div>
            <InputField
              label='Describe the injuries you sustained'
              as='textarea'
              rows={6}
              formik={formik}
              placeholder='Enter a description...'
              name='injury_description'
            />
          </div>
          <div>
            <SelectField
              label='Did you seek medical attention'
              formik={formik}
              name='medical_attention'
              optionList={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
            />
          </div>
          <div>
            <InputField
              label='Location of first medical treatment'
              formik={formik}
              placeholder='US'
              name='first_medical'
            />
          </div>
          <div>
            <SelectField
              label='Vehicle and property damage (if applicable)'
              formik={formik}
              name='damage_property'
              optionList={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
            />
          </div>
          <div>
            <SelectField
              label='Seat Belt on'
              formik={formik}
              name='seat_belt'
              optionList={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
            />
          </div>
          <div>
            <InputField
              label='Briefly describe the damage'
              as='textarea'
              rows={6}
              formik={formik}
              placeholder='Enter a description...'
              name='damage_description'
            />
          </div>
        </div>
      </div>
      <div className={styles.form_section}>
        <h5>Insurance information of the client</h5>
        <div className={styles.fields_wrapper}>
          <div>
            <InputField
              label='Auto Insurance provider (if applicable)'
              formik={formik}
              placeholder='Auto insurance'
              name='insurance_provider'
            />
          </div>
          <div>
            <InputField
              label='Policy number (Optional)'
              formik={formik}
              placeholder='Number'
              name='policy_number'
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
        <CustomButton onClick={() => formik.handleSubmit()}>
          Save & Next
        </CustomButton>
      </div>
    </div>
  );
};

export default PostCaseStep2;
