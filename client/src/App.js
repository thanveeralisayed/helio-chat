import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { UserContext } from './UserContext';
import Chat from './Components/Chat/Chat';
import Home from './Components/Home/Home';
import Navbar from './Components/Layout/Navbar';

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Switch>
            <div className="container mt-5">
              <Route exact path="/" component={Home} />
              <Route exact path="/chat/:room_id/:room_name" component={Chat} />
            </div>
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
