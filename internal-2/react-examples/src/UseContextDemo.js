import React, { createContext, useContext } from "react";

// Step 1: Create a Context
const MyContext = createContext();

function Child() {
// Step 3: Use the Context
const value = useContext(MyContext);
return <h2>Value from Context: {value}</h2>;
}

function App() {
// Step 2: Provide the Context
return (
<MyContext.Provider value="Hello from Context!">
<Child />
</MyContext.Provider>
);
}

export default App;
