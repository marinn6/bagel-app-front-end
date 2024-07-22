import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Paper,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import "./BagelEditForm.css";

const API = import.meta.env.VITE_API_URL;

function BagelEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bagel, setBagel] = useState({
    name: "",
    description: "",
    type: "",
    price: "",
    is_gluten_free: false,
    is_available: false,
  });

  const handleTextChange = (event) => {
    setBagel({ ...bagel, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setBagel({ ...bagel, [id]: checked });
  };

  const handleTypeChange = (event) => {
    setBagel({ ...bagel, type: event.target.value });
  };

  const updateBagel = () => {
    fetch(`${API}/bagels/${id}`, {
      method: "PUT",
      body: JSON.stringify(bagel),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => navigate(`/bagels/${id}`))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`${API}/bagels/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setBagel({
          name: res.name || "",
          description: res.description || "",
          type: res.type || "",
          price: res.price || "",
          is_gluten_free: res.is_gluten_free || false,
          is_available: res.is_available || false,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBagel();
  };

  return (
    <Box className="BagelEditFormContainer">
      <Paper
        elevation={3}
        style={{
          padding: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(3px)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "600px",
          marginTop: "0px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Edit this Bagel
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="Name"
            value={bagel.name}
            onChange={handleTextChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            id="description"
            label="Description"
            value={bagel.description}
            onChange={handleTextChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              id="type"
              value={bagel.type}
              onChange={handleTypeChange}
              labelId="type-label"
              label="Type"
            >
              <MenuItem value="Sweet">Sweet</MenuItem>
              <MenuItem value="Savory">Savory</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="price"
            label="Price"
            value={bagel.price}
            onChange={handleTextChange}
            type="number"
            fullWidth
            margin="normal"
            required
            InputProps={{ style: { width: "100px" } }}
          />
          <FormControlLabel
            control={
              <Checkbox
                id="is_gluten_free"
                checked={bagel.is_gluten_free}
                onChange={handleCheckboxChange}
              />
            }
            label="Gluten-Free"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="is_available"
                checked={bagel.is_available}
                onChange={handleCheckboxChange}
              />
            }
            label="Available"
          />
          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                width: "100px",
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              Submit
            </Button>
            <Link to={`/bagels/${id}`} style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="secondary"
                style={{
                  marginLeft: "8px",
                  minWidth: "120px",
                  maxWidth: "200px",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  color: "black",
                  fontWeight: "bold",
                  borderColor: "black",
                }}
              >
                Back to Bagel
              </Button>
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default BagelEditForm;
