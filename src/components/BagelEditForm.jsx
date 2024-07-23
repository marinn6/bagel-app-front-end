// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import {
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Button,
//   Box,
//   Paper,
//   Typography,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
// } from "@mui/material";
// import "./BagelEditForm.css";

// const API = import.meta.env.VITE_API_URL;

// function BagelEditForm() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [bagel, setBagel] = useState({
//     name: "",
//     description: "",
//     type: "",
//     price: "",
//     is_gluten_free: false,
//     is_available: false,
//   });

//   const handleTextChange = (event) => {
//     setBagel({ ...bagel, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = (event) => {
//     const { id, checked } = event.target;
//     setBagel({ ...bagel, [id]: checked });
//   };

//   const handleTypeChange = (event) => {
//     setBagel({ ...bagel, type: event.target.value });
//   };

//   const updateBagel = () => {
//     fetch(`${API}/bagels/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(bagel),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then(() => navigate(`/bagels/${id}`))
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     fetch(`${API}/bagels/${id}`)
//       .then((res) => res.json())
//       .then((res) => {
//         setBagel({
//           name: res.name || "",
//           description: res.description || "",
//           type: res.type || "",
//           price: res.price || "",
//           is_gluten_free: res.is_gluten_free || false,
//           is_available: res.is_available || false,
//         });
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     updateBagel();
//   };

//   return (
//     <Box className="BagelEditFormContainer">
//       <Paper
//         elevation={3}
//         style={{
//           padding: "16px",
//           backgroundColor: "rgba(0, 0, 0, 0.2)",
//           backdropFilter: "blur(3px)",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           width: "100%",
//           maxWidth: "600px",
//           marginTop: "-10px",
//         }}
//       >
//         <Typography variant="h5" gutterBottom>
//           Edit this Bagel
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             id="name"
//             label="Name"
//             value={bagel.name}
//             onChange={handleTextChange}
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             id="description"
//             label="Description"
//             value={bagel.description}
//             onChange={handleTextChange}
//             fullWidth
//             margin="normal"
//           />
//           <FormControl fullWidth margin="normal" required>
//             <InputLabel id="type-label">Type</InputLabel>
//             <Select
//               id="type"
//               value={bagel.type}
//               onChange={handleTypeChange}
//               labelId="type-label"
//               label="Type"
//             >
//               <MenuItem value="Sweet">Sweet</MenuItem>
//               <MenuItem value="Savory">Savory</MenuItem>
//             </Select>
//           </FormControl>
//           <TextField
//             id="price"
//             label="Price"
//             value={bagel.price}
//             onChange={handleTextChange}
//             type="number"
//             fullWidth
//             margin="normal"
//             required
//             InputProps={{ style: { width: "100px" } }}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 id="is_gluten_free"
//                 checked={bagel.is_gluten_free}
//                 onChange={handleCheckboxChange}
//               />
//             }
//             label="Gluten-Free"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 id="is_available"
//                 checked={bagel.is_available}
//                 onChange={handleCheckboxChange}
//               />
//             }
//             label="Available"
//           />
//           <Box mt={2}>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               style={{
//                 width: "100px",
//                 padding: "8px 16px",
//                 borderRadius: "4px",
//               }}
//             >
//               Submit
//             </Button>
//             <Link to={`/bagels/${id}`} style={{ textDecoration: "none" }}>
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 style={{
//                   marginLeft: "8px",
//                   minWidth: "120px",
//                   maxWidth: "200px",
//                   padding: "8px 16px",
//                   borderRadius: "4px",
//                   color: "black",
//                   fontWeight: "bold",
//                   borderColor: "black",
//                 }}
//               >
//                 Back to Bagel
//               </Button>
//             </Link>
//           </Box>
//         </form>
//       </Paper>
//     </Box>
//   );
// }

// export default BagelEditForm;

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

const API = import.meta.env.VITE_BASE_URL;

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
    <Box
      className="BagelEditFormContainer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "16px",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(3px)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#000", fontWeight: "bold" }}
        >
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
            sx={{
              "& .MuiInputLabel-root": { color: "#000" },
              "& .MuiInputBase-root": { color: "#000" },
            }}
          />
          <TextField
            id="description"
            label="Description"
            value={bagel.description}
            onChange={handleTextChange}
            fullWidth
            margin="normal"
            sx={{
              "& .MuiInputLabel-root": { color: "#000" },
              "& .MuiInputBase-root": { color: "#000" },
            }}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="type-label" sx={{ color: "#000" }}>
              Type
            </InputLabel>
            <Select
              id="type"
              value={bagel.type}
              onChange={handleTypeChange}
              labelId="type-label"
              label="Type"
              sx={{
                "& .MuiInputBase-root": { color: "#000" },
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "#000" },
              }}
            >
              <MenuItem value="Sweet" sx={{ color: "#000" }}>
                Sweet
              </MenuItem>
              <MenuItem value="Savory" sx={{ color: "#000" }}>
                Savory
              </MenuItem>
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
            sx={{
              "& .MuiInputLabel-root": { color: "#000" },
              "& .MuiInputBase-root": { color: "#000" },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                id="is_gluten_free"
                checked={bagel.is_gluten_free}
                onChange={handleCheckboxChange}
                sx={{ color: "#000", "& .MuiSvgIcon-root": { color: "#000" } }}
              />
            }
            label="Gluten-Free"
            sx={{ color: "#000" }}
          />
          <FormControlLabel
            control={
              <Checkbox
                id="is_available"
                checked={bagel.is_available}
                onChange={handleCheckboxChange}
                sx={{ color: "#000", "& .MuiSvgIcon-root": { color: "#000" } }}
              />
            }
            label="Available"
            sx={{ color: "#000" }}
          />
          <Box mt={2} display="flex" gap={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: "100px",
                padding: "8px 16px",
                borderRadius: "4px",
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "#000" },
              }}
            >
              Submit
            </Button>
            <Link to={`/bagels/${id}`} style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  marginLeft: "8px",
                  minWidth: "120px",
                  maxWidth: "200px",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  color: "#fff",
                  borderColor: "#000",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#000" },
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
