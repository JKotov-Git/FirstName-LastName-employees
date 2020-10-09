import React from "react";

import { DataGrid, RowsProp, ColDef } from "@material-ui/data-grid";

import "./Grid.css";

const Grid = (props) => {
  const rows: RowsProp = [
    {
      id: 1,
      col1: props.objectProps.empl1,
      col2: props.objectProps.empl2,
      col3: props.objectProps.projectId,
      col4: props.objectProps.daysWorked,
    },
  ];

  const columns: ColDef[] = [
    { field: "id", hide: true },
    { field: "col1", headerName: "Employee ID#1", width: 150 },
    { field: "col2", headerName: "Employee ID#2", width: 150 },
    { field: "col3", headerName: "Project ID", width: 150 },
    { field: "col4", headerName: "Days worked", width: 150 },
  ];

  return (
    <div className="data-grid-container">
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Grid;
