import React from 'react';
import './App.scss';
import AppHeader from './components/Header/AppHeader';
import AppFooter from './components/Footer/AppFooter';
import View from './components/View';
import {BrowserRouter as Router} from 'react-router-dom';


const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <AppHeader />
        <View/>
       <AppFooter/>
      </Router>
    </div>
  );
}

export default App;
