import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';
import './Add.css';
import {
  addEntry,
  updateEntry
} from '../actions';
import {connect} from 'react-redux';
import cuid from 'cuid';

class Add extends Component {

  componentDidMount() {
    this.updatableEntry = this.props.location.updatableEntry;

    if (this.updatableEntry) {
      this.inputEN.value = this.updatableEntry.en;
      this.inputRU.value = this.updatableEntry.ru
    }
  }

  submit = (e) => {
    e.preventDefault();

    if (this.updatableEntry) {
      this.props.onUpdateEntry(
        this.updatableEntry.id, {
          en: this.inputEN.value,
          ru: this.inputRU.value
        }
      )
    } else {
      this.props.onAddEntry({
        id: cuid(),
        en: this.inputEN.value,
        ru: this.inputRU.value
      });
    }

    this.inputRU.value = this.inputEN.value = '';

    if (this.updatableEntry) {
      this.props.history.push({
        pathname: '/dictionary'
      })
    }
  }

  render() {
    return (
      <Grid className='add'>
        <Row>
          <Col
            md={12}
          >
            <form
              onSubmit={this.submit}
            >
              <FormGroup

              >
                <ControlLabel>
                  по-английски
                </ControlLabel>
                <FormControl
                  componentClass='textarea'
                  inputRef={(input) => this.inputEN = input}
                />
              </FormGroup>
              <FormGroup

              >
                <ControlLabel>
                  по-русски
                </ControlLabel>
                <FormControl
                  componentClass='textarea'
                  inputRef={(input) => this.inputRU = input}
                />
              </FormGroup>
              <Button
                type='submit'
              >
                Добавить
              </Button>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapDispatchToProps = {
  onAddEntry: addEntry,
  onUpdateEntry: updateEntry
}

export default connect(null, mapDispatchToProps)(Add);
