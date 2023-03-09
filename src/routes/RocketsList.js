import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import '../styles/Rockets.css'

function RocketsList() {
  const rockets = useSelector((state) => state.rockets);
  return (
    <div className="rockets-container">
      <ul className="rockets-ul-container">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            rocketName={rocket.rocketName}
            description={rocket.description}
            flickrImages={rocket.flickrImages}
            reserved={rocket.reserved}
          />
        ))}
      </ul>
    </div>
  );
}

export default RocketsList;
