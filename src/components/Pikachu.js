import React from 'react';

class Pikachu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      size: 100
    };
  }

  componenentDidUpdate(prevProps, prevState) {
    if (prevProps.size > this.props.size) {
    this.makeSmaller;
  } else if (prevProps.size > this.props.size) {
    this.makeBigger
    }
  }

  resizePikachu = () => {
    const pikachu = document.getElementById("pikachu");
    pikachu.height = this.state.size;
    pikachu.width = this.state.size;
  }

  makeBigger = () => {
    this.setState({
      size: this.state.size + 10
    });
  }

  makeSmaller = () => {
    this.setState({
      size: this.state.size - 10
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.makeBigger}>Bigger!</button>
        <button onClick={this.makeSmaller}>Smaller!</button>
      </div>
    )
  }
}

export default Pikachu;
