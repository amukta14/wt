import React, { createContext, useContext } from 'react';

const UserContext = createContext();

function ComponentA() {
const user = useContext(UserContext);
return <h2>User: {user}</h2>;
}

function UseContextDemo() {
return (
<UserContext.Provider value="Amukta">
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<ComponentA />
</div>
</UserContext.Provider>
);
}

export default UseContextDemo; 