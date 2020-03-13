import React from 'react';
import Box1 from './Box1'
import Info from './Info';
import "../styles/Principal.css"



class Principal extends React.Component{
    render(){
        return <div className= "container">
            <Box1/>
            <Info/>
        </div>
    }
}

export default Principal;