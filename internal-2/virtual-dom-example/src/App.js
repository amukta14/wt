import React, { useState } from 'react';

function App() {
const [count, setCount] = useState(0);

console.log('Virtual DOM Rendered');

return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h1>Virtual DOM Example</h1>
<p>Button clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>Click Me</button>
</div>
);
}

export default App; 