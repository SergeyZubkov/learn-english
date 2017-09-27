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
  constructor(props) {
    super(props);

    this.state = {
      en: '',
      ru: ''
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.updatableEntry = this.props.location.updatableEntry;

    if (this.updatableEntry) {
      this.setState({
        en: this.updatableEntry.en,
        ru: this.updatableEntry.ru
      });
    }
  }

  changeEN = (e) => {
    this.setState({en: e.target.value});
  }

  changeRU = (e) => {
    this.setState({ru: e.target.value});
  }

  submit = (e) => {
    e.preventDefault();

    if (this.updatableEntry) {
      this.props.onUpdateEntry(
        this.updatableEntry.id, {
          en: this.state.en,
          ru: this.state.ru
        }
      )
    } else {
      this.props.onAddEntry({
        id: cuid(),
        en: this.state.en,
        ru: this.state.ru
      });
    }

    this.setState({
      en: '',
      ru: ''
    })

    if (this.updatableEntry) {
      this.props.history.push({
        pathname: '/dictionary'
      })
    }
  }

  shouldDisableSubmitBtn = () => {
    return !(this.state.en&&this.state.ru);
  }

  render() {
    return (
      <Grid className='add'>
        <Row>
          <Col
            md={6}
            mdOffset={3}
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
                  value={this.state.en}
                  onChange={this.changeEN}
                />
              </FormGroup>
              <FormGroup
              >
                <ControlLabel>
                  по-русски
                </ControlLabel>
                <FormControl
                  componentClass='textarea'
                  value={this.state.ru}
                  onChange={this.changeRU}
                />
              </FormGroup>
              <Button
                type='submit'
                disabled={this.shouldDisableSubmitBtn()}
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
