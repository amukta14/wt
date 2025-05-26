import React, { useState } from 'react';

function UseStateDemo() {
const [count, setCount] = useState(0);

return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h2>useState Demo</h2>
<p>Count: {count}</p>
<button onClick={() => setCount(count + 1)}>Increase</button>
</div>
);
}

export default UseStateDemo; 