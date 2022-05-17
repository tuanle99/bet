import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function createData(id, name, points) {
  return { id, name, points };
}

const listName = [createData(1, "Tuan", 100)];

function LeaderboardComp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {listName.map((e) => {
        return (
          <Grid container spacing={2} key={e.id}>
            <Grid item xs={12}>
              <Item>
                {e.name} - {e.points}
              </Item>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}

export default LeaderboardComp;
