// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import "./BagelDetails.css";

// const API = import.meta.env.VITE_API_URL;

// function BagelDetails() {
//   const [bagel, setBagel] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Fetch bagel details on component mount
//   useEffect(() => {
//     fetch(`${API}/bagels/${id}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch bagel");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setBagel(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [id]);

//   // Handle bagel deletion
//   const handleDelete = () => {
//     fetch(`${API}/bagels/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to delete bagel");
//         }
//         return res.json();
//       })
//       .then(() => {
//         navigate("/bagels");
//       })
//       .catch((err) => {
//         console.error(err);
//         // Handle error state or feedback to user
//       });
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="BagelDetailsContainer">
//       <div className="BagelDetailsBox">
//         <h3>
//           {bagel.is_favorite ? <span>⭐️</span> : null}
//           <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
//           {bagel.name}
//         </h3>
//         <p>
//           <strong>Type:</strong> {bagel.type}
//         </p>
//         <p>
//           <strong>Price:</strong> {bagel.price}
//         </p>

//         <div className="showNavigation">
//           <div>
//             <Link to={`/bagels`}>
//               <button>Back</button>
//             </Link>
//           </div>
//           <div>
//             <Link to={`/bagels/${id}/edit`}>
//               <button>Edit</button>
//             </Link>
//           </div>
//           <div>
//             <button onClick={handleDelete}>Delete</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BagelDetails;
