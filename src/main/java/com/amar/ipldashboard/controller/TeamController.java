package com.amar.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import com.amar.ipldashboard.Model.Match;
import com.amar.ipldashboard.Model.Team;
import com.amar.ipldashboard.repository.MatchRepository;
import com.amar.ipldashboard.repository.TeamRepository;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;

    private MatchRepository matchRepository;

    

    public TeamController(TeamRepository teamRepository,MatchRepository matchRepository) {
        this.teamRepository=teamRepository;
        this.matchRepository=matchRepository;
    }

    @GetMapping("team")
    public Iterable<Team> getAllTeam(){
        return this.teamRepository.findAll();
    }

    @GetMapping("team/{TeamName}")
    public Team getTeam(@PathVariable String TeamName){
       // Pageable pageable=PageRequest.of(0, 4);
        Team team=this.teamRepository.findByTeamName(TeamName);
        //team.setMatches(this.matchRepository.getByTeam1OrTeam2OrderByDateDesc(TeamName, TeamName,pageable));
        team.setMatches(this.matchRepository.findLastMatchesByTeam(TeamName, 3));
        return team;
    }

    @GetMapping("team/{TeamName}/matches")
    public List<Match> getMatchForTeam(@PathVariable String TeamName, @RequestParam int year){
            LocalDate startDate=LocalDate.of(year,1,1);
            LocalDate endDate=LocalDate.of(year+1,1,1);
           // return this.matchRepository.getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
            //    TeamName,startDate, endDate, TeamName, startDate, endDate);

            return this.matchRepository.getMatchsBetweenDates(TeamName, startDate, endDate);
    }
    
}
