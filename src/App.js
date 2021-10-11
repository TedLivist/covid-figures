import { Switch, Route } from 'react-router-dom';

import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={List} exact />
        <Route path="/details" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
