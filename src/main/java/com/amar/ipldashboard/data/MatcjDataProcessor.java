package com.amar.ipldashboard.data;

import java.time.LocalDate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.amar.ipldashboard.Model.Match;

import org.springframework.batch.item.ItemProcessor;

public class MatcjDataProcessor  implements ItemProcessor<MatcjInput, Match> {
 
  private static final Logger log = LoggerFactory.getLogger(MatcjDataProcessor.class);

  @Override
  public Match process(final MatcjInput matcjInput) throws Exception {
    
    Match match=new Match();
    match.setId(Long.parseLong( matcjInput.getId()));
    match.setCity(matcjInput.getCity());
    match.setDate(LocalDate.parse(matcjInput.getDate()));
    match.setPlayerOfMatch(matcjInput.getPlayer_of_match());
    match.setVenue(matcjInput.getVenue());
    // set team 1 and team 2 on depending on inning order
    String firstInningsTeam,secondInningsTeam;

    if("bat".equals(matcjInput.getToss_decision())){
        firstInningsTeam=matcjInput.getToss_winner();
        secondInningsTeam=matcjInput.getToss_winner()
        .equals(matcjInput.getTeam1())?matcjInput.getTeam2():matcjInput.getTeam1();
    }else{
        secondInningsTeam=matcjInput.getToss_winner();
        firstInningsTeam=matcjInput.getToss_winner()
        .equals(matcjInput.getTeam1())?matcjInput.getTeam2():matcjInput.getTeam1();
    }
    match.setTeam1(firstInningsTeam);
    match.setTeam2(secondInningsTeam);
    match.setTossWinner(matcjInput.getToss_winner());
    match.setMatchWinner(matcjInput.getWinner());
    match.setTossDecision(matcjInput.getToss_decision());
    match.setResult(matcjInput.getResult());
    match.setResultMargin(matcjInput.getResult_margin());
    match.setUmpire1(matcjInput.getUmpire1());
    match.setUmpire2(matcjInput.getUmpire2());

    return match;
  }

}
    

