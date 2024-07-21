import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Container,
  Grid,
} from "@mui/material";
import bagelImage from "../assets/AE742E85-F9ED-499E-9601-2814463F98D6_1_105_c.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Container className="about-content">
        <Box sx={{ padding: 3, textAlign: "center", marginTop: "300px" }}>
          {" "}
          <Typography variant="h3" gutterBottom>
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
