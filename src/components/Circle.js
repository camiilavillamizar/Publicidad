import React from 'react';
import "../styles/Circle.css";



class Circle extends React.Component{
    render(){
        return <div className="circle">
            <img src = {this.props.name}/>
        </div>
    }
}

export default Circle;