import React from "react";

class Calculator extends React.Component {
  state = {
    a: 10,
    b: 5,
    showResult: false
  };
  setA = e => {
    this.setState({ a: parseInt(e.target.value) });
  };
  setB = e => {
    this.setState({ b: parseInt(e.target.value) });
  };

  setShowResultToTrue = e => {
    this.setState(PrevState => {
      return { showResult: !PrevState.showResult };
    });
  };
  render() {
    return (
      <div>
        <input className="InputA" onChange={this.setA} />
        <input onChange={this.setB} />
        <button onClick={this.setShowResultToTrue}>Result</button>
        <br />
        {this.state.showResult ? (
          <div>
            <br />
            {"A:" + this.state.a + " B:" + this.state.b}
            <br />
            {"Addition: " + (this.state.a + this.state.b)}
            <br />
            {"Division: " + this.state.a / this.state.b}
          </div>
        ) : (
          <div>Click on Result button</div>
        )}
      </div>
    );
  }
}

export default Calculator;
