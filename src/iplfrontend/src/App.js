import './App.scss';
import {HashRouter as Router,Route,Switch} from  'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPages } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
             <Route path="/teams/:teamName/matches/:year">
              <MatchPages/>
            </Route>
            <Route path="/teams/:teamName">
              <TeamPage/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </Router>
      </div>
      
  );
}

export default App;
