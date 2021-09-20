import {React} from 'react';
import { Link } from 'react-router-dom';
import "./Teamtitles.scss"

export const Teamtiles= ({teamName})=> {
    
  return (
    <div  className="TeamTitle">
         
        <h3>
            <Link to={`/teams/${teamName}`}>{teamName}</Link>
            
        </h3>
    </div>
      
  );
}


