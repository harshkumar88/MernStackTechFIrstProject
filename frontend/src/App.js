import logo from './logo.svg';
import './App.css';
import Signup from './Signup'
import Login from './Login'
import {Switch,Route} from "react-router-dom"
import Navbar from './Navbar'
import Homepage from './Homepage';
import Todo from './Todo'
import newhomepage from './newhomepage'
import Keep from './KeepApp'
import Forgot from "./forgot"
import {NavLink, useLocation} from 'react-router-dom'
import Footer from './Footer';
function App() {
  const location=useLocation();
  const url=location.pathname;
  return (
   <>
   {url!="/Todo" && url!="/keepApp"?<Navbar/>:""}
   
   <Switch>
         <Route  exact path="/" component={Homepage}></Route>
         <Route  exact path="/Register" component={Signup}></Route>
         <Route exact path="/Login" component={Login}></Route>
        
         <Route exact path="/newhomepage" component={newhomepage}></Route>
         <Route  exact path="/forgot" component={Forgot}></Route>
         <Route exact path="/Todo" component={Todo}></Route>
         <Route exact path="/keepApp" component={Keep}></Route>
        </Switch>
        
        <Footer/>
     
   </>
    
  );
}

export default App;
