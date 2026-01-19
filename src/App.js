import React, { useEffect, useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    console.log("Hello World"); // Original React console log

    fetch('https://hello-console-secret-seankst-dev.apps.rm2.thpm.p1.openshiftapps.com/hello') // for local dev
      .then(res => res.json())
      .then(data => {
        console.log(data.message);
        setBackendMessage(data.message);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Check your browser console!</h1>
      <p>{backendMessage}</p>
    </div>
  );
}

export default App;
