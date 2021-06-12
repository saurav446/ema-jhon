import './App.css';
import Header from './Componet/Header'
import  Shop  from "./Componet/Shop";
import  Review  from "./Componet/Review";
import './Componet/All.css';
import Error from './Componet/Error'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Oder from './Componet/Oder';




function App() {
  return (
    <div className="App">
    
    <Header></Header> 
    <Router>
    <Switch>
      <Router>
        <Route> 
        </Route>
        
        <Route exact path="/"  component={Shop} />
         
        <Route  path="/review"  component={Review} />
        <Route  path="/order"  component={Oder} />
        
        
        {/* <Route  path="*"  component={Error} /> */}
      </Router>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
