import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import bagelImage from "../assets/noun-bagel-2505765.png";
import "./BagelNewForm.css";

const API = import.meta.env.VITE_API_URL;

function BagelNewForm() {
  const navigate = useNavigate();
  const [bagel, setBagel] = useState({
    name: "",
    description: "",
    is_gluten_free: false,
  });

  const addBagel = () => {
    fetch(`${API}/bagels`, {
      method: "POST",
      body: JSON.stringify(bagel),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(() => navigate("/bagels"))
      .catch((err) => console.error("Error adding bagel:", err));
  };

  const handleTextChange = (event) => {
    setBagel({ ...bagel, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setBagel({ ...bagel, [event.target.id]: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBagel();
  };

  // Animation variants for complex animation
  const bagelVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        scale: { type: "spring", stiffness: 100 },
      },
    },
  };

  return (
    <motion.div
      className="bagel-new-form-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 4,
          borderRadius: 2,
          boxShadow: 6,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(1px)",
        }}
      >
        {/* Add the image with a complex animation effect */}
        <motion.img
          src={bagelImage}
          alt="Bagel"
          style={{ width: "100px", marginBottom: "20px" }}
          variants={bagelVariants}
          initial="hidden"
          animate="visible"
        />
        <Typography
          variant="h5"
          gutterBottom
          sx={{ mb: 3, fontWeight: "bold" }}
        >
          Suggest a New Bagel!
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            id="name"
            label="Bagel Name"
            value={bagel.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Bagel Name"
            required
            fullWidth
            variant="outlined"
            sx={{
              mb: 3,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(1px)",
            }}
          />
          <TextField
            id="description"
            label="Bagel Description"
            value={bagel.description}
            onChange={handleTextChange}
            placeholder="Description of the bagel"
            multiline
            rows={2}
            required
            fullWidth
            variant="outlined"
            sx={{
              mb: 3,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(1px)",
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                id="is_gluten_free"
                onChange={handleCheckboxChange}
                checked={bagel.is_gluten_free}
                color="primary"
              />
            }
            label="Gluten Free"
            sx={{ mb: 3 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 2,
              mt: 3,
              width: "100%",
            }}
          >
            <Button
              type="submit"
              variant="outlined"
              sx={{
                flex: 1,
                borderColor: "black",
                color: "black",
                "&:hover": {
                  borderColor: "black",
                  backgroundColor: "transparent",
                },
              }}
            >
              Submit
            </Button>
            <Link
              to="/bagels"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                variant="outlined"
                sx={{
                  flex: 1,
                  borderColor: "black",
                  color: "black",
                  "&:hover": {
                    borderColor: "black",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Back to Bagels
              </Button>
            </Link>
          </Box>
        </form>
      </Paper>
    </motion.div>
  );
}

export default BagelNewForm;
