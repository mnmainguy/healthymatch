import React from "react";
import { Container, Row, Col } from "../helpers/bootstrap.jsx";
import classNames from "classnames";
import PropTypes from 'prop-types';

export class Hero extends React.Component {

  static propTypes = {
    backgroundImage: PropTypes.string,
  };

  render() {
    const _style = {};
    if (this.props.backgroundImage) {
      _style.backgroundImage = `url(${this.props.backgroundImage})`;
    }
    const _className = classNames("neal-hero jumbotron jumbotron-fluid", this.props.className);
    return (
      <div {... this.props} className={_className} style={_style}>
        <Container>
          { this.props.children }
        </Container>
      </div>
    );
  }
}
