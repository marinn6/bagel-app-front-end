import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FourOFour.css";

export default function FourOFour() {
  const navigate = useNavigate();

  return (
    <Box className="fourOFour-root">
      <Box className="fourOFour-content">
        <Typography className="fourOFour-title" variant="h1">
          404
        </Typography>
        <Typography className="fourOFour-subtitle" variant="h5">
          You're looking for donuts, we're a BAGEL Lab!
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          className="fourOFour-button"
        >
          Go Home
        </Button>
      </Box>
    </Box>
  );
}
