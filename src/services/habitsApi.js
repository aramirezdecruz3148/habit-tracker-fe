let token = null;
export const setToken = newToken => {
  token = newToken;
};

export const postHabit = (habit, description) => {
  return fetch(`${process.env.API_URL}/api/v1/habits`, {
    method: 'POST',
    body: JSON.stringify({ habit, description }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    if(!res.ok) throw 'Could not create a Habit.';

    return res.json();
  });
};

export const getUserHabits = () => {
  return fetch(`${process.env.API_URL}/api/v1/habits`, {

  }).then(res => {
    if(!res.ok) throw 'Could not get list of Habits.';

    return res.json();
  });
};
