import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Shoes from './components/shoes/shoes';
import Menscloths from './components/menscloths/menscloths';
import Mobile from './components/mobile/mobile';
import Mycard from './components/mycard/mycard';


function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUsern"))
    )
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser",JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/shoes" > <Shoes/> </Route>
          <Route path="/menscloths" > <Menscloths/> </Route>
          <Route path="/homepage" ><Homepage/> </Route>
          <Route path="/mobile" ><Mobile/> </Route>
          <Route path="/mycard" ><Mycard/> </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
