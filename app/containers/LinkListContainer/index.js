/*
 *
 * LinkListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectLinkListContainer from './selectors';
import LinkList from '../../components/LinkList';
import { requestLinks } from './actions';


export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    topicName: PropTypes.string.isRequired,
    requestLinks: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.requestLinks(this.props.topicName);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.topicName !== this.props.topicName) {
      this.props.requestLinks(nextProps.topicName);
    }
  }
  render() {
    return (
      <LinkList {...this.props} />
    );
  }
}

const mapStateToProps = selectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: (topicName) => dispatch(requestLinks(topicName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
