import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelRockets, reserveRockets } from '../../redux/rockets.js/rockets';
import './Rockets.css';

const Rocket = (props) => {
  const {
    id, rocketName, description, flickrImages, reserved,
  } = props;

  const dispatch = useDispatch();

  const reserveHandler = () => { dispatch(reserveRockets(id)); };
  const cancelHandler = () => { dispatch(cancelRockets(id)); };

  return (
    <li className="rocket-container" id={id}>
      <div className="img-container">
        <img src={flickrImages} alt="logo" />
      </div>
      <div className="info-container">
        <h2>{rocketName}</h2>
        <div className="description">
          {reserved && (<span className="badge">Reserved</span>)}
          <span> </span>
          {description}
        </div>
        <div>
          {reserved && (
            <button onClick={() => { cancelHandler(); }} className="rocket-cancel" type="button">Cancel Reservation</button>
          )}
          {!reserved && (
            <button onClick={() => { reserveHandler(); }} className="rocket-reserve" type="button">Reserve Rocket</button>
          )}
        </div>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  reserved: false,
};

export default Rocket;
