import React, { Component } from 'react';
import Forms from './components/Forms/Forms'


/***
 *    1) Use defaultProps to set the intital state of the Application.
 *       defaultProps should have a property called casing and value of UpperCase or LowerCase to determine the state
 *       of userInput. For example, setting defaultProps to LowerCase results in the user's input to be lower case.
 *
 *
 *
 *   2) Import the Forms component from the component directory and then pass the event handlers handleSubmission and handleOnChange functions
 *      to the child component Forms. Use event.preventDefault  to prevent the form from submitting in the handleSubmission function.
 *      In handleOnChange use defaultProps to determine the casing that will be rendered to the screen.
 *
 *
 *
 * */

class App extends Component {
  state = {
    userInput: ""
  };

  handleSubmission = (event) => {
    event.preventDefault();
    console.log(this.state.userInput)
  };

  handleOnChange = (event) => {
    const {casing} = this.props;
    this.setState({
      userInput:casing === 'lowercase' ? event.target.value.toLowerCase()
      : event.target.value.toUpperCase()
    })
  };

  render() {
    return (
    <div className="App">
    <Forms handleSubmission={this.handleSubmission} handleChange={this.handleOnChange} />
    </div>);
  }
}

App.defaultProps = {
  casing:'lowercase'
};

export default App;
