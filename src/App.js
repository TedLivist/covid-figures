import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Countries from './components/Countries';
import Details from './components/Details';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" component={Countries} exact />
        <Route path="/:id" component={Details} />
      </Switch>
    </Provider>
  );
}

export default App;
