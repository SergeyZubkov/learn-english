import React, {Component} from 'react';
import {
  Table
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {removeEntry} from '../actions';
import FontAwesome from 'react-fontawesome';
import './Dictionary.css';

class Dictionary extends Component {

  editEntry(entry) {
    this.props.history.push({
      pathname: '/add',
      updatableEntry: entry
    })
  }

  render() {
    return (
      <div className='dictionary'>
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
              <tr
                key={i}
              >
                <td>{i}</td>
                <td>{entry.en}</td>
                <td>{entry.ru}</td>
                <td
                  className='item-actions'
                >
                  <FontAwesome
                    name='edit'
                    onClick={() => this.editEntry(entry)}
                  />
                  <FontAwesome
                    name='trash'
                    onClick={() => this.props.onRemoveEntry(entry.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
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
