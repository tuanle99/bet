import React from "react";
import { Container } from "@mui/material";

function TitleComp(props) {
  const { title } = props;
  return (
    <Container
      style={{
        backgroundColor: "#1976d3",
        textAlign: "center",
        paddingBlock: "20px",
        color: "white",
      }}
    >
      {title}
    </Container>
  );
}

export default TitleComp;
