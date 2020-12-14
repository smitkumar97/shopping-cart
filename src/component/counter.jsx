import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value : this.props.value,
        id : this.props.id,
        tags : []
     };

    //  renderTags(){
    //      if(this.state.tags.length===0) return null
    //     return <ul>{this.state.tags.map(tag => <li keys={tag}></li>)}</ul>
    //  }

     handeIncreament = () => {
         this.setState({value : this.state.value+1});
     }

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handeIncreament} className="btn btn-secondary btn-sm m-2">Increament</button>
                <button onClick={ () => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>

                <br/>
                {/* {this.state.tags.length===0 && null} */}
                {/* {this.renderTags()} */}
    
            </div>
            );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? "Zero"  : value; 
    }
} 

 
export default Counter;