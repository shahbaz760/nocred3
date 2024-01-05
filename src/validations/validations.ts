import * as yup from 'yup';
import { emailRegExp, phoneRegExp } from '../constants/regex';

export const emailSchema = yup
  .string()
  .trim()
  .required('Email is required')
  .email('Must be valid email syntax')
  .matches(emailRegExp, 'Must be valid email syntax');

export const phoneSchema = yup
  .string()
  .trim()
  .required('Phone number is required')
  .matches(phoneRegExp, 'Must be valid phone number')
  .min(6, 'Minimum 6 number allowed')
  .max(16, 'Maximum 16 number allowed');

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
    .max(30, 'Maximum 30 character')
    .required(message ?? 'This field is required');

export const dateSchema = (message?: string) =>
  yup
    .string()
    .trim()
    .max(20, 'Maximum 20 character')
    .required(message ?? 'This field is required');

export const yesNoSelect = (message?: string) =>
  yup
    .string()
    .trim()
    .required(message ?? 'This field is required');

export const contactUsValidationScheme = yup.object().shape({
  first_name: nameSchema('First name is required'),
  last_name: nameSchema('Last name is required'),
  email: emailSchema,
  phone: phoneSchema,
  message: yup
    .string()
    .trim()
    .max(800, 'Maximum 800 character allowed')
    .required('Message is required'),
});

export const postCaseValidationStep1 = yup.object().shape({
  full_name: nameSchema('First name is required'),
  phone_number: phoneSchema,
  email_address: emailSchema,
  date_birth: dateSchema(),
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
  policy_number: yup
    .number()
    .typeError('Only number allowed')
    .required('This field is required'),
});

export const postCaseValidationStep3 = yup.object().shape({
  company_name: nameSchema(),
  policy_number: yup
    .number()
    .typeError('Only number allowed')
    .required('This field is required'),
  accident_report: yesNoSelect(),
});
