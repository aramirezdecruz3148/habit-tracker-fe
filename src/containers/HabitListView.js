import { connect } from 'react-redux';
import React, { Component } from 'react';
import Habits from '../components/habits-list/Habits';
import { getHabits } from '../actions/habitsActions';
import PropTypes from 'prop-types';
import { getListOfHabits } from '../selectors/habitsSelectors';

class HabitListView extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired
  }
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { list } = this.props;
    return (
      <Habits list={list} />
    );
  }
}

const mapStateToProps = state => ({
  list: getListOfHabits(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getHabits());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitListView);
