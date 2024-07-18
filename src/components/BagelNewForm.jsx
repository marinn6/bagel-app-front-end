import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import "./BagelNewForm.css";

const API = import.meta.env.VITE_API_URL;

function BagelNewForm() {
  const navigate = useNavigate();
  const [bagel, setBagel] = useState({
    name: "",
    type: "",
    price: "",
    description: "",
    is_glutenFree: false,
    is_available: true,
  });

  // Add a bagel. Redirect to the index view.
  const addBagel = () => {
    fetch(`${API}/bagels`, {
      method: "POST",
      body: JSON.stringify(bagel),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/bagels");
      })
      .catch((err) => console.log(err));
  };

  // Handle changes for text, number, and dropdown inputs
  const handleTextChange = (event) => {
    const { id, value, type, checked } = event.target;
    setBagel((prevBagel) => ({
      ...prevBagel,
      [id]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? parseFloat(value)
          : value,
    }));
  };

  // Handle dropdown changes
  const handleSelectChange = (event) => {
    setBagel((prevBagel) => ({
      ...prevBagel,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBagel();
  };

  return (
    <Box className="BagelNewFormContainer">
      <Box className="BagelNewFormBox">
        <Typography variant="h4" gutterBottom>
          Add a New Bagel
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="Name"
            value={bagel.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Bagel"
            fullWidth
            margin="normal"
            required
          />

          <TextField
            id="description"
            label="Description"
            value={bagel.description}
            onChange={handleTextChange}
            placeholder="Give a short description of the bagel."
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              name="type"
              value={bagel.type}
              onChange={handleSelectChange}
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
            type="number"
            onChange={handleTextChange}
            placeholder="Price"
            fullWidth
            margin="normal"
            required
          />

          <FormControlLabel
            control={
              <Checkbox
                id="is_glutenFree"
                onChange={handleTextChange}
                checked={bagel.is_glutenFree}
              />
            }
            label="Gluten Free"
          />

          <FormControlLabel
            control={
              <Checkbox
                id="is_available"
                onChange={handleTextChange}
                checked={bagel.is_available}
              />
            }
            label="Available"
          />

          <Box display="flex" justifyContent="space-between" marginTop={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/bagels")}
            >
              Back to Bagels
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default BagelNewForm;
