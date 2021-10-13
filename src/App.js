import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Countries from './components/Countries';
import Regions from './components/Regions';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" component={Countries} exact />
        <Route path="/:id" component={Regions} />
      </Switch>
    </Provider>
  );
}

export default App;
