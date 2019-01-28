import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //object destructing
    const { onReset, onDelete, onIncrement, counters } = this.props;
    console.log("COunters rendered");
    return (
      <div>
        <button
          // onClick={this.props.onReset}
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* {this.props.counters.map(counter => ( */}
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
            // selected={true} this was an eg to show more than 1 attributes can be added
          >
            {/* <h4>Counter #{counter.id}</h4> */}
            {/* this is an eg for children props  */}
            {/* this above h4 tag is sometimes used in a dialog box eg "enter name here" */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
