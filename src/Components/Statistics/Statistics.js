import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
function Statistics({ state, total, positivePercentage }) {
  return (
    <>
      {total() ? (
        <>
          {Object.keys(state).map(key => (
            <p key={key}>
              {key}: {state[key]}.
            </p>
          ))}
          <p>Total: {total()}</p>
          <p>Positive Percentage:{positivePercentage()}</p>
        </>
      ) : (
        <Notification></Notification>
      )}
    </>
  );
}

Statistics.propTypes = {
  positivePercentage: PropTypes.func,
  total: PropTypes.func,
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};

export default Statistics;
