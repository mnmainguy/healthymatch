import React from "react";
import { Col } from "../helpers/bootstrap.jsx";
import PropTypes from 'prop-types';

class ModalHeader extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: "Sign up",
  };

  render() {
    return (
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close</span>
        </button>
        <h4 className="modal-title lead">Close</h4>
      </div>
    );
  }
}

class ModalFooter extends React.Component {

  static propTypes = {
    buttonText: PropTypes.string.isRequired,
  };

  static defaultProps = {
    buttonText: "Join our wait list",
  };

  render() {
    return (
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary btn-block btn-ghost" data-dismiss="modal" aria-label="Close">{this.props.buttonText}</button>
      </div>
    );
  }
}


export class SignupModal extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    modalId: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    title: "Sign up",
    buttonText: "Join our wait list",
    modalId: "signup-modal",
  };

  state = { };

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) { this.props.onSubmit(this.state); }
  };

  renderBody = () => {
    if (this.props.children) return this.props.children;
    return (
      <div>
        <p> We're sorry, Health Unsurance is not yet available in your area. Please enter your email address below to be contacted when we launch in your city. </p>
        <SignupModal.Input type="email" required name="email" label="Email" placeholder="Email"/>
      </div>
    );
  };

  render() {
    const modalId = this.props.modalId;
    return (
      <div>
        <div className="modal fade neal-signup-modal" key={modalId} id={modalId}
        tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <ModalHeader title={this.props.title}/>
              <form className="form-vertical" onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <div className="modal-body">
                { this.renderBody() }
              </div>
              <ModalFooter buttonText={this.props.buttonText} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

SignupModal.Input = class extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  };

  static defaultProps = {
    type: "text",
  };

  render() {
    return (
      <div className="form-group neal-signup-modal-input">
        <label className="sr-only" htmlFor={this.props.name}>{this.props.label}</label>
        <input type="text" className="form-control" name={this.props.name}
          placeholder={this.props.placeholder} {... this.props}/>
      </div>
    );
  }
};
