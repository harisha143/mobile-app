
import './App.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import Show from './show/Show';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/show" component={Show}></Route>
      <Route path="/Home" component={Home}></Route>
    </Switch>

      </Router>
     </Router>
      
    </div>
  );
}

export default App;
