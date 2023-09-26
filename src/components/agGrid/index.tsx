import React, { useCallback, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useState, useEffect } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { rows } from '../../api/rowData';

function MyAgGrid() {
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
   const datas = rows.getAll().then((r) => {    
    setRowData(r.data.query)
   })
   })

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection='multiple'
        animateRows={true}
      />
    </div>
  );
}

export default MyAgGrid;