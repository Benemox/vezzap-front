import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewPolicyPage from "./pages/NewPolicyPage/NewPolicyPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import Dasboard from "./pages/Dasboard/Dasboard"
import Scan from "./pages/Scan/Scan"


function App() {
  return (
    <div className="App">
           <Router>
        <Switch>
          <Route exact path="/" component={NewPolicyPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dasboard" component={Dasboard}/>
          <Route path="/Scan" component={Scan}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
