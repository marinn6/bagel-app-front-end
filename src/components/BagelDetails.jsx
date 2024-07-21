import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Box,
  CircularProgress,
  Paper,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import "./BagelDetails.css";

const API = import.meta.env.VITE_API_URL;

function BagelDetails() {
  const [bagel, setBagel] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false); // State to control dialog open/close
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch bagel details on component mount
  useEffect(() => {
    fetch(`${API}/bagels/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch bagel");
        }
        return res.json();
      })
      .then((data) => {
        setBagel(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Handle bagel deletion
  const handleDelete = () => {
    fetch(`${API}/bagels/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete bagel");
        }
        return res.json();
      })
      .then(() => {
        setOpenDialog(false); // Close dialog after deletion
        navigate("/bagels");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // Open the confirmation dialog
  const openConfirmDialog = () => {
    setOpenDialog(true);
  };

  // Close the confirmation dialog
  const closeConfirmDialog = () => {
    setOpenDialog(false);
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box className="BagelDetailsContainer">
      <Paper
        elevation={3}
        className="BagelDetailsPaper"
        sx={{
          background: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(3px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "24px",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {bagel.name}
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, color: "#f5f5f5", fontWeight: "bold" }}
        >
          <strong>ID:</strong> {bagel.id}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, color: "#f5f5f5", fontWeight: "bold" }}
        >
          <strong>Description:</strong> {bagel.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, color: "#f5f5f5", fontWeight: "bold" }}
        >
          <strong>Type:</strong> {bagel.type}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, color: "#f5f5f5", fontWeight: "bold" }}
        >
          <strong>Price:</strong> ${bagel.price.toFixed(2)}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, color: "#f5f5f5", fontWeight: "bold" }}
        >
          <strong>Gluten-Free:</strong> {bagel.is_gluten_free ? "Yes" : "No"}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: 2, color: "#f5f5f5", fontWeight: "bold" }}
        >
          <strong>Available:</strong> {bagel.is_available ? "Yes" : "No"}
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Box
          display="flex"
          justifyContent="space-between"
          marginTop={2}
          gap={2}
        >
          <Button
            variant="outlined"
            onClick={() => navigate("/bagels")}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              borderRadius: "4px",
              width: "200px",
              padding: "8px 16px",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Back to Bagels
          </Button>
          <Link to={`/bagels/${id}/edit`}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                color: "#fff",
                borderRadius: "4px",
                width: "100px",
                padding: "8px 16px",
              }}
            >
              Edit
            </Button>
          </Link>
          <Button
            variant="contained"
            color="error"
            onClick={openConfirmDialog}
            sx={{
              borderRadius: "4px",
              width: "100px",
              padding: "8px 16px",
            }}
          >
            Delete
          </Button>
        </Box>
      </Paper>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={closeConfirmDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this bagel?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeConfirmDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default BagelDetails;
