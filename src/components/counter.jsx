import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   // tags: ["tag1", "tag2", "tag3"]
  //   /*imgUrl: "https://picsum.photos/200"*/
  // };

  /*styles = {
    fontSize: 15,
    fontWeight: "bold"
  };*/
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // state is a controlled component thats why any references to this.state wont work/
  //its parent controls the state
  // handleIncrement = product => {
  //   // console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement(product);
  // };
  componentDidUpdate(prevProps, prevState) {
    //ajax req to get new data from server when there's an update
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call and get new data from the server
      console.log(
        "value of counter [",
        this.props.counter.id,
        "] changed to:",
        this.props.counter.value
      );
    }
  }

  componentWillUnmount() {
    //this method helps us to clear timers or listeners before destroying the DOM component
    console.log("Counter unmount");
  }
  render() {
    console.log("Counter rendered");
    // console.log("props", this.props);
    return (
      <div>
        {/* <React.Fragment> */}
        {/*}
        <img src={this.state.imgUrl} alt="" />

        <span style={this.styles} className="badge badge-primary m-2">
            */}
        {/* {this.props.children} */}
        <h4>{this.props.id}</h4>
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          // onClick={this.handleIncrement}
          // onClick={product => this.handleIncrement(product)}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create new tags"} */}
        {/* {this.renderTags()} */}
        {/* </React.Fragment> */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //object destructuring
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
