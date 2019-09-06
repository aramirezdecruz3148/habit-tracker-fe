import React from 'react';
import HabitListView from '../../containers/HabitListView';
import CreateHabit from '../../containers/CreateHabit';

export default function HabitViewWrapper() {
  return (
    <>
      <CreateHabit />
      <HabitListView />
    </>
  );
}
