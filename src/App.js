import React from 'react'
import DataCenter from './DataCenter'
import Users from './Users'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Nav';

function App() {
    return (
     <div>
       <DataCenter>
         <Router>
           <Nav />
           <switch>
             <Route exact path='/users' component={Users} />
          </switch>
        </Router>
       </DataCenter>
     </div>
    )
}

export default App;
