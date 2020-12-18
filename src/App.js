import React, { Component } from 'react';
import './App.css';
import Movies from "./component/movies"

class App extends Component {
  state = {  }
  render() { 
    return (  
      <div>
      <main className="container">
        <Movies> </Movies>
      </main>
      </div>
    );
  }
}
 export default App;

