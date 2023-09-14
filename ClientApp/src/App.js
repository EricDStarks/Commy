import React from 'react';
import {BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import ImageDisplay from './components/ImageDisplay';
import './custom.css';

function Picture () {
  
    return (
      <Router>
          <Route path="/image1">
             <ImageDisplay imageUrl= "Pictures\Saved Pictures\BlankShirt.jpg" />
          </Route>
          <Route path="/image1">
             <ImageDisplay imageUrl="Pictures\Saved Pictures\BlankShirt.jpg" />
          </Route>
      </Router>
    );
}

export default Picture;
