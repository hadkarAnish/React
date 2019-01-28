import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App constructor");
    // this.state = this.props.something;
    // this.setState() can only be called when the components is already rendered and placed in the DOM
  }

  componentDidMount() {
    //ajax call
    // this.setState({movies})
    console.log("app mounted");
  }
  handleIncrement = counter => {
    console.log("Increment event handler");
    const counters = [...this.state.counter];
    // ... is the spread operator
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    counters[index].value++;
    this.setState({ counter: counters });
    console.log(this.state.counter[0]);
  };

  handleDelete = counterId => {
    console.log("Delete Event handler, ID: ", counterId);
    const counters = this.state.counter.filter(c => c.id !== counterId);
    this.setState({ counter: counters });
    // if the counter property in the state was counterS then thhis would have worked too:
    // this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counter.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter: counters });
  };

  render() {
    console.log("App rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounter={this.state.counter.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counter}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
