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

  nameChangeHandler = (event) => {
    this.setState({isSubmitted: false});
    this.setState({name: event.target.value});
  }
  colourChangeHandler = (event) => {
    this.setState({isSubmitted: false});
    this.setState({favColour: event.target.value});
  }
  buttonHandler = (event) => {
    this.setState({isSubmitted: true});
  }

  render() {
    let displayText;
    if (this.state.isSubmitted) {
      displayText = <h1>My Name is {this.state.name}, and my favourite colour is {this.state.favColour}.</h1>;
    } else {
      displayText = <h1>Press the Button!</h1>;
    }
    return (
      <div>
        <h1>Hello World!</h1>
        <p>~~~~~~~~~~~~</p>
        <p>Enter your name:</p>
        <input id='name' type='text' onChange={this.nameChangeHandler}/>
        <p>Enter your favourite colour:</p>
        <input id='colour' type='text' onChange={this.colourChangeHandler}/>
        <button id='submit' onClick={this.buttonHandler}>Click to show Text</button>
        <p>~~~~~~~~~~~~</p>
        {displayText}
      </div>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('example'));