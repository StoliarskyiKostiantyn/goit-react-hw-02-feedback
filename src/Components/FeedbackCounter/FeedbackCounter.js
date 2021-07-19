import { directive } from "@babel/types";
import React, { Component } from "react";

class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodClick = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutralClick = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBadClick = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {return  (this.state.good/(this.state.good + this.state.neutral + this.state.bad))*100;};
  render() {
    return (
      <>
        <div className="button_block">
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleGoodClick}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutralClick}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBadClick}>
            Bad
          </button>
        </div>

        {this.countTotalFeedback()===0 ? <p>No feedback given</p> : <div className="statistic_block">
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {Number.parseInt(this.countPositiveFeedbackPercentage() )}%</p>
        </div>}
        
      </>
    );
  }
}

export default FeedbackCounter;
