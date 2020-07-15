import React, { Component } from "react";

class Counter extends Component {

  // We can decided to get a new data based on changes of previous states
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
        // Ajax call and get new data from the server
    }

  }

  // It will be called just before the component is removed from the DOM.
  componentWillUnmount() {
    console.log("Counter - Unmmount");
  }
  
  render() {
    console.log("Counter - Rendered");
    return (      
      <div>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
    return classes;
  };
  
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : value;
    // return this.state.count === 0 ? "Zero" : this.state.count;
    // return count === 0 ? "Zero" : count;
  };
}

export default Counter;
