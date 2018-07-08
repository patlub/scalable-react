/**
*
* AppBar
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';


import styles from './styles.css';

function AppBar({ toggleDrawer }) {
  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton}>
        <FontAwesome
          name="bars"
          className={styles.icon}
          onClick={toggleDrawer}
        />
      </div>
      <div className={styles.heading}>
        Coder daily
      </div>
      <div className={styles.linkContainer}>
        log in
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppBar;
