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
            <td>Conditional component</td>
            <td>Conditional component</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
