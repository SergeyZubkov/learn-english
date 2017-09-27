import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  Table
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {removeEntry} from '../actions';
import './Dictionary.css';
import RowItem from './RowItem';

class Dictionary extends Component {

  editEntry = (entry) => {
    this.props.history.push({
      pathname: '/add',
      updatableEntry: entry
    })
  }

  render() {
    return (
      <Grid className='dictionary'>
        <Row>
          <Col
            md={12}
          >
            <Table
              hover
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>
                    По-английски
                  </th>
                  <th>
                    По-русски
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.entries.map((entry, i) => (
                  <RowItem
                    key={i}
                    index={i}
                    entry={entry}
                    onEditEntry={this.editEntry}
                    onRemoveEntry={this.props.onRemoveEntry}
                  />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  entries: state.entries
})

const mapDispatchToProps = {
  onRemoveEntry: removeEntry
}

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);
