import React, { useState, useEffect } from 'react';

function UseEffectDemo() {
const [count, setCount] = useState(0);

useEffect(() => {
document.title = `Clicked ${count} times`;
console.log('useEffect executed');
}, [count]);

return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h2>useEffect Demo</h2>
<button onClick={() => setCount(count + 1)}>Click {count}</button>
</div>
);
}

export default UseEffectDemo; 