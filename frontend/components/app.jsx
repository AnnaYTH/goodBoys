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
// import Profile from './user/profile';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import AllReviews from './reviews/all_reviews'; 
import OneReview from './reviews/one_review'; 
import CreateReview from './reviews/create_review'; 
import EditReview from './reviews/edit_review'; 

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
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/relationships" component={RelationshipContainer} />
      <ProtectedRoute exact path="/relationships/:id" component={RelationshipShipContainer} />

      <ProtectedRoute exact path="/users/:id" component={GreetingContainer} />

      <ProtectedRoute exact path="/reviews" component={AllReviews} />
      <ProtectedRoute exact path="/reviews/:id" component={OneReview} />
      <ProtectedRoute exact path="/relationships/:id/create" component={CreateReview} />
      <ProtectedRoute exact path="/reviews/:id/edit" component={EditReview} />
      
      <AuthRoute exact path= "/" component={Splash}/>
    </Switch>
    
  </div>
);

export default App;

  {/* <Route exact path="/" component={SearchContainer} /> */}
