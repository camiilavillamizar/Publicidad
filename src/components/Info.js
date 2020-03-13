import React from 'react';
import "../styles/Info.css";


class Info extends React.Component{
    render(){
        return <div className = "informacion">
            <section class = "first_col">
                <line>
                    <p>ABOUT OUR</p>
                </line>
                <artist>
                    <p>Artist</p>
                </artist> 
                <p>Hairdressers cut, style and color hair, and they may also perform permanent wave, straightening, and bleaching treatments.</p>
                <section class="col1">
                    <lineup>
                        <p>20% OFF</p>
                    </lineup>
                    <linedown>
                        <p>FIRST VISIT</p>
                    </linedown>
                    </section>
                    <section class="col2">
                    <p>BOOK NOW!</p>
                </section>
            </section>
            <section class = "second_col">
                <h1>MAKEUP</h1>
                <h6>Artist</h6>
                <div class= "info">
                    <p>
                        123 Overview Road<br/>
                        Roxboro TN, 12345<br/>
                        P. 555.123.12345<br/>
                        Beautysalonhere@Email.com
                    </p>
                </div>
            </section>
        </div>
    }
}

export default Info;