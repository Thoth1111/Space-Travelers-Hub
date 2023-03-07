import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/mission.css';

const Missions = () => {
  const missionList = useSelector((state) => state.missions);

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
            <td>{mission.booked ? (
                <div className='active-status'><span>Active Member</span></div>)
                : (
                <div className='inactive-status'><span>NOT A MEMBER</span></div>
                )}
            </td>
            <td>{mission.booked ? (
                <button type='button' className='leave-btn'>
                    Leave Mission
                </button>)
                : (
                <button type='button' className='join-btn'>
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
