import React, { useState, useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { UserContext } from "./UserContext";
function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div className="home">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
