import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container"; 
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Splash from './splash';



const App = () => (
  <div>
    {/* <header>
        <h1>Hey Buddy</h1>
        <GreetingContainer/>
        <p>GoodBoys Logo</p>
    </header> */}
    <p> </p>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route exact path= "/" component={Splash}/>
    </Switch>
    
  </div>
);

export default App;

  {/* <Route exact path="/" component={SearchContainer} /> */}