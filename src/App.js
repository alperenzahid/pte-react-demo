import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CheckAudio from './components/exam/CheckAudio';
import Main from './components/Main';
import Login from "./components/Login";
import Instructions from "./components/exam/Instructions";
import Introduction from "./components/exam/Introduction";
import Dashboard2 from "./components/dashZ/Dashboard";
import NotFound from './components/notFound';


function App() {

    localStorage.removeItem("timing");

    if("user_id" in localStorage){
        //user_id = parseInt(localStorage.getItem("user_id"));
    }else{
        let user_id = Math.floor(Math.random() * 1000).toString();
        localStorage.setItem("user_id",user_id);
    }   
   const wrapComponent =  (Component) => {return <div class="body index-page sidebar-collapse Aligner mh-100"><Component /></div>}
    

  return (
        <Switch>
            <Route path='/' exact component={()=>wrapComponent(Login)} />
            {/*Parametre gondermek istediginde asagidaki sekilde cagirabilirsin*/}
            {/*Asagida yazilan props history,location ve match in de gecmesi icin eklenir*/}
            <Route path='/dashboard' component={(props) => <Dashboard2 tabToActive="Tests" {...props} />} />
            <Route path='/instructions' component={()=>wrapComponent(Instructions)} />
            <Route path='/intro' component={()=>wrapComponent(Introduction)} />
            <Route path='/check' component={()=>wrapComponent(CheckAudio)} />
            <Route path='/q:id' component={()=>wrapComponent(Main)} /> {/*Bu yukarida olunca :id digerlerine ataniyor*/}  
            <Route path='/not-found' component={()=>wrapComponent(NotFound)} />
            <Redirect to="/not-found" />          
        </Switch>
  );
}

export default App;

