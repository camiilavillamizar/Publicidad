import React from 'react';
import Circle from './Circle'

import "../styles/box1.css";

import ima from '../images/principal.png';
import im1 from '../images/sombras.png';
import im2 from '../images/cara.jpg';
import im3 from '../images/uñas.jpg';

class Box1 extends React.Component{
    render(){
        var imagenes = [
            <Circle name = {im1}/>,
            <Circle name = {im2}/>,
            <Circle name = {im3}/>,
        ]

        return <div className="box">
            <img src= {ima}/>
            <circles>
                {imagenes}
            </circles>
        </div>
    }
}

export default Box1;