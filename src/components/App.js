import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import { withSession } from '../Auth0Provider';
import HabitViewWrapper from './wrapper-habit-view/HabitViewWrapper';
import Header from './Header';

export default function App() {
  return  (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={withSession(HabitViewWrapper)} />
        </Switch>
      </Router>
    </>
  );
}
