import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Today from 'pages/Today';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <Router basename='app'>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/today' component={Today} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
