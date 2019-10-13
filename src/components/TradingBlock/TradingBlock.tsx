import * as React from 'react';
import styles from './TradingBlock.module.css';
import LoadingSpinner from './components/LoadingSpinner';
import Team from './components/Team';
// import { fetchLeagueUsers, fetchLeagueRosters } from './API/api';
import { TeamOwner } from './utils/types';
import Modal from './components/Modal';

const TradingBlock = () => {
  const [teamOwners] = React.useState<TeamOwner[]>([]);
  const [isLoading] = React.useState<boolean>(false);
  const [hasError] = React.useState<boolean>(true);

  // const [teamOwners, setTeamOwners] = React.useState<TeamOwner[]>([]);
  // const [isLoading, toggleLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    // const leagueUserPromise = fetchLeagueUsers();
    // const leagueRosterPromise = fetchLeagueRosters();
    // Promise.all([leagueUserPromise, leagueRosterPromise]).then(
    //   ([teamOwners, rosters]) => {
    //     teamOwners.forEach(owner => {
    //       const roster = rosters.find(roster => {
    //         return roster.ownerID === owner.userID;
    //       });
    //       if (roster) {
    //         owner.players = roster.players;
    //       }
    //     });
    //     // this causes a double render.. I think I'd have to move to React.useReducer to update two things at once.
    //     console.log(teamOwners);
    //     toggleLoading(false);
    //     setTeamOwners(teamOwners);
    //   },
    // );

  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>The Trading Block</h1>
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className={styles.teams}>
          {teamOwners.map(teamOwner => {
            return (
              <div className={styles.teamContainer} key={teamOwner.userID}>
                <Team owner={teamOwner} />
              </div>
            );
          })}
        </div>
      )}
      {hasError && (<Modal message={"test message"} closeModal={()=>{}}/>)}
    </div>
  );
};

export default TradingBlock;
