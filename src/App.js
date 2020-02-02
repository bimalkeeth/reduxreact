import React from 'react';
import {Route,Switch} from "react-router-dom"
import HomePage from "./component/home/HomePage";
import AboutPage from "./component/about/AboutPage";
import HeaderPage from "./component/common/HeaderPage";
import PageNotFound from "./component/common/PageNotFound";
import CoursePage from "./component/courses/CoursesPage";
import './App.css';

function App() {
  return (

    <div className="container-fluid">
      <HeaderPage/>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursePage} />
          <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
