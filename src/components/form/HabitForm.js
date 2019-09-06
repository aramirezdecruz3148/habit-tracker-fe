import React, { useState } from 'react';
import PropTypes from 'prop-types';

function HabitForm({ handleSubmit }) {
  const [habit, setHabit] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(habit, description);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='habit' value={habit} onChange={({ target }) => setHabit(target.value)} />
      <input type='text' name='description' value={description} onChange={({ target }) => setDescription(target.value)} />
      <button>Create Habit</button>
    </form>
  );
}

HabitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default HabitForm;
