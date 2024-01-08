/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from 'formik';
import { Form } from 'react-bootstrap';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

interface IProps extends ReactDatePickerProps {
  name: string;
  label?: string;
  formik?: FormikProps<any>;
}

const DateField: React.FC<IProps> = ({ name, formik, label, ...rest }) => {
  const formikValue = formik?.values[name];
  const formikError = formik?.touched[name] ? formik?.errors[name] : null;

  return (
    <Form.Group className={`field_wrap ${rest.className}`}>
      {label ? <Form.Label>{label}</Form.Label> : null}
      <ReactDatePicker
        dateFormat='MMM dd, yyyy'
        selected={formikValue}
        customInput={<Form.Control type='text' className='form-control' />}
        {...rest}
        className={`${formikError ? 'has_error' : ''}`}
      />
      {formikError ? (
        <span className='error'>
          {typeof formikError === 'string' ? formikError : ''}
        </span>
      ) : null}
    </Form.Group>
  );
};

export default DateField;
