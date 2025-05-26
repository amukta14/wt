import React from 'react';

function Child() {
return <h3>I am a Child Component!</h3>;
}

function ParentChild() {
return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h2>Parent Component</h2>
<Child />
</div>
);
}

export default ParentChild; 