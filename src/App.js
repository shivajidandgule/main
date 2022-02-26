import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Main from './component/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menulist from './component/Menulist';
function App() {
  return (
    <div className="App">

      {/* <Login/> */}

     <Router>
     
       <Route exact path='/' component={Login} />
       <Route path='/menulist' component={Menulist} />
     </Router>
       {/* <Main/> */}
       
    </div>
  );
}

export default App;
