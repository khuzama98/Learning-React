import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = () =>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur distinctio, sequi laboriosam, minima amet consequuntur aut commodi error, doloribus temporibus esse iste voluptatum necessitatibus voluptate ratione rerum incidunt recusandae eligendi.</p>
        </div>
    )
}

export default Rainbow(About)