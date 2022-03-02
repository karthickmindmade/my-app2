import './App.css';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RegisteredUser from './component/registereduser';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' exact component={RegisteredUser} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
