import { FormikProps } from "formik";
import { Form } from "react-bootstrap";
import Select, { GroupBase, OptionsOrGroups, Props } from "react-select";

interface IProps extends Props {
  name: string;
  label?: string;
  options: OptionsOrGroups<
    { label: any; value: any },
    GroupBase<{ label: any; value: any }>
  >;
  formik?: FormikProps<any>;
}

const ReactSelectField: React.FC<IProps> = ({
  name,
  formik,
  options,
  label,
  ...rest
}) => {
  const formikValue = formik?.values[name];
  const formikError = formik?.touched[name] ? formik?.errors[name] : null;

  return (
    <Form.Group
      className={`react_select_wrap ${rest.className}`}
      controlId={name}
    >
      {label ? <Form.Label>{label}</Form.Label> : null}
      <Select
        menuIsOpen
        components={{
          IndicatorSeparator: () => null,
        }}
        options={options}
        classNamePrefix="react_select"
        onChange={
          formik
            ? (e: any) => formik?.setFieldValue(name, e?.value ?? "")
            : () => {}
        }
        {...rest}
        value={formikValue}
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

export default ReactSelectField;
