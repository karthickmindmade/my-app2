import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RegisteredUser from './component/registereduser';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={RegisteredUser} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;