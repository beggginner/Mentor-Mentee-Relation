import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegMentor from './components/RegMentor';
import RegMentee from './components/RegMentee';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Review from './components/Review';
import About from './components/About';
import Menteedb from './components/Menteedb';
import Mentordb from './components/Mentordb';
import Feedbackmentee from './components/Feedbackmentee';
import Feedbackmentor from './components/Feedbackmentor';

function App() {
  return (
    <Router>
      <div>


        <Route path='/' exact component={LoginPage} />
        <Route path='/choose' component={Home} />
        <Route path='/regmentor' component={RegMentor} />
        <Route path='/regmentee' component={RegMentee} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/menteedb' component={Menteedb} />
        <Route path='/mentordb' component={Mentordb} />
        <Route path='/fbmentee' component={Feedbackmentee} />
        <Route path='/fbmentor' component={Feedbackmentor} />
        <Route path='/admin' component={Admin} />
        <Route path='/review' component={Review} />
        <Route path='/about' component={About} />
        <Footer />



      </div>
    </Router>
  );
}

export default App;
