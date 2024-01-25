import * as yup from 'yup';
import { emailRegExp, phoneRegExp } from '../constants/regex';

export const emailSchema = yup
  .string()
  .trim()
  .required('Email is required')
  .email('Enter a valid email')
  .matches(emailRegExp, 'Enter a valid email');

export const phoneSchema = yup
  .string()
  .trim()
  .required('Phone Number is required')
  .matches(phoneRegExp, 'Enter a valid phone number')
  .min(6, 'Enter a valid phone number')
  .max(16, 'Enter a valid phone number');

// const passwordSchema = yup
//   .string()
//   .min(6, "Minimum 6 characters required")
//   .trim()
//   .required("Password is required");

// const confirmPasswordSchema = (reference: string) =>
//   yup
//     .string()
//     .oneOf([yup.ref(reference), null], "Please match it with above password")
//     .required("Confirm password is required");

export const nameSchema = (message?: string) =>
  yup
    .string()
    .trim()
    .max(24, 'Maximum 24 character')
    .required(message ?? 'This field is required');

export const dateSchema = (message?: string) =>
  yup.date().required(message ?? 'This field is required');


  export const numberSchema = (message?: string) =>
  yup.number().required(message ?? 'This field is required')
  .integer('Age must be an integer')
  .min(12, 'Value must be at least 12')
  .max(120, 'Value must be at most 120');

export const yesNoSelect = (message?: string) =>
  yup
    .string()
    .trim()
    .required(message ?? 'This field is required');

export const contactUsValidationScheme = yup.object().shape({
  first_name: nameSchema('First Name is required'),
  last_name: nameSchema('Last name is required'),
  email: emailSchema,
  phone: phoneSchema,
  message: yup
    .string()
    .trim()
    .max(800, 'Maximum 800 character allowed')
    .required('Message is required'),
  // accept_terms: yup
  //   .boolean()
  //   .required('You Must accept policies')
  //   .oneOf([true], 'You Must accept policies'),
});

export const postCaseValidationStep1 = yup.object().shape({
  full_name: nameSchema('Full Name is required'),
  phone_number: phoneSchema,
  email_address: emailSchema,
  date_birth: numberSchema(),
  date_accident: dateSchema(),
  location_accident: nameSchema('Accident location is required'),
  description_accident: yup
    .string()
    .trim()
    .max(800, 'Maximum 800 character allowed')
    .required('Description is required'),
  weather_condition: yup
    .string()
    .trim()
    .max(800, 'Maximum 800 character allowed'),
});

export const postCaseValidationStep2 = yup.object().shape({
  injury_description: yup
    .string()
    .trim()
    .max(800, 'Maximum 800 character allowed')
    .required('Description is required'),
  medical_attention: yesNoSelect(),
  first_medical: nameSchema(),
  damage_property: yup.string().trim(),
  seat_belt: yesNoSelect(),
  damage_description: yup
    .string()
    .trim()
    .max(800, 'Maximum 800 character allowed')
    .required('Description is required'),
  insurance_provider: yup.string().trim(),
  policy_number: yup.number().typeError('Enter a valid policy number'),
});

export const postCaseValidationStep3 = yup.object().shape({
  company_name: yup.string().trim().max(24, 'Maximum 24 character'),
  policy_number: yup.number().typeError('Enter a valid policy number'),
  accident_report: yesNoSelect(),
});
