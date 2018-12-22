import React from "react";
import { BrowserRouter , Route, Link,Switch } from "react-router-dom";
import About from "./About";

export const AppRoutes = () => (
   <BrowserRouter>
   <Switch>
    <Route exact path='/' component={About}/>
    <Route path='/about' component={About}/>
   </Switch>
   </BrowserRouter>
 );
  
