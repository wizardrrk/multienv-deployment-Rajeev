import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [devData, setDevData] = useState(null);
  const [prodData, setProdData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/dev")
      .then(res => setDevData(res.data))
      .catch(err => console.error(err));

    axios.get("http://localhost:3002/prod")
      .then(res => setProdData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Multi-Environment Ticket Management</h1>
      <h2>Development Backend:</h2>
      <pre>{JSON.stringify(devData, null, 2)}</pre>
      <h2>Production Backend:</h2>
      <pre>{JSON.stringify(prodData, null, 2)}</pre>
    </div>
  );
}

export default App;