
import { Widgets } from '@material-ui/icons';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Profile from './components/profile'
import Sticky from 'react-stickynode'
import Widget from './components/Widget';
import { useStateValue } from './StateProvider';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Routes from './route'
import Curriculam from './components/Curriculam'


function App() {

  const [{user},dispatch]=useStateValue();

  
  return (
    <Router>
    <div className="App">
      {
        !user ? (
          <Login/>
        ) : (

          <>

      <Header/>
      <div className="app_body">
      <div id="sidebarclass"><Sidebar/></div>
      <div id="curriculam"><Curriculam/></div>
      {/* <div id="feedid"><Feed/></div> */}
      {/* <div className="profileclass"><Profile/></div> */}
      </div>
      </>

    )}    
    </div>
    </Router>
  );
}

export default App;

//avishakcb
//CiKas0n86a1A7Xsm