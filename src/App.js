
import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import News from './component/News';


 const App=()=>{
  const pagesize=6;
  const apiKey='d7532e2a08b14f2b86025eedd63b7c2f';
  
  const [progress, setProgress] = useState(0);

    return (
      <div>
      <Router>
          <Navbar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exat path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pagesize} country='in' category = 'general'/>} />
            <Route exat path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pagesize={pagesize} country='in' category = 'business'/>} />
            <Route exat path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize={pagesize} country='in' category = 'entertainment'/>} />
            <Route exat path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pagesize={pagesize} country='in' category = 'science'/>} />
            <Route exat path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pagesize={pagesize} country='in' category = 'health'/>} />
            <Route exat path="/sport" element={<News setProgress={setProgress} apiKey={apiKey} key="sport" pagesize={pagesize} country='in' category = 'sport'/>} />
            <Route exat path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize={pagesize} country='in' category = 'technology'/>} />
          </Routes>
      </Router>
      </div>
    )
  }

export default App
