import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  useEffect(() => {
    async function getJSON(requestParams) {
      const response = await fetch(requestParams.url);
      const jsonData = await response.json();
      setData(jsonData);
    }
    getJSON(requestParams);
    callApi(requestParams);
  }, [requestParams]);
  
  let callApi = async (requestParams) => {
    setRequestParams(requestParams);
  }
  
  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
