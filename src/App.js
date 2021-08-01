import './App.css';
import React, { Component } from 'react';
import FeedbackCounter from './Components/FeedbackCounter/FeedbackCounter';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  handleClick = (e) => {
    this.setState((prevState) => ({
      const {name}=e.target
      [name]: prevState[name] + 1,
  };
  render() {
    return (
      <>
        <div className="App">
          <FeedbackCounter></FeedbackCounter>
        </div>
      </>
    );
  }
}

export default App;

//         <Section title="">
//             <Statistics good={ } neutral={ } bad={ } total={ } positivePercentage={ }></Statistics>
//             <FeedbackOptions options={ } onLeaveFeedback={ }></FeedbackOptions>
// </Section>
