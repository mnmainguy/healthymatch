import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

export class Navbar extends React.Component {

  static propTypes = {
    brandImage: PropTypes.node.isRequired,
  };

  render() {
    const _className = classNames("navbar neal-navbar  navbar-expand-lg fixed-top", this.props.className);
    return (
      <header className="neal-navbar-wrapper">
        <nav className={_className}>
          <div className="container">
            <a className="navbar-brand hidden-sm-down" href="#">
              <img className="d-inline-block align-top" src={this.props.brandImage} width="240" height="40" alt=""></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#mobile-nav" aria-controls="mobile-nav" 
              aria-expanded="false" aria-label="Toggle navigation">
              &#9776;
            </button>
            <div className="collapse navbar-collapse neal-mobile-nav justify-content-end" id="mobile-nav">
              <ul className="nav navbar-nav ml-auto">
                {this.props.children}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export class NavItem extends React.Component {

  static propTypes = {
    dropdown: PropTypes.bool,
  };

  render() {
    const _className = classNames("nav-item", { dropdown: this.props.dropdown }, this.props.className);
    return (
      <li {...this.props} className={_className}>
        { this.props.children }
      </li>
    );
  }
}

export class DropdownToggle extends React.Component {
  render() {
    return (
      <a className="nav-link" data-toggle="dropdown" role="button" {... this.props}>
        {this.props.children}
      </a>);
  }
}

export class DropdownMenu extends React.Component {
  render() {
    return <div className="dropdown-menu" {... this.props}>{this.props.children}</div>;
  }
}
