import React, { useCallback, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useState, useEffect } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { rows } from '../../api/rowData';

function MyAgGrid() {
  const [rowData, setRowData] = useState([
    { make: 'Ford', model: 'Fokus', price: 40000 },
    { make: 'Toyota', model: 'Celica', price: 45000 },
    { make: 'BMW', model: '4 series', price: 50000 },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ]);

  const defaultColDef = useMemo(()=> ({
    sortable: true,
    filter: true
  }), [])


  useEffect(() => {
   const datas = rows.getAll().then((r) => {
    setRowData(r.data)
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