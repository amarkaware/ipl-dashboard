import {React} from 'react';
import { Link } from 'react-router-dom';
import './YearSelector.scss'


export const YearSelector= ({teamName})=> {
    let years=[];
    const startyear=process.env.REACT_APP_DATA_START_YEAR;
    const endyear=process.env.REACT_APP_DATA_END_YEAR;

    for (let i=startyear;i<=endyear;i++){
        console.log(i)
        years.push(i);
    }
    
  return (
    <ol className="year-list">
     {years.map(year=>(

             <li key={year}>
                <Link  to={`/teams/${teamName}/matches/${year}`}> {year} </Link>
            </li>
     ))}
    </ol>
      
  );
}


