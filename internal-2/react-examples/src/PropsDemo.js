import React from 'react';

function Greet(props) {
return <h2>Hello, {props.name}!</h2>;
}

function PropsDemo() {
return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<Greet name="Amukta" />
<Greet name="Malya" />
</div>
);
}

export default PropsDemo; 