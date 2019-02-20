import React from 'react';
import {Link} from 'react-router-dom'

export default function Header(){
  
    return(
      <header>
      <div className="header-container">
        <div className="header">hi, i am siddharth and this is my
          <div className="element" id="target-elem" />
        </div>
        <div  className="vmenu ng-scope" style={{}}>
          <Link className="tabs  ng-scope active" to='/' exact='true' style={{}}>about</Link>
          <Link className="tabs ng-scope" to='/work'>work</Link>
          <Link className="tabs ng-scope" to='/blog'>blog</Link>
          <Link className="tabs ng-scope" to='/contact'>contact</Link>
          <Link className="tabs ng-scope" to='/readme'>README</Link>
          </div>
        <div className="parent-loader">
          <div className="tab-indicator  l0" ></div>
          <div className="loader" ></div>
        </div>
      </div>
      </header>
    )
  
}

