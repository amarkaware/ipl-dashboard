import {React} from 'react';
import {Link} from 'react-router-dom';
import "./MatchDetailsCard.scss"

export const MatchDetailsCard= ({teamName,match})=> {
    if(!match) return null;
    const otherName=match.team1===teamName ? match.team2 :match.team1;
    const otherTeamRoute=`/teams/${otherName}`;
    const isMatchWon=teamName===match.matchWinner;
  return (
    <div className={isMatchWon ?'MatchDetailsCard won-card' :'MatchDetailsCard loss-card'}>
      <div>
        <h3>Latest Matches</h3>
        <span className="vs" >vs </span>
        <h1><Link to={otherTeamRoute}>{otherName}</Link></h1>
        <h2 className="match-date">{match.date}</h2>
        <h3 className="match-venue">{match.venue}</h3>
        <h3 className="match-winner">{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
        </div>
        <div className="additional-details">
          <h3>First Innings</h3>
          <p>{match.team1}</p>
          <h3>Second Innings</h3>
          <p>{match.team2}</p>
          <h3>Man of the Match</h3>
          <p>{match.playerOfMatch}</p>
          <h3>Umpires</h3>
          <p>{match.umpire1},{match.umpire2}</p>
        </div>
      </div>
      
  );
}


