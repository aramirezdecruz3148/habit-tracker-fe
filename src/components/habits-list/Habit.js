import React from 'react';
import PropTypes from 'prop-types';

function Habit({ habit, description }) {
  return (
    <section>
      <h3>{habit}</h3>
      <h5>{description}</h5>
    </section>
  );
}

Habit.propTypes = {
  habit: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Habit;
