import React, { Component } from 'react';

class LifecycleDemo extends Component {
constructor(props) {
super(props);
this.state = { message: "Hello" };
console.log('Constructor Called');
}

componentDidMount() {
console.log('Component Mounted');
}

componentDidUpdate() {
console.log('Component Updated');
}

componentWillUnmount() {
console.log('Component Unmounted');
}

render() {
return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h2>{this.state.message}</h2>
<button onClick={() => this.setState({ message: "Goodbye" })}>
Change Message
</button>
</div>
);
}
}

export default LifecycleDemo; 