import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import './CustomTable.css'
const CustomTable = ({ columns, data }) => (
  <div className="table-container">
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.field}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.field}>{row[col.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CustomTable;