import React from "react";
import Prism from "../vendor/prism.js";
import PropTypes from 'prop-types';

export class Code extends React.Component {

  static propProps = {
    lang: PropTypes.string.isRequired,
    block: PropTypes.bool,
  };

  render() {
    const langClass = `language-${this.props.lang}`;
    const highlightedCode = Prism.highlight(this.props.children, Prism.languages[this.props.lang]);
    const codeElement = <code className={langClass} dangerouslySetInnerHTML={{ __html: highlightedCode }}/>;
    if (this.props.block) {
      return (
        <pre className={langClass}>{codeElement}</pre>
      );
    }
    return codeElement;
  }
}
