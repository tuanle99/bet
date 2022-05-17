import React from "react";
import {
  Container,
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
} from "@mui/material";

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

function PlaceBetComp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="Place Bet" variant="h6" component="h2">
              Place Bet Here!
            </Typography>
            <Typography id="place-bet-here" sx={{ mt: 2 }}>
              This is where you will place your bet!
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
}

export default PlaceBetComp;
