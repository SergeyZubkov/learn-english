import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class RowItem extends Component {
  render() {
    const entry = this.props.entry;
    const index = this.props.index;
    return (
      <tr>
        <td>{index}</td>
        <td>{entry.en}</td>
        <td>{entry.ru}</td>
        <td
          className='item-actions'
        >
          <FontAwesome
            name='edit'
            onClick={() => this.props.onEditEntry(entry)}
          />
          <FontAwesome
            name='trash'
            onClick={() => this.props.onRemoveEntry(entry.id)}
          />
        </td>
      </tr>
    )
  }
}

export default RowItem;
