import React from "react";
import { Container } from "@mui/material";
import CurrentBetComp from "../components/CurrentBetComp";
import TitleComp from "../components/TitleComp";
import LeaderboardComp from "../components/LeaderboardComp";
import PlaceBetComp from "../components/PlaceBetComp";

function Home() {
  return (
    <Container>
      <Container sx={{ mt: 3 }}>
        <TitleComp title={"Current On Going Bet"} />
        <CurrentBetComp />
      </Container>
      <Container sx={{ mt: 3 }}>
        <TitleComp title={"Leaderboard"} />
        <LeaderboardComp />
      </Container>
      <Container sx={{ mt: 3 }}>
        <PlaceBetComp />
      </Container>
    </Container>
  );
}

export default Home;
