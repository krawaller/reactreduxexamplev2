/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

import React from 'react'

const Wrapper = (props)=> (
  <div className="wrapper">
    <h2>Superhero battle arena 2000!</h2>
    {props.children}
  </div>
);

export default Wrapper;
