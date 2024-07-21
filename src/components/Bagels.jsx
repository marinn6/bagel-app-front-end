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
  TablePagination,
} from "@mui/material";
import { red, orange } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
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
      frosted: "rgba(255, 255, 255, 0.5)",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontWeightBold: 600,
    allVariants: {
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: "bold",
    },
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

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

  const handleRowClick = (id) => {
    navigate(`/bagels/${id}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="bagels-container" style={{ padding: "0 50px" }}>
        <TableContainer
          component={Paper}
          className="MuiTableContainer-root"
          sx={{
            backgroundColor: theme.palette.background.frosted,
            boxShadow: "none",
            borderRadius: 2,
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sortDirection={orderBy === "name" ? order : false}
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <TableSortLabel
                    active={orderBy === "name"}
                    direction={orderBy === "name" ? order : "asc"}
                    onClick={() => handleRequestSort("name")}
                    sx={{
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    Bagel Name
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  align="center"
                  sortDirection={orderBy === "description" ? order : false}
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <TableSortLabel
                    active={orderBy === "description"}
                    direction={orderBy === "description" ? order : "asc"}
                    onClick={() => handleRequestSort("description")}
                    sx={{
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    Description
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  align="center"
                  sortDirection={orderBy === "type" ? order : false}
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <TableSortLabel
                    active={orderBy === "type"}
                    direction={orderBy === "type" ? order : "asc"}
                    onClick={() => handleRequestSort("type")}
                    sx={{
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    Type
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  align="center"
                  sortDirection={orderBy === "price" ? order : false}
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <TableSortLabel
                    active={orderBy === "price"}
                    direction={orderBy === "price" ? order : "asc"}
                    onClick={() => handleRequestSort("price")}
                    sx={{
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    Price
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  align="center"
                  sortDirection={orderBy === "is_glutenFree" ? order : false}
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <TableSortLabel
                    active={orderBy === "is_glutenFree"}
                    direction={orderBy === "is_glutenFree" ? order : "asc"}
                    onClick={() => handleRequestSort("is_glutenFree")}
                    sx={{
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    Gluten Free
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(bagels, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.id}
                    hover
                    onClick={() => handleRowClick(row.id)}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">${row.price}</TableCell>
                    <TableCell align="center">
                      {row.is_glutenFree ? "Yes" : "No"}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 20, 100]}
            component="div"
            count={bagels.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </ThemeProvider>
  );
}

export default Bagels;
