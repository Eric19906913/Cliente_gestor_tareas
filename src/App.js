import React from 'react';
import Login from './components/auth/Login';
import CreateAccount from './components/auth/CreateAccount';
import Projects from './components/projects/Projects';

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

function App() {
  return (

    //todo lo que este detro del Router se va ver en todas las paginas
    <Router>
      <Switch>
        {/*todo lo que este dentro del switch se ve en cada una*/}
        <Route exact path="/" component={Login} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
