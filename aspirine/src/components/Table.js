import React from "react";
import { TableCell } from "@material-ui/core";

const Tables = (props) => {
  return (
    <>
      {props.data.OID ? (
        <>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.OID}
          </TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.Hospital_Name}
          </TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.FPRBC_Grp}
          </TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.units}
          </TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.bill}
          </TableCell>{" "}
        </>
      ) : (
        ""
      )}
      {props.data.Id_no ? (
        <>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.Id_no}
          </TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.Donor_name}
          </TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.Blood_grp}
          </TableCell>
          <TableCell
            align="center"
            style={{ color: "white" }}
          >{`${props.data.Hemoglobin_level}g/dl`}</TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.Diagonsed_hepatities}
          </TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.Diagonsed_jaundice}
          </TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.WBC_count}
          </TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.RBC_count}
          </TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.Mean_platelet_volume}
          </TableCell>
          <TableCell align="center" style={{ color: "white" }}>
            {props.data.Test_results}
          </TableCell>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default Tables;
