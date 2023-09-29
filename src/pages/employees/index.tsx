import React, { useCallback, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useState, useEffect } from 'react';
import { Grid, Button} from "@material-ui/core"
import FormDialog from "../../components/dialog/index"
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { dbRows } from '../../api/rowData';

function Employees() {
  const [rowData, setRowData] = useState();

  const [columnDefs, setColumnDefs] = useState([
    { field: 'name' },
    { field: 'job' },
    { field: 'salary' },
    { field: 'hiring' },
  ]);

  const defaultColDef = useMemo(()=> ({
    sortable: true,
    filter: true
  }), [])


  useEffect(() => {
   const datas = dbRows.getAll().then((r) => {    
    setRowData(r.data.query)
   })
   })

  return (
    <div className="ag-theme-alpine" style={{ height: "400px" }}>
      <Grid align="right">
        <Button variant='contained' color='primary'>Add Employee</Button>
      </Grid>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection='multiple'
        animateRows={true}
      />
      <Grid>
        <FormDialog/>
      </Grid>
    </div>
  );
}

export default Employees;