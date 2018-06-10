/**
*
* Navigation
*
*/

import React from 'react';
import PropTypes from 'prop-types';


import styles from './styles.css';

function Navigation({ topics }) {
  return (
    <div className={styles.navigation}>
      This  component has { topics.length } topics
    </div>
  );
}

Navigation.propTypes = {
  topics: PropTypes.arrayOf(
    React.PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
