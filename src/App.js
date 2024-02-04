
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  c='john';
  pagesize=6;
  render() {
    return (
      <div>
      <Router>
          <Navbar/>
        <Routes>
          <Route exat path="/" element={<News key="general" pagesize={this.pagesize} country='in' category = 'general'/>} />
          <Route exat path="/business" element={<News key="business" pagesize={this.pagesize} country='in' category = 'business'/>} />
          <Route exat path="/entertainment" element={<News key="entertainment" pagesize={this.pagesize} country='in' category = 'entertainment'/>} />
          <Route exat path="/science" element={<News key="science" pagesize={this.pagesize} country='in' category = 'science'/>} />
          <Route exat path="/health" element={<News key="health" pagesize={this.pagesize} country='in' category = 'health'/>} />
          <Route exat path="/sport" element={<News key="sport" pagesize={this.pagesize} country='in' category = 'sport'/>} />
          <Route exat path="/technology" element={<News key="technology" pagesize={this.pagesize} country='in' category = 'technology'/>} />
        </Routes>
      </Router>
      </div>
    )
  }
}
