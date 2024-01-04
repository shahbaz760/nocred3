import * as yup from 'yup';
import { emailRegExp, phoneRegExp } from '../constants/regex';

const emailSchema = yup
  .string()
  .trim()
  .required('Email is required')
  .email('Must be valid email syntax')
  .matches(emailRegExp, 'Must be valid email syntax');

const phoneSchema = yup
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

const nameSchema = (message: string) =>
  yup.string().trim().max(30, 'Maximum 30 character').required(message);

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
