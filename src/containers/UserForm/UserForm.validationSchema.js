import * as yup from 'yup';


export const validationSchema = yup.object().shape({
  githubUser: yup.string()
    .min(1, 'Github username is too short (minimum is 1 characters)')
    .max(39, 'Github username is too long (maximum is 39 characters)')
    .required('Github username is required')
    .matches(/^[a-z0-9][a-z0-9_-]{0,38}[a-z0-9]$/i, 'Github username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.'),
  name: yup.string()
    .min(3, 'Name is too short (minimum is 3 characters)')
    .required('Name is required'),
  lastName: yup.string()
    .min(3, 'Last name is too short (minimum is 3 characters)')
    .required('Last name is required'),
  identification: yup.number()
    .integer('Identification number must be a numeric value')
    .positive('Identification number is not valid')
    .required('Identification number is required'),
  birthDate: yup.date().required('Birth date is not valid'),
  email: yup.string()
    .email('Email must be a valid email')
    .min(3, 'Email is too short (minimum is 3 characters)')
    .required('Email is required'),
});