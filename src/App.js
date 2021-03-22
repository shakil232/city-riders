import './App.css'
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Nav from './Components/Nav/Nav';

export const UserLoginContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    error: '',
    success: ''
  })
  return (
    <UserLoginContext.Provider value={[user, setUser]}>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/nav">
            <Nav/>
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
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
