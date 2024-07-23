import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Container,
  Grid,
} from "@mui/material";
import { createGlobalStyle } from "styled-components";
import bagelImage from "../assets/Designer (15).png";
import "./About.css";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

  .neon {
    font-family: 'Dancing Script', cursive;
    font-size: 3rem; 
    font-weight: bold; 
    color: #fff; 
    position: relative;
    display: inline-block;
    text-shadow: 
      0 0 5px #8B4513, /* SaddleBrown */
      0 0 10px #8B4513, 
      0 0 15px #A0522D, /* Sienna */
      0 0 20px #A0522D, 
      0 0 30px #D2691E, /* Chocolate */
      0 0 40px #D2691E; 
    animation: neon 1.5s infinite alternate;
  }

  @keyframes neon {
    from {
      text-shadow: 
        0 0 5px #8B4513, 
        0 0 10px #8B4513, 
        0 0 15px #A0522D, 
        0 0 20px #A0522D, 
        0 0 30px #D2691E, 
        0 0 40px #D2691E;
    }
    to {
      text-shadow: 
        0 0 10px #8B4513, 
        0 0 20px #8B4513, 
        0 0 30px #A0522D, 
        0 0 40px #A0522D, 
        0 0 50px #D2691E, 
        0 0 60px #D2691E;
    }
  }
`;

const About = () => {
  return (
    <div className="about-container">
      <GlobalStyle />
      <Container className="about-content">
        <Box sx={{ padding: 3, textAlign: "center", marginTop: "300px" }}>
          <Typography variant="h3" gutterBottom className="neon">
            hello, Delicious!~
          </Typography>
          <Paper elevation={3} className="paper">
            <Grid container spacing={3} className="grid">
              <Grid item xs={12} md={4}>
                <img
                  src={bagelImage}
                  alt="The Bagel Lab"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ marginTop: "16px", fontWeight: "bold" }}
                >
                  Meet the Lab Partners!
                </Typography>
                <Typography variant="body1" paragraph></Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ marginTop: "50px" }}
                >
                  Lab Location:
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  style={{ marginBottom: "18px" }}
                >
                  Right side of Jamaica room, 1st and 2nd chairs in the 3rd row
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ marginTop: "18px" }}
                >
                  How we started:
                </Typography>
                <Typography variant="body1" paragraph>
                  Our bagel brilliance was born during a 10-minute break one
                  morning, fueled by caffeine and extreme exhaustion. What
                  started as a simple idea to craft delicious, high-quality
                  bagels quickly spiraled into our local fame. Now, we're the
                  go-to spot for unique flavors and a warm, welcoming vibe—
                  <span className="highlight">
                    {" "}
                    <strong>
                      <em>WHERE CULTURE MEETS THE BAGEL</em>
                    </strong>
                  </span>
                  .
                </Typography>
              </Grid>
            </Grid>
            <Divider className="divider" />
            <div className="iframe-container">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.93570303955078%2C40.74644625998057%2C-73.92317199707031%2C40.751212276726664&layer=mapnik&marker=40.749375,-73.929699"
                width="100%"
                height="100%"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default About;
