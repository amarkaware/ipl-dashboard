package com.amar.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;

import com.amar.ipldashboard.Model.Match;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MatchRepository extends CrudRepository<Match,Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamname1,String teamname2,Pageable pageable);

    List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc
    (String teamname1,LocalDate LocalDate1,LocalDate LocalDate2,String teamname2,LocalDate LocalDate3,LocalDate LocalDate4);

    @Query("select m from Match m where (m.team1=:teamname1  or m.team2=:teamname1) and m.date Between :startDate and :endDate order by m.date desc")
    List<Match> getMatchsBetweenDates
        (@Param("teamname1") String  teamname1,
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate);

    default List<Match> findLastMatchesByTeam(String teamname1,int count){
        return getByTeam1OrTeam2OrderByDateDesc(teamname1,teamname1,PageRequest.of(0, count));

    }
}
