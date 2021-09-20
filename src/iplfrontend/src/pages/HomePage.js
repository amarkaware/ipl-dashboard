import {React, useEffect,useState} from 'react';
import './HomePage.scss';
import { Teamtiles } from '../components/Teamtitles';

export const HomePage= ()=> {

    const [teams,setTeams]=useState([]);
   
    useEffect(
        ()=>{
            const fetchTeams=async()=>{
                    const response=await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                    const data=await response.json();
                    console.log(data);
                    setTeams(data)
            }
            fetchTeams();

        },[]);

        
  return (
    <div className="HomePage">
        <div className="header-section">
            <h1 className="app-name">My IPL DASHBOARD</h1>
        </div>
       <div className="team-grids">
           {teams.map(team=><Teamtiles key={team.id} teamName={team.teamName}/>)}
           
       </div>
      </div>
      
  );

}

