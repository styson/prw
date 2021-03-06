import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './shared/Header';
import HomePage from './home/HomePage';
import LoginPage from './account/LoginPage';
import ProfilePage from './account/ProfilePage';

export default function Template() {
  return (
    <Router>
      <div className="wrapper">
        <Header username="anonymous" />
        <section className="page-content">
          <Route exact path="/" component={HomePage} />
          <Route path="/account/profile/:id" component={ProfilePage} />
          <Route exact path="/account/login" component={LoginPage} />
        </section>
      </div>
    </Router>
  );
}
