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
import RelationshipShipContainer from './relationships/relationship_ship'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserProfile from './users/user_profile';
// comment in auth routes, but while testing it's a pain

const App = () => (
  <div>
    {/* <header>
        <h1>Hey Buddy</h1>
        <GreetingContainer/>
        <p>GoodBoys Logo</p>
    </header> */}
    <p> </p>
    <Switch>
      {/* <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/relationships" component={RelationshipContainer} />
      <ProtectedRoute exact path="/relationships/:id" component={RelationshipShipContainer} />
      <ProtectedRoute exact path="/users/:id" component={UserProfile} />
      <AuthRoute exact path= "/" component={Splash}/> */}


      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route exact path="/relationships" component={RelationshipContainer} />
      <Route exact path="/relationships/:id" component={RelationshipShipContainer} />
      <Route exact path="/users/:id" component={UserProfile} />
      <Route exact path= "/" component={Splash}/>
    </Switch>
    
  </div>
);

export default App;

  {/* <Route exact path="/" component={SearchContainer} /> */}
