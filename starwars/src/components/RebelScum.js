import React from 'react';

const RebelScum = scum => {
  return (
    <li><h2><span className="WANTED">WANTED</span>  <br />
    {scum.name}</h2>
    <h3>For High Treason</h3>
    <ul className="innerList">
    <p>Height: <strong>{scum.height} cm</strong></p>
    <p>Mass: <strong>{scum.mass} kg</strong></p>
    <p>Hair: <strong>{scum.hair}</strong></p>
    <p>Eyes: <strong>{scum.eyes}</strong></p>
    <p>Tone: <strong>{scum.skin}</strong></p>
    <p>Born: <strong>{scum.born}</strong></p>
    <p className="WANTED">DO NOT APPROACH</p></ul></li>
  );
}

// <p>Species: {scum.species}</p> <-- needs a GET and JSON conversion, probs

export default RebelScum;
