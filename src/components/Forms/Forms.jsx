import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Forms extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmission}> 
          <textarea onChange={this.props.handleOnChange} value={this.props.userInput} type="text" />
          <button type="submit">Click Me</button>
        </form>
      </div>
    );
  }
}

export default Forms;
