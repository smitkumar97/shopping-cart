import React, { Component } from 'react';
import Navbar from "./component/navbar";
import './App.css';
import Counters from "./component/counters"; 

class App extends Component {
      state = {  
        counters: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0},
        ]
    }

    handleIncrement = ( counter) =>{
        const counters= [...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value++;
        this.setState({counters});
        // console.log(counter);
    }

    
    handleDecrement = ( counter) =>{
        const counters= [...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter};
        if (counters[index].value ===0) {
          return null;
        }
        counters[index].value--;
        this.setState({counters});
        // console.log(counter);
    }

    handleReset = () =>{
       const counters= this.state.counters.map( c => { 
            c.value=0;
            return c;
        });
        this.setState({counters});
    }

    handleDelete = counterId => {
        const counters= this.state.counters.filter(c => c.id !==counterId);
        this.setState({counters});
        console.log("event called", counterId);
    }

  render() { 
    return ( <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value> 0).length}/>
      <main className="container">
      <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}

      />
      </main>
      </React.Fragment>
       );

  }
}

export default App;
