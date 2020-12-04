import React from "react";
import './App.css';
import {GoogleLogin} from "react-google-login";


const responseGoogle = (response) => {
  console.log(response);
} 
function App() {
  return (
    <div className="App">
       <GoogleLogin
    clientId="paste your clientId here"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />

    </div>
  );
}

export default App;
