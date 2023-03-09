import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/profile.css';

const Profile = () => {
  const allMissions = useSelector((state) => state.missions);
  const joinedMissions = allMissions.filter((mission) => mission.booked !== false);

  return (
    <section className="profile">
      <h1>My Missions</h1>
      <table className="missions">
        <tbody>
          {joinedMissions.map((mission) => (
            <tr className="entry" key={mission.missionId}>
              <td>
                {' '}
                <span className="entry-name">{mission.missionName}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="rockets" />
    </section>
  );
};

export default Profile;
