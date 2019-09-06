import React from 'react';
import PropTypes from 'prop-types';
import Habit from './Habit';

function Habits({ list }) {
  const habitsList = list.map(({ habit, description }) => (
    <li key={habit}>
      <Habit habit={habit} description={description} />
    </li>
  ));

  return (
    <ul>
      {habitsList}
    </ul>
  );
} 

Habits.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    habit: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default Habits;
