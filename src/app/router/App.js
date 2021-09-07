import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import dashboard from '../components/Pages/dashboard/dashboard';
import signup from '../components/Pages/signup/signup';
import checkout from '../components/Pages/checkout/checkout';
import contact from '../components/Pages/contact/contact';
import account from '../components/Pages/account/account';
import NotFound from '../components/NotFound/NotFound';

const App = () => (
  <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={signup}/>
          <Route path="/dashboard" component={dashboard}/>
          <Route path="/checkout" component={checkout}/>
          <Route path="/contact" component={contact}/>
          <Route path="/account" component={account}/>
          <Route component={NotFound}/>
        </Switch>

        <Footer />
      </div>
  </Router>
);

export default App;
