import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Column, Cell } from 'fixed-data-table';

import { fetchAdObjects } from '../actions/index';

class AdObjectList extends Component {
  render() {
    return (
      <Column
        header={<Cell>Hello</Cell>}
        cell={<Cell>World</Cell>}
        width={200}
      />
    );
  } // this will not render into the fixed-data-table when imported!!
}

function mapStateToProps(state) {
  return {
    ads: state.adObjects.ads
  };
}

export default connect(mapStateToProps, { fetchAdObjects })(AdObjectList);
