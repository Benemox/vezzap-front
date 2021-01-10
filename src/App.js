import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewPolicyPage from "./pages/NewPolicyPage/NewPolicyPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import Profile from "./pages/Profile/Profile"
import Dasboard from "./pages/Dasboard/Dasboard"
import Scan from "./pages/Scan/Scan"
import Search from "./pages/Search/Search"
import login from "./pages/login/login"
import Article from './pages/Articles/Article';
import Infobeer from './pages/Infobeer/Infobeer';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={NewPolicyPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dasboard" component={Dasboard}/>
          <Route path="/Profile" component={Profile} />
          <Route path="/Scan" component={Scan}/>
          <Route path="/Search" component={Search} />
          <Route path="/login" component={login} />
          <Route path="/Article" component={Article} />
          <Route path="/Infobeer" component={Infobeer} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
