import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  FormControl
} from 'react-bootstrap';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: '',
      reveal: false
    }
  }

  componentDidMount() {
    this.focusTextarea();
  }

  componentWillReceiveProps(newProps) {

    if (newProps.reveal !== this.props.reveal) {
      if (newProps.reveal) {
        this.doReveal();
      } else {
        this.setState({reveal: newProps.reveal});
      }
    }
    if (newProps.front !== this.props.front) {
      this.setState({
        reveal: false,
        status: null,
        answer: null
      }, () => this.focusTextarea());
    }
  }

  doReveal = () => {

    let answer = this.input.value;
    let isRight = this.isRight(answer);

    this.setState({
      reveal: true,
      answer,
      status: isRight
      ? 'correct'
      : 'incorrect'
    });

    this.input.value = ''

    this.props.onReveal(isRight)
  }

  prepare(string) {
    return string.toLowerCase().trim();
  }

  isRight(answer) {
    return this.prepare(answer) === this.prepare(this.props.back);
  }

  focusTextarea() {
    const node = ReactDOM.findDOMNode(this.input);
    node.focus();
  }

  render() {

    return (
      <div
        className={`card ${this.state.status}`}
      >
        <div
          className='card-front'
        >
          {this.props.front}
        </div>
        <div
          className='card-back'
          style={{
            display: this.state.reveal
            ? ''
            : 'none'
          }}
        >
          {this.props.back}
        </div>
        <div
          className='card-back-answer'
          style={{
            display: this.state.reveal
            ? ''
            : 'none'
          }}
        >
          <div>ваш ответ:</div>
          {this.state.answer}
        </div>
        <form
          style={{
            display: this.state.reveal
            ? 'none'
            : ''
          }}
        >
          <FormControl
            componentClass='textarea'
            inputRef={input => this.input = input}
          />
        </form>
      </div>
    )
  }
}

export default Card;
