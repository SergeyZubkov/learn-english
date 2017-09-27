import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Button,
  Col,
  Grid,
  Row
} from 'react-bootstrap';
import Card from './Card';
import {suffix} from '../utils'
import './Test.css';
import ReactDOM from 'react-dom';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isStart: false,
      currentEntry: null,
      rightAnswer: 0,
      showResult: false,
      revealCard: false,
      showOKBtn: false
    }
  }

  start = () => {
    let index = 0;

    this.setState({
      isStart: !this.state.isStart,
      index,
      currentEntry: this.props.entries[index],
      showOKBtn: true
    });
  }

  next = () => {
    let index = ++this.state.index;

    if (index < this.props.entries.length) {

      this.setState({
        revealCard: false,
        index,
        currentEntry: this.props.entries[index],
        showNextBtn: false,
        showOKBtn: true
      });

    } else {
      this.showResult()
    }
  }

  revealCard = () => {
    this.setState({
      revealCard: true,
      showOKBtn: false
    })
  }

  handleRevealCard = (isRightAnswer) => {
    this.setState({
      showNextBtn: true,
      rightAnswer: this.state.rightAnswer + (isRightAnswer ? 1 : 0)
    },
      () => ReactDOM.findDOMNode(this.nextBtn).focus()
    );
  }

  showResult = () => {
    this.setState({
      currentEntry: null,
      showNextBtn: false,
      showResult: true
    })
  }

  render() {
    let entriesCount = this.props.entries.length;
    let card;

    if (this.state.currentEntry) {
      card = <Card
        front={this.state.currentEntry.ru}
        back={this.state.currentEntry.en}
        reveal={this.state.revealCard}
        onReveal={this.handleRevealCard}
      />
    }

    return (
      <Grid className='test'>
        <Row>
          <Col
            md={12}
          >
            <div
              className='test-intro'
              style={{
                display: this.state.isStart
                ? 'none'
                : ''
              }}
            >
              {`к проверки ${entriesCount} карт${suffix(entriesCount)}`}
              <br />
              <Button
                onClick={this.start}
                disabled={entriesCount === 0}
              >
                Начать
              </Button>
            </div>

            {card&&card}

            <Button
              onClick={this.next}
              style={{
                display: this.state.showNextBtn
                ? ''
                : 'none'
              }}
              ref={node => this.nextBtn = node}
              tabIndex='0'
            >
              Далее
            </Button>

            <Button
              onClick={this.revealCard}
              style={{
                display: this.state.showOKBtn
                ? ''
                : 'none'
              }}
            >
              OK
            </Button>

            <div
              className="test__result"
              style={{
                display: this.state.showResult
                ? ''
                : 'none'
              }}
            >
              {`Правильных ответов ${this.state.rightAnswer} из ${entriesCount}`}
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  entries: state.entries
});

export default connect(mapStateToProps)(Test);
