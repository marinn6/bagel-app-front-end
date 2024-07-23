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
  Rating,
} from "@mui/material";
import "./BagelDetails.css";

const API = import.meta.env.VITE_BASE_URL;

// Sample reviews data
const sampleReviews = [
  {
    id: 1,
    comment:
      "Absolutely delicious! And the Lab is only 3 tables from where I work!",
    author: "Colors G.",
    rating: 5,
  },
  {
    id: 2,
    comment:
      "Love the texture and flavor. And they deliver during Sunday Office Hours too!",
    author: "Yassbutno S.",
    rating: 5,
  },
  {
    id: 3,
    comment:
      "The Mango Sticky Rice Bagel was amazing! Buuuut, COULD BE SPICIER!",
    author: "Justice O.",
    rating: 5,
  },
];

function BagelDetails() {
  const [bagel, setBagel] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState(sampleReviews);
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

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
        setOpenDialog(false);
        navigate("/bagels");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const openConfirmDialog = () => {
    setOpenDialog(true);
  };

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
    <Box className="BagelDetailsContainer" sx={{ display: "flex" }}>
      {/* Bagel Details Section */}
      <Paper
        elevation={3}
        className="BagelDetailsPaper"
        sx={{
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(2px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "24px",
          width: "100%",
          maxWidth: "350px",
          marginRight: "40px",
          top: "25px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          {bagel.name}
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            color: "#f5f5f5",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          <strong>ID:</strong> {bagel.id}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            color: "#f5f5f5",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          <strong>Description:</strong> {bagel.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            color: "#f5f5f5",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          <strong>Type:</strong> {bagel.type}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            color: "#f5f5f5",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          <strong>Price:</strong> ${bagel.price.toFixed(2)}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            color: "#f5f5f5",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          <strong>Gluten-Free:</strong> {bagel.is_gluten_free ? "Yes" : "No"}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            color: "#f5f5f5",
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
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
              borderColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "4px",
              width: "200px",
              padding: "8px 16px",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Home
          </Button>
          <Link to={`/bagels/${id}/edit`}>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "4px",
                width: "100px",
                padding: "8px 16px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Edit
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="error"
            onClick={openConfirmDialog}
            sx={{
              color: "#fff",
              borderColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "4px",
              width: "100px",
              padding: "8px 16px",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Delete
          </Button>
        </Box>
      </Paper>

      {/* Reviews Section */}
      <Paper
        elevation={3}
        className="BagelReviews"
        sx={{
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(3px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "12px",
          width: "100%",
          maxWidth: "380px",
          marginLeft: "8px",
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Customer Reviews
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Box>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <Box
                key={review.id}
                sx={{
                  marginBottom: 2,
                  padding: 2,
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 1, fontSize: "0.9rem" }}
                >
                  "{review.comment}"
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "italic",
                    marginBottom: 1,
                    fontSize: "0.8rem",
                  }}
                >
                  - {review.author}
                </Typography>
                <Rating
                  name={`rating-${review.id}`}
                  value={review.rating}
                  readOnly
                  precision={0.5}
                  sx={{ fontSize: "1rem" }}
                />
              </Box>
            ))
          ) : (
            <Typography sx={{ fontSize: "0.9rem" }}>No reviews yet.</Typography>
          )}
        </Box>
      </Paper>

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={closeConfirmDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this bagel?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeConfirmDialog}>Cancel</Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default BagelDetails;
