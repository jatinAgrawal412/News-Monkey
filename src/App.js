import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';

import News1 from './component/News1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {
apikey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            {/* <Route exact path='/' element={<News  key={"general"} apikey={this.apikey} pageSize={9} country="in" category="general"/>}/>
            <Route exact path='/entertainment' element={<News key={"entertainment"} apikey={this.apikey} pageSize={9} country="in" category="entertainment"/>}/>
            <Route exact path='/business' element={<News key={"business"} apikey={this.apikey} pageSize={9} country="in" category="business"/>}/>
            <Route exact path='/general' element={<News key={"geneuyral"} apikey={this.apikey} pageSize={9} country="in" category="general"/>}/>
            <Route exact path='/health' element={<News key={"health"} apikey={this.apikey} pageSize={9} country="in" category="health"/>}/>
            <Route exact path='/science' element={<News key={"science"} apikey={this.apikey} pageSize={9} country="in" category="science"/>}/>
            <Route exact path='/sports' element={<News key={"sports"} apikey={this.apikey} pageSize={9} country="in" category="sports"/>}/>
            <Route exact path='/technology' element={<News key={"technology"} apikey={this.apikey} pageSize={9} country="in" category="technology"/>}/> */}
            <Route exact path='/' element={<News1  key={"general"} apikey={this.apikey} pageSize={9} country="in" category="general"/>}/>
            <Route exact path='/entertainment' element={<News1 key={"entertainment"} apikey={this.apikey} pageSize={9} country="in" category="entertainment"/>}/>
            <Route exact path='/business' element={<News1 key={"business"} apikey={this.apikey} pageSize={9} country="in" category="business"/>}/>
            <Route exact path='/general' element={<News1 key={"geneuyral"} apikey={this.apikey} pageSize={9} country="in" category="general"/>}/>
            <Route exact path='/health' element={<News1 key={"health"} apikey={this.apikey} pageSize={9} country="in" category="health"/>}/>
            <Route exact path='/science' element={<News1 key={"science"} apikey={this.apikey} pageSize={9} country="in" category="science"/>}/>
            <Route exact path='/sports' element={<News1 key={"sports"} apikey={this.apikey} pageSize={9} country="in" category="sports"/>}/>
            <Route exact path='/technology' element={<News1 key={"technology"} apikey={this.apikey} pageSize={9} country="in" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

