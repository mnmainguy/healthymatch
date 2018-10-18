import React from "react";
import Section from "./section.jsx";
import { Col } from "../helpers/bootstrap.jsx";
import PropTypes from "prop-types";
import Form from "react-bootstrap/lib/Form"
import Row from "react-bootstrap/lib/Row"

export class SignupInline extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = { services: null, zip: null };

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) { this.props.onSubmit(this.state); }
  };

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length === 5) return 'success';
  //   else return 'error';
  // };

  // FieldGroup({ id, label, help, ...props }) {
  //   return (
  //     <FormGroup controlId={id}>
  //       <ControlLabel>{label}</ControlLabel>
  //       <FormControl {...props} />
  //       {help && <HelpBlock>{help}</HelpBlock>}
  //     </FormGroup>
  //   );
  // };
  

  render() {
    return ( 
        <Form inline className="neal-signup-inline">
            <Form.Group md="6" controlId="services">
              <Form.Label>Select a Service</Form.Label>
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
            <Form.Group md="3" controlId="zip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="3" controlId="submit">
              <button type="submit" className="btn btn-primary btn-ghost text-center">Compare prices</button>
            </Form.Group>
        </Form>
    );
  }
}
