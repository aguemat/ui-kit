/**
 * @class ExampleComponent
 */

import * as React from "react";

export default class ExampleComponent extends React.Component {
  render() {
    const { text } = this.props;

    return <div>Example Component tsx: {text}</div>;
  }
}
