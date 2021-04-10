import MobileNav from 'components/MobileNav';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Today from 'pages/Today';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Router basename='#'>
        <div className='app'>
          {/* {window.innerWidth <= 760 ? <MobileNav /> : <Navbar />} */}
          <MobileNav />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/today' component={Today} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
