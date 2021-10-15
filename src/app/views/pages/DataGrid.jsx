import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { resolveNestedPath } from "utils";

const useStyles = makeStyles(() => ({
  productTable: {
    fontFamily: "Arial, Helvetica, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
    "& td": {
      border: "1px solid #ddd",
      padding: "4px",
      paddingTop: "2px",
      paddingBottom: "2px",
      textAlign: "center",
    },
    "& th": {
      paddingTop: "6px",
      paddingBottom: "6px",
      textAlign: "center",
      backgroundColor: "#1976D2",
      color: "white",
    },
  },
}));

const DataGrid = ({ columns, data, onDelete, onUpdate, onConsult }) => {
  const classes = useStyles();
  return (
    <>
      <Table className={classes.productTable}>
        <TableHead>
          <TableRow>
            {columns?.map((col, idx) => (
              <TableCell key={idx} className="px-1" colSpan={col?.span ?? 3}>
                {col?.label}
              </TableCell>
            ))}
            {(onDelete || onUpdate || onConsult) && (
              <TableCell colSpan={1}></TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((element, ind) => {
            return (
              // <TableRow hover key={element?.id}>
              <TableRow hover key={ind}>
                {columns.map((col, index) => {
                  return (
                    <TableCell key={index} colSpan={col.span ?? 3}>
                      {col.displayed
                        ? col.displayed(ind)
                        : resolveNestedPath(col.dataField, element)}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default DataGrid;
