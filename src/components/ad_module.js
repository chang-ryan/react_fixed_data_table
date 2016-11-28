import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Column, Cell } from 'fixed-data-table';

import { fetchAdObjects } from '../actions/index';
import { fetchAdMetrics } from '../actions/index';

import AdObjectList from './ad_object_list';

class AdModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ads: [
        {
          "id": 1,
          "remote_id": "123",
          "name": "123",
          "status": "ACTIVE",
        },
        {
          "id": 2,
          "remote_id": "456",
          "name": "456",
          "status": "ACTIVE",
        },
        {
          "id": 3,
          "remote_id": "789",
          "name": "789",
          "status": "ACTIVE",
        },
        {
          "id": 4,
          "remote_id": "901",
          "name": "901",
          "status": "ACTIVE",
        }
      ],
      metrics: {
      "column_names": [
          "impressions",
          "reach",
          "frequency",
          "cpm",
          "spend",
          "ctr",
          "cost_per_inline_link_click",
          "actions:goal",
          "actions:link_click",
          "cost_per_action_type:cost_per_goal",
          "actions:offsite_conversion"
        ],
      "rows": [
          {
            "remote_id": "456",
            "impressions": "123",
            "reach": 123,
            "frequency": 1.0413449389302,
            "cpm": 12.30131445905,
            "spend": 182.49,
            "ctr": 0.87630603303,
            "cost_per_inline_link_click": 3.0415,
            "actions:goal": 3,
            "actions:link_click": 60,
            "cost_per_action_type:cost_per_goal": 60.83,
            "actions:offsite_conversion": 456
          },
          {
            "remote_id": "123",
            "impressions": "123",
            "reach": 123,
            "frequency": 1.0413449389302,
            "cpm": 12.30131445905,
            "spend": 182.49,
            "ctr": 0.87630603303,
            "cost_per_inline_link_click": 3.0415,
            "actions:goal": 3,
            "actions:link_click": 60,
            "cost_per_action_type:cost_per_goal": 60.83,
            "actions:offsite_conversion": 123
          },
          {
            "remote_id": "789",
            "impressions": "123",
            "reach": 123,
            "frequency": 1.0413449389302,
            "cpm": 12.30131445905,
            "spend": 182.49,
            "ctr": 0.87630603303,
            "cost_per_inline_link_click": 3.0415,
            "actions:goal": 3,
            "actions:link_click": 60,
            "cost_per_action_type:cost_per_goal": 60.83,
            "actions:offsite_conversion": 789
          },
          {
            "remote_id": "901",
            "impressions": "123",
            "reach": 123,
            "frequency": 1.0413449389302,
            "cpm": 12.30131445905,
            "spend": 182.49,
            "ctr": 0.87630603303,
            "cost_per_inline_link_click": 3.0415,
            "actions:goal": 3,
            "actions:link_click": 60,
            "cost_per_action_type:cost_per_goal": 60.83,
            "actions:offsite_conversion": 901
          }
        ]
      }
    };

    this.setState({
      ads: this.state.ads.sort(function(a, b) {
        var valA = parseInt(a.remote_id);
        var valB = parseInt(b.remote_id);
        if (valA > valB) { return 1; }
        if (valA < valA) { return -1; }
        return 0;
      }),
      metrics: {
        rows: this.state.metrics.rows.sort(function(a, b) {
          var valA = parseInt(a.remote_id);
          var valB = parseInt(b.remote_id);
          if (valA > valB) { return 1; }
          if (valA < valA) { return -1; }
          return 0;
        })
      }
    });
  } // end of constructor

  componentWillMount() {
    this.props.fetchAdObjects();
    this.props.fetchAdMetrics();
  }

  renderMetricsColumns() {
    return this.state.metrics.column_names.map((name) => (
        <Column
          key={name}
          header={<Cell>{name}</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.state.metrics.rows[props.rowIndex][`${name}`]}
            </Cell>
          )}
          width={200}
        />
      )
    );
  }

  render() {
    return (
      <div>
        <Table
          rowsCount={this.state.ads.length}
          rowHeight={50}
          headerHeight={50}
          width={500}
          height={200}>
          <Column
            header={<Cell>Ad Name</Cell>}
            cell={props => (
              <Cell {...props}>
                {this.state.ads[props.rowIndex].name}
              </Cell>
            )}
            width={100}
            fixed={true}
          />
          {this.renderMetricsColumns()}
        </Table>
      </div>
    );
  }
}

  function mapStateToProps(state) {
    return {
      ads: state.adObjects.ads,
      metrics: state.adMetrics
    };
  }

  export default connect(mapStateToProps, { fetchAdObjects, fetchAdMetrics })(AdModule);
