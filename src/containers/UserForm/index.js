import React from 'react';
import { Formik, Form, Field } from 'formik';

// Components
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import { InputField } from '../../components/Input';

// Utils & Assets
import { setCookie } from '../../utils/cookieUtils';
import { validationSchema } from './UserForm.validationSchema';

const initialValues = {
  githubUser: '',
  name: '',
  lastName: '',
  identification: '',
  birthDate: '',
  email: ''
};

export function UserForm({ onUpdateUser }) {
  const handleSubmit = (values) => {
    setCookie(values);
    onUpdateUser(values);
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      <Form noValidate>
        <>
        <Title>Register</Title>
          <div className="row mb-3">
            <div className="col-12 col-md">
              <Field name="githubUser" component={InputField} label="Github user" />
            </div>
            <div className="col-12 col-md">
              <Field name="name" component={InputField} label="Name" />
            </div>
            <div className="col-12 col-md">
              <Field name="lastName" component={InputField} label="Last name" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md">
              <Field name="identification" component={InputField} label="Identification number" />
            </div>
            <div className="col-12 col-md">
              <Field name="birthDate" component={InputField} label="Birth date" type="date" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md">
              <Field name="email" component={InputField} label="E-mail" type="email" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md d-flex justify-content-end">
              <Button type="submit">
                Save
              </Button>
            </div>
          </div>
        </>
      </Form>
    </Formik>
  );
}