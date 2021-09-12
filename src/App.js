import './App.css';
import React, { Component } from 'react';
import Section from './Components/Section/Section';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    const total = stateValues.reduce((previous, current) => previous + current);
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = (good / total) * 100;

    if (!total) {
      return 0;
    }

    return percentage.toFixed();
  };
  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions state={this.state} onClick={this.handleClick} />
        </Section>
        <Section title="Statistics">
          <Statistics
            state={this.state}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        </Section>
      </>
    );
  }
}

export default App;
