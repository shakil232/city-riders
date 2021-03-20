
import './App.css'
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import { createContext, useState } from 'react';

export const UserLoginContext = createContext();

function App() {
  const [user, setUser] = useState({})
  return (
    <UserLoginContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserLoginContext.Provider>
  );
}


export default App;
