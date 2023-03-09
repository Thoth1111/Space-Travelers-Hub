import { useSelector } from 'react-redux';
import '../styles/Reserved.css';

export default function ReservedRockets() {
  const rockets = useSelector((state) => state.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);
  if (bookedRockets.length !== 0) {
    return (
      <div className="reserved-container">
        {bookedRockets.map((rocket) => (
          <ul className="ul-container" key={rocket.id}>
            <li className="rocket-li">{rocket.rocketName}</li>
          </ul>
        ))}
      </div>
    );
  }
  return (
    <div>
      <h1>My Rockets</h1>
      <h1>No Rockets Reserved</h1>
    </div>
  );
}
