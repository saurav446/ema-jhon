import './App.css';
import Header from './Componet/Header'
import  Shop  from "./Componet/Shop";
import './Componet/All.css';
import Error from './Componet/Error'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Oder from './Componet/Oder';
import Login from './Admin/Login'; 
import {AuthProvider,PrivateRoute} from './Admin/useAuth'
import Review from './Componet/Review'

function App() {
  return (
    <div className="App">
     <AuthProvider>
   
     <Header></Header> 
    <Router>
    <Switch>
        <Route exact path="/">
         <Shop ></Shop>
        </Route>
        <Route path="/login">
          <Login   ></Login>
        </Route>
        <Route  path="/review">
          <Review ></Review>
        </Route>
        <PrivateRoute>
        <Route path="/order">
          <Oder  ></Oder>
        </Route>
        </PrivateRoute> 
        <Route path="*" >
          <Error></Error>
        </Route>
    </Switch>
    </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
