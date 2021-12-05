import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from '../components/Footer/Footer';
import dashboard from '../components/Pages/dashboard/dashboard';
import signup from '../components/Pages/signup/signUp';
import checkout from '../components/Pages/checkout/checkout';
import contact from '../components/Pages/contact/contact';
import myAccount from '../components/Pages/account/account';
import NotFound from '../components/NotFound/NotFound';
import login from '../components/Pages/login/login';
import PrivateRoute from './privateRoute';

const App = () => (
	<Router>
		<div>
        <Switch>
          <Route exact path="/" component={signup}/>
          <Route path="/login" component={login}/>
          <Route path="/contact" component={contact}/>
          <PrivateRoute path= "/dashboard/:id?" component={dashboard}/>
          <PrivateRoute path="/checkout/:id?" component={checkout}/>
          <PrivateRoute path="/account/:id?" component={myAccount}/>
          <Route component={NotFound}/>
        </Switch>
			<Footer />
		</div>
	</Router>
);

export default App;
