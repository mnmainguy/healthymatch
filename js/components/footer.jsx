import React from "react";
import { Container, Row, Col } from "../helpers/bootstrap.jsx";
import Navbar from "./navbar.jsx";
import PropTypes from 'prop-types';

export class Footer extends React.Component {

  static propTypes = {
    brandName: PropTypes.node.isRequired,
    facebookUrl: PropTypes.string,
    twitterUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    email: PropTypes.node,
    address: PropTypes.node,
  };

  render() {
    return (
      <footer className="neal-footer navbar">
        <Container>
          <Row>
              <p className="neal-footer-copyright">
                © {new Date().getFullYear()},&nbsp;
              </p>
              {this.props.address}
          </Row>
          <Row>
              {this.renderSocialIcons()}
          </Row>
        </Container>
      </footer>
    );
  }

  renderSocialIcons() {
    return (
      <ul className="nav navbar-nav neal-footer-social ">
      <Col>
        { this.renderSocialIcon("fa-twitter", this.props.twitterUrl) }
      </Col>
      <Col>
        { this.renderSocialIcon("fa-facebook", this.props.facebookUrl) }
      </Col>
      <Col>
        { this.renderSocialIcon("fa-instagram", this.props.instagramUrl) }
      </Col>
      </ul>
    );
  }


  renderSocialIcon(iconClass, url) {
    if (!url || !iconClass) { return null; }
    return (
     <li className={`nav-item neal-footer-social-icon ${iconClass.replace("fa-", "")}`}>
        <a href={url} target="_blank">
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className={`fa ${iconClass} fa-stack-1x fa-inverse`}></i>
          </span>
        </a>
      </li>
    );
  }
}

export class FooterAddress extends React.Component {

  render() {
    return (
      <div className="neal-footer-address">
        { this.props.children }
      </div>
    );
  }

}
