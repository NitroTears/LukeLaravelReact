import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      favColour: '', 
      isSubmitted: false,
    };
  }

  returnResultText () {
    if (this.state.isSubmitted) {
      
    } else {
      return null;
    }
  }
  nameChangeHandler = (event) => {
    this.setState({name: event.target.value});
  }
  colourChangeHandler = (event) => {
    this.setState({favColour: event.target.value});
  }
  submitHandler = (event) => {
    this.setState({isSubmitted: true});
  }
  render() {
    let displayText;
    if (this.state.isSubmitted) {
      displayText = <h1>My Name is {this.state.name}, and my favourite colour is: {this.state.favColour}</h1>
    } else {
      displayText = null;
    }
    return (
      <form>
      <h1>Hello World!</h1>
      <p>Enter your name:</p>
      <input id='name' type='text'onChange={this.nameChangeHandler}/>
      <p>Enter your favourite colour:</p>
      <input id='colour' type='text' onChange={this.colourChangeHandler}/>
      <button id='submit' onClick={this.submitHandler}>Submit and Show Text</button>
      <p>~~~~~~~~~~~~</p>
      {displayText}
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('example'));