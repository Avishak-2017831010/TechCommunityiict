
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
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'
import Routes from './route'
import Curriculam from './components/Curriculam'
import Facultymembers from './components/Facultymembers'


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
      <Switch>
      <Route path = "/login">
          <Login/>
      </Route>
      <Route path = "/Curriculam" >
       <div className="app_body">
         <Header/>  
         <div id="sidebarclass"><Sidebar/></div>
         <div id="curriculam"><Curriculam/></div> 
         {/* <div className="profileclass"><Profile/></div> */}
       </div>
      </Route>
      <Route path = '/profile'>
       <div className="app_body">
         <Header/>  
         <div id="sidebarclass"><Sidebar/></div>
         {/*<div id="curriculam"><Curriculam/></div>*/}
         {/*<div id="feedid"><Feed/></div>*/}
          <div className="profileclass"><Profile/></div> 
       </div>
      </Route>
      <Route path = '/'>
       <div className="app_body">
         <Header/>  
         <div id="sidebarclass"><Sidebar/></div>
         {/*<div id="curriculam"><Curriculam/></div>*/}
         {/* <div id="feedid"><Feed/></div>  */}
         <div><Fa</div>
         {/* <div className="profileclass"><Profile/></div> */}
       </div>
      </Route>

      </Switch> 
      </>
     
    )}    
    </div>
    </Router>
  );
}

export default App;

//avishakcb
//CiKas0n86a1A7Xsm