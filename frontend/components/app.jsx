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
import RelationshipContainer from './relationships/relationship_container'; 
import RelationshipShipContainer from './relationships/relationship_ship_container'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    {/* <header>
        <h1>Hey Buddy</h1>
        <GreetingContainer/>
        <p>GoodBoys Logo</p>
    </header> */}
    <p> </p>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/relationships" component={RelationshipContainer} />
      <ProtectedRoute exact path="/relationships/:id" component={RelationshipShipContainer} />
      <AuthRoute exact path= "/" component={Splash}/>
    </Switch>
    
  </div>
);

export default App;

  {/* <Route exact path="/" component={SearchContainer} /> */}