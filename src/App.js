import React, {useState,useContext} from 'react'
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
import { InfobeerProvider } from './components/Context/infobeerContext';
import privazyPolicy from "./pages/PrivazyPolicy/privazyPolicy"
import ResMap from "./pages/Map/Map"

function App() {

const [beerInfo,setbeerInfo] = useState(null);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={NewPolicyPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dasboard" component={Dasboard}/>
          <Route path="/Profile" component={Profile} />
          <Route exact path="/map" component={ResMap} />
          <Route path="/Scan" >
          <     InfobeerProvider value={{beerInfo,setbeerInfo}}>
                  <Scan />
                </InfobeerProvider>
          </Route>
          <Route path="/login" component={login} />
          <Route path="/Article" component={Article} />
          <Route path="/privazyPolicy" component={privazyPolicy} />
          <Route path="/Search">
                  <InfobeerProvider value={{beerInfo,setbeerInfo}}>
                    <Search />
                  </InfobeerProvider>
          </Route>
          
          <Route path="/Infobeer">
                  <InfobeerProvider value={{beerInfo,setbeerInfo}}>
                      <Infobeer />
                    </InfobeerProvider>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
