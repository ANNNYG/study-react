import Home from './views/HomePage/index.jsx'
import LoginPage from './views/LoginPage/index.jsx'

import { Switch, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LoginPage></LoginPage>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
