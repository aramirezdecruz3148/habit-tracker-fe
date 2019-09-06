import { postHabit, getUserHabits } from '../services/habitsApi';

export const CREATE_HABIT = 'CREATE_HABIT';
export const createHabit = (habit, description) => ({
  type: CREATE_HABIT,
  payload: postHabit(habit, description)
});

export const GET_HABITS = 'GET_HABITS';
export const getHabits = () => ({
  type: GET_HABITS,
  payload: getUserHabits()
});
