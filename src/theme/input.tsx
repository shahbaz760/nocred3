import { FormikProps } from "formik";
import { Form, FormControlProps } from "react-bootstrap";

interface IProps extends FormControlProps {
  rows?: number;
  name: string;
  label?: string;
  formik?: FormikProps<any>;
  isRequired?: boolean;
}

const InputField: React.FC<
  IProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ rows, name, formik, label, isRequired, ...rest }) => {
  const formikValue = formik?.values[name];
  const formikError = formik?.touched[name] ? formik?.errors[name] : null;

  return (
    <Form.Group className={`field_wrap ${rest.className}`} controlId={name}>
      {label ? (
        <Form.Label id={isRequired ? "requiredLabel" : ""}>{label}</Form.Label>
      ) : null}
      <Form.Control
        type="text"
        value={formikValue}
        rows={rows}
        onChange={formik ? (e) => formik?.handleChange(e) : () => {}}
        {...rest}
        className={`${formikError ? "has_error" : ""}`}
      />
      {formikError ? (
        <span className="error">
          {typeof formikError === "string" ? formikError : ""}
        </span>
      ) : null}
    </Form.Group>
  );
};

export default InputField;
