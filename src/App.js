import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("Hello World"); // This will print in the browser console
  }, []);

  return (
    <div>
      <h1>Check your browser console!</h1>
    </div>
  );
}

export default App;
