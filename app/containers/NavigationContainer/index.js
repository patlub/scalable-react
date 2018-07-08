/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import { requestTopics, selecttopic, toggleDrawer } from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestTopics: PropTypes.func.isRequired,
    selectTopic: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.requestTopics();
  }
  render() {
    return (
      <Navigation {...this.props} />
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: topic => dispatch(selecttopic(topic)),
    toggleDrawer: () => dispatch(toggleDrawer()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
