import React from "react";
import Section from "./section.jsx";
import { Col } from "../helpers/bootstrap.jsx";
import PropTypes from "prop-types";
import Form from "react-bootstrap/lib/Form"
import Row from "react-bootstrap/lib/Row"
import { Formik } from "formik"
import * as Yup from 'yup';

const zip = new RegExp("^[0-9]{5}(?:-[0-9]{4})?$");

const schema = Yup.object().shape({
  services: Yup.string()
    .required()
    .test('service-test', 'Please select a service', 
    function(value) {
        value === "select"
    }),
  zip: Yup.string()
    .matches(zip)
});

export class SignupInline extends React.Component {

  render() {
    return ( 
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{ services: '', zip: '' }}
      >
          {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <Form className="neal-signup-inline" onSubmit={handleSubmit}>
              <Row>
                <Form.Group as={Col} controlId="services"
                  onChange={handleChange}
                  isInvalid={!!errors.services && touched.services}
                >
                  <Form.Label>Select a Service:</Form.Label>
                  <Form.Control as="select">
                    <option value="select">Select a service...</option>
                    <option value="XRAY">X-Ray</option>
                    <option value="MMG">Mammography</option>
                    <option value="BDS">Bone Density Study</option>
                    <option value="MRI">Magnetic Resonance Imaging (MRI)</option>
                    <option value="CT">Computer Axial Tomography (CT or CAT Scan)</option>
                    <option value="CBC">Complete Blood Count (CBC)</option>
                    <option value="PSA">Prostate Specific Antigen (PSA Test)</option>
                    <option value="PT">Prothrombin Time (PT)</option>
                    <option value="ECG">Echocardiography</option>
                    <option value="EKG">Electrocardiogram (EKG)</option>
                    <option value="CSY">Colonoscopy</option>
                  </Form.Control>
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
                    disabled={isSubmitting}
                  >
                      Compare prices
                  </button>
                </Form.Group>
              </Row>
            </Form>
          );
        }}
      </Formik>
    )
  }
}
