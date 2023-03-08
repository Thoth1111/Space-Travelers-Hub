import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';
import '../styles/mission.css';

const Missions = () => {
  const missionList = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missionList.map((mission) => (
          <tr key={mission.missionId}>
            <td>{mission.missionName}</td>
            <td>{mission.description}</td>
            <td>
              {mission.booked ? (
                <span className="active-status"><span>Active Member</span></span>)
                : (
                  <span className="inactive-status"><span>NOT A MEMBER</span></span>
                )}
            </td>
            <td>
              {mission.booked ? (
                <button type="button" className="leave-btn">
                  Leave Mission
                </button>
              )
                : (
                  <button
                    type="button"
                    className="join-btn"
                    onClick={() => handleJoinMission(mission.missionId)}
                  >
                    Join Mission
                  </button>
                )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
