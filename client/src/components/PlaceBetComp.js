import React, { useState, useEffect } from "react";
import {
  Container,
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  TextField,
  Grid,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flex: 1,
}));

function PlaceBetComp() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => (
    setOpenModal(true),
    setPerson1Value(null),
    setPerson2Value(null),
    setCondition("")
  );
  const handleClose = () => setOpenModal(false);

  const [condition, setCondition] = useState("");

  const handleConditionChange = (event) => {
    setError(null);
    setCondition(event.target.value);
  };

  const [error, setError] = useState(null);

  const personList = [
    { id: 141, name: "person1" },
    { id: 242, name: "person2" },
  ];

  const [person1anchorEl, setPerson1anchorEl] = useState(null);
  const [person1Value, setPerson1Value] = useState(null);
  const openPerson1 = Boolean(person1anchorEl);
  const handleClickPerson1 = (event) => {
    setPerson1anchorEl(event.currentTarget);
  };
  const handleClosePerson1 = (event) => {
    setError(null);
    setPerson1Value({ id: event.target.id, name: event.target.innerText });
    setPerson1anchorEl(null);
  };

  const [person2anchorEl, setPerson2anchorEl] = useState(null);
  const [person2Value, setPerson2Value] = useState(null);
  const openPerson2 = Boolean(person2anchorEl);
  const handleClickPerson2 = (event) => {
    setPerson2anchorEl(event.currentTarget);
  };
  const handleClosePerson2 = (event) => {
    setError(null);
    setPerson2Value({ id: event.target.id, name: event.target.innerText });
    setPerson2anchorEl(null);
  };

  function checkAllCondition() {
    if (person1Value === null || person2Value === null || condition === "") {
      setError("Please input all required");
    } else if (
      person1Value.name !== null &&
      person1Value.name !== undefined &&
      person2Value.name !== null &&
      person2Value.name !== undefined
    ) {
      if (person1Value.name === "" || person2Value.name === "") {
        setError("Please input all required");
      } else if (person1Value.name === person2Value.name) {
        setError("Error: Cannot Bet with Yourself");
      } else {
        setOpenModal(false);
      }
    } else {
      setOpenModal(false);
    }
  }

  return (
    <Container
      style={{
        textAlign: "center",
      }}
    >
      <Button onClick={handleOpen}>Place Bet !</Button>
      <Modal
        aria-labelledby="Place Bet"
        aria-describedby="place-bet-here"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="Place Bet" variant="h5" component="h2">
              Place Bet Here!
            </Typography>
            <Typography variant="h6" component="h2" style={{ color: "red" }}>
              * Required
            </Typography>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={6}>
                <Item>
                  <Button
                    id="person1-button"
                    aria-controls={openPerson1 ? "person1-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openPerson1 ? "true" : undefined}
                    onClick={handleClickPerson1}
                  >
                    {person1Value === null || person1Value.name === ""
                      ? "Select Person 1 *"
                      : person1Value.name}
                  </Button>
                  <Menu
                    id="person1-menu"
                    anchorEl={person1anchorEl}
                    open={openPerson1}
                    onClose={handleClosePerson1}
                    MenuListProps={{
                      "aria-labelledby": "person1-button",
                    }}
                  >
                    {personList.map((e) => {
                      return (
                        <MenuItem
                          key={e.id}
                          id={e.id}
                          onClick={handleClosePerson1}
                        >
                          {e.name}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <Button
                    id="person2-button"
                    aria-controls={openPerson2 ? "person2-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openPerson2 ? "true" : undefined}
                    onClick={handleClickPerson2}
                  >
                    {person2Value === null || person2Value.name === ""
                      ? "Select Person 2 *"
                      : person2Value.name}
                  </Button>
                  <Menu
                    id="person2-menu"
                    anchorEl={person2anchorEl}
                    open={openPerson2}
                    onClose={handleClosePerson2}
                    MenuListProps={{
                      "aria-labelledby": "person2-button",
                    }}
                  >
                    {personList.map((e) => {
                      return (
                        <MenuItem
                          key={e.id}
                          id={e.id}
                          onClick={handleClosePerson2}
                        >
                          {e.name}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Item>
              </Grid>

              <Grid item xs={12}>
                <Item>
                  <TextField
                    id="bet-condition"
                    placeholder="Set Bet Condition"
                    label="Condition"
                    multiline
                    required
                    maxRows={6}
                    onChange={handleConditionChange}
                    style={{ width: "100%" }}
                  />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Button
                    variant="contained"
                    onClick={() => checkAllCondition()}
                    style={{ width: "100%" }}
                  >
                    Create Bet
                  </Button>
                </Item>
              </Grid>
              {error !== null ? (
                <Grid item xs={12}>
                  <Item>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{ color: "red" }}
                    >
                      {error}
                    </Typography>
                  </Item>
                </Grid>
              ) : (
                <div></div>
              )}
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
}

export default PlaceBetComp;
