import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./BagelEditForm.css";

const API = import.meta.env.VITE_API_URL;

function BagelEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [bagel, setBagel] = useState({
    name: "",
    description: "",
    type: "",
    price: "",
    is_glutenFree: false,
    is_available: false,
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setBagel({ ...bagel, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setBagel({ ...bagel, [id]: checked });
  };

  // Update a bagel. Redirect to show view
  const updateBagel = () => {
    fetch(`${API}/bagels/${id}`, {
      method: "PUT",
      body: JSON.stringify(bagel),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => navigate(`/bagels/${id}`))
      .catch((err) => console.log(err));
  };

  // On page load, fill in the form with the bagel data.
  useEffect(() => {
    fetch(`${API}/bagels/${id}`)
      .then((res) => res.json())
      .then((res) => {
        // Ensure all fields are initialized with default values
        setBagel({
          name: res.name || "",
          description: res.description || "",
          type: res.type || "",
          price: res.price || "",
          is_glutenFree: res.is_glutenFree || false,
          is_available: res.is_available || false,
          is_favorite: res.is_favorite || false,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBagel();
  };

  return (
    <div className="BagelEditFormContainer">
      <div className="BagelEditFormBox">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={bagel.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Bagel"
            required
          />

          <label htmlFor="description">Description:</label>
          <input
            id="description"
            value={bagel.description}
            type="text"
            onChange={handleTextChange}
            placeholder="Description"
          />

          <label htmlFor="type">Type:</label>
          <input
            id="type"
            value={bagel.type}
            type="text"
            onChange={handleTextChange}
            placeholder="Type"
            required
          />

          <label htmlFor="price">Price:</label>
          <input
            id="price"
            value={bagel.price}
            type="text"
            onChange={handleTextChange}
            placeholder="Price"
            required
          />

          <label htmlFor="is_glutenFree">Gluten-Free:</label>
          <input
            id="is_glutenFree"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={bagel.is_glutenFree}
          />

          <label htmlFor="is_available">Available:</label>
          <input
            id="is_available"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={bagel.is_available}
          />

          <label htmlFor="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={bagel.is_favorite}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <Link to={`/bagels/${id}`}>
          <button>Nevermind!</button>
        </Link>
      </div>
    </div>
  );
}

export default BagelEditForm;
