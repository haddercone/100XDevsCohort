import React from "react";

export class MyComponentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log("Component Mounted component");
  }

  componentWillUnmount() {
    console.log("Component Unmounted component");
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
