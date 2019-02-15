import React from 'react';
import RebelScum from './RebelScum';
import './StarWars.css';

const ImperialMarch = marchers => {
  return (
    <ul className="ImperialMarch">
      {marchers.incArray.map(scum => {
        return (
          <RebelScum
            key={scum.name}
            name={scum.name}
            born={scum.birth_year}
            height={scum.height} mass={scum.mass}
            hair={scum.hair_color} eyes={scum.eye_color} skin={scum.skin_color}
          />
        );
      })}
    </ul>
  );
};

// hair_color": "blond",
// "skin_color": "fair",
// "eye_color": "blue",

export default ImperialMarch;
