import React from "react";
import Section from "./section.jsx";
import { Col } from "../helpers/bootstrap.jsx";
import PropTypes from "prop-types";
import Form from "react-bootstrap/lib/Form"
import Row from "react-bootstrap/lib/Row"
import { Formik } from "formik"
import * as Yup from 'yup';
import { SignupModal } from "./signup-modal.jsx";

const zip = new RegExp("^[0-9]{5}(?:-[0-9]{4})?$");

const schema = Yup.object().shape({
  services: Yup.string()
    .required()
    .test('service-test', 'Please select a service', 
      val => val != "default"),
  zip: Yup.string()
    .matches(zip)
});

const SignupForm = () => (
  <div>
    <Formik
        validationSchema={schema}
        hanfleSubmit={SignupModal}
        initialValues={{ services: '', zip: '' }}
        onSubmit={(values, { setSubmitting,resetForm }) => {
          setTimeout(() => {
            //alert(JSON.stringify(values, null, 2));
            <ModalToggle/>
            setSubmitting(false); 
          }, 400);
      }}
    >
      {({
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        isInvalid,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
      }) => (
        <Form className="neal-signup-inline" onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} controlId="services">
              <Form.Label>Select a Service:</Form.Label>
              <Form.Control as="select"
                onChange={handleChange}
                isInvalid={!!errors.services && touched.services}
                required
              >
                <option value="default">Select a service...</option>
                <option value="IMAGE">Imaging (X-Ray, MRI, CT)</option>
                <option value="MMG">Mammography</option>
                <option value="CSY">Colonoscopy</option>
                <option value="ECG">Electrocardiogram</option>
                <option value="LAB">Blood labs (CBC, PSA, PT)</option>
                <option value="URGNT">Urgent Care</option>
                <option value="PT">Physical Therapy</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a service.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="zip">
              <Form.Label>Zip Code:</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Zip" 
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip && touched.zip}
                required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} className="btn-group-vertical col-sm-4 col-lg-3 col-xs-8 col-xs-offset-2 col-sm-offset-0 text-center" controlId="submit">
              <button 
                type="submit" 
                className="btn btn-primary text-center"
                disabled={isSubmitting && isInvalid}
                data-toggle="modal" 
                data-target="#signup-modal"
              >
                  Compare prices
              </button>
            </Form.Group>
          </Row>
        </Form>
      )}
    </Formik>
    <SignupModal modalId="signup-modal" />
  </div>
);

function ModalToggle() {
  $('#signup-modal').bootstrapToggle();
}

export class SignupInline extends React.Component {

  render() {
    return (<SignupForm/>)
  }
}
  
