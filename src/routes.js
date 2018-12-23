import React from "react";
import { BrowserRouter , Route, Link,Switch } from "react-router-dom";
import Home from "./components/pages/Home/index";

export const AppRoutes = () => (
   <BrowserRouter>
   <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={Home}/>
   </Switch>
   </BrowserRouter>
 );
  
