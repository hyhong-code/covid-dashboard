import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import numeral from "numeral";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.greenDark,
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  body: {
    fontSize: 14,
    fontWeight: 700,
    color: theme.palette.common.black,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.common.blueLight,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {},
  tableContainer: {
    width: "auto",
    marginLeft: theme.spacing(1),
    marginTop: "1rem",
    marginRight: "1rem",
    height: "20rem",
    boxShadow: `0 3px 10px rgba(0,0,0,0.08)`,
    borderRadius: 15,
  },
}));

const CountryCasesTable = ({ style }) => {
  const classes = useStyles();
  const countriesByCases = useSelector(
    ({ covid: { countriesByCases } }) => countriesByCases
  );

  return (
    <TableContainer
      component={Paper}
      className={classes.tableContainer}
      style={style}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell align="right"># Cases</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countriesByCases.map((record) => (
            <StyledTableRow
              key={`${record.country}-${record.countryInfo.iso2}`}
            >
              <StyledTableCell component="th" scope="row">
                {record.country.toUpperCase()}{" "}
                <img
                  src={record.countryInfo.flag}
                  alt="Country Flag"
                  height={12}
                  style={{ marginLeft: 5 }}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                {numeral(record.cases).format("0,0")}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CountryCasesTable;
