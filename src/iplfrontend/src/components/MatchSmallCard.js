import {React} from 'react';
import {Link} from 'react-router-dom';
import "./MatchSmallCard.scss"

export const MatchSmallCard= ({teamName,match})=> {
    if(!match) return null;
    const otherName=match.team1===teamName ? match.team2 :match.team1;
    const otherTeamRoute=`/teams/${otherName}`;
    const isMatchWon=teamName===match.matchWinner;
  return (
    <div  className={isMatchWon ?'MatchSmallCard won-card' :'MatchSmallCard loss-card'}>
        <span className="vs" >vs </span>
        <h1><Link to={otherTeamRoute}>{otherName}</Link></h1>
        <p className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</p>
      </div>
      
  );
}


