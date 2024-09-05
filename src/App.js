
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import HHeadlines from './Components/HHeadlines';
import Ftechnews from './Components/Ftechnews';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <img src={require('./img1.png')} alt="Description of the image" style={{ height: '600px',width:'1349px' }} />
      <div style={{ display: 'flex' }} >
         <div><Link to="/headlines"><button id="headlines">Headlines</button></Link></div>
         <div><Link to="/fetch"><button  id="fetch">Datewise News</button></Link></div>
      </div>
      
      <Routes> 
        <Route path="/headlines" element={<HHeadlines />} /> 
        <Route path="/fetch" element={<Ftechnews />} /> 

      </Routes>
      <img src={require('./img2.png')} alt="Description of the image" style={{width:'1349px'}}  />
      <Footer/>
    </Router>
  );
}

export default App;














