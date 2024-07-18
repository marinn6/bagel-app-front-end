// import React, { useState, useEffect } from "react";
// import Bagel from "./Bagel";
// import "./Bagels.css";

// const API = import.meta.env.VITE_API_URL;

// function Bagels() {
//   const [bagels, setBagels] = useState([]);

//   useEffect(() => {
//     fetch(`${API}/bagels`) //
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setBagels(res);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="BagelsContainer">
//       <div className="BagelsTable">
//         <section>
//           <table>
//             <thead>
//               <tr>
//                 <th>Favorite</th>
//                 <th>Bagel Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bagels.map((bagel) => {
//                 return <Bagel key={bagel.id} bagel={bagel} id={bagel.id} />;
//               })}
//             </tbody>
//           </table>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Bagels;

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { red, orange } from "@mui/material/colors";
import "./Bagels.css";

const API = import.meta.env.VITE_API_URL;

const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
    },
    secondary: {
      main: orange[500],
    },
    background: {
      default: "#fbe9e7",
      frosted: "rgba(232, 103, 84, 0.8)",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontWeightBold: 600,
  },
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function Bagels() {
  const [bagels, setBagels] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  useEffect(() => {
    fetch(`${API}/bagels`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBagels(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRequestSort = (property) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: theme.palette.background.frosted,
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: 8,
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sortDirection={orderBy === "name" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={() => handleRequestSort("name")}
                  IconComponent={({ className, direction }) => (
                    <span
                      className={className}
                      style={{
                        color: theme.palette.primary.main,
                        transform:
                          direction === "desc"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      ▲
                    </span>
                  )}
                >
                  Bagel Name
                </TableSortLabel>
              </TableCell>
              <TableCell
                align="center"
                sortDirection={orderBy === "description" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "description"}
                  direction={orderBy === "description" ? order : "asc"}
                  onClick={() => handleRequestSort("description")}
                  IconComponent={({ className, direction }) => (
                    <span
                      className={className}
                      style={{
                        color: theme.palette.primary.main,
                        transform:
                          direction === "desc"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      ▲
                    </span>
                  )}
                >
                  Description
                </TableSortLabel>
              </TableCell>
              <TableCell
                align="center"
                sortDirection={orderBy === "type" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "type"}
                  direction={orderBy === "type" ? order : "asc"}
                  onClick={() => handleRequestSort("type")}
                  IconComponent={({ className, direction }) => (
                    <span
                      className={className}
                      style={{
                        color: theme.palette.primary.main,
                        transform:
                          direction === "desc"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      ▲
                    </span>
                  )}
                >
                  Type
                </TableSortLabel>
              </TableCell>
              <TableCell
                align="center"
                sortDirection={orderBy === "price" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "price"}
                  direction={orderBy === "price" ? order : "asc"}
                  onClick={() => handleRequestSort("price")}
                  IconComponent={({ className, direction }) => (
                    <span
                      className={className}
                      style={{
                        color: theme.palette.primary.main,
                        transform:
                          direction === "desc"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      ▲
                    </span>
                  )}
                >
                  Price
                </TableSortLabel>
              </TableCell>
              <TableCell
                align="center"
                sortDirection={orderBy === "is_glutenFree" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "is_glutenFree"}
                  direction={orderBy === "is_glutenFree" ? order : "asc"}
                  onClick={() => handleRequestSort("is_glutenFree")}
                  IconComponent={({ className, direction }) => (
                    <span
                      className={className}
                      style={{
                        color: theme.palette.primary.main,
                        transform:
                          direction === "desc"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      ▲
                    </span>
                  )}
                >
                  Gluten Free
                </TableSortLabel>
              </TableCell>
              <TableCell
                align="center"
                sortDirection={orderBy === "is_available" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "is_available"}
                  direction={orderBy === "is_available" ? order : "asc"}
                  onClick={() => handleRequestSort("is_available")}
                  IconComponent={({ className, direction }) => (
                    <span
                      className={className}
                      style={{
                        color: theme.palette.primary.main,
                        transform:
                          direction === "desc"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      ▲
                    </span>
                  )}
                >
                  Available
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(bagels, getComparator(order, orderBy)).map((bagel) => (
              <TableRow key={bagel.id}>
                <TableCell align="center">{bagel.name}</TableCell>
                <TableCell align="center">{bagel.description}</TableCell>
                <TableCell align="center">{bagel.type}</TableCell>
                <TableCell align="center">${bagel.price.toFixed(2)}</TableCell>
                <TableCell align="center">
                  {bagel.is_glutenFree ? "Yes" : "No"}
                </TableCell>
                <TableCell align="center">
                  {bagel.is_available ? "Yes" : "No"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}

export default Bagels;
