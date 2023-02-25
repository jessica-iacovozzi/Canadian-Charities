import React from 'react';

function Charities(props) {
  return (
    <div>
      <h1>Canadian Charities</h1>
      <br></br>
      {props.charities.map((charity) => {
        return (
          <div key={charity.id}>
            <h2>{charity.attributes.name}</h2>
            <p>{charity.attributes.slogan}</p>
            <br></br>
          </div>
        );
      })}
    </div>
  )
}

export default Charities
