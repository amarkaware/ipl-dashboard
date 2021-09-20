import {React, useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailsCard } from '../components/MatchDetailsCard';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';



export const MatchPages= ()=> {

  const [matches,setMatches]=useState([]);
  const {teamName,year}=useParams();
 
  useEffect(
      ()=>{
          const fetchMatchs=async()=>{
                  const response=await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
                  const data=await response.json();
                  console.log(data);
                  setMatches(data)
          }
          fetchMatchs();

      },[teamName,year]);

      

      
  return (
    <div className="MatchPages">
        <div className="year-selector">
          <h3>Select Year</h3>
          <YearSelector teamName={teamName}/>
        </div>
        <div>
      
          <h1 className="page-Heading">{teamName} Matches in {year}</h1>
          {
          matches.map(match =><MatchDetailsCard  key={match.id} teamName={teamName} match={match}/>)
          }
       </div>
      </div>
      
  );

}


