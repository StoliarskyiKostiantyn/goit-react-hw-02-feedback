import React from 'react';
import PropTypes from 'prop-types';
function FeedbackOptions({ state, onClick }) {
  return (
    <>
      {Object.keys(state).map(key => (
        <button key={key} type="button" name={key} onClick={onClick}>
          {key}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};

export default FeedbackOptions;
