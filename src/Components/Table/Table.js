import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const Styles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid #b9b9b9;
    font-size: 1.6rem;
    border-radius: 0.5rem;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 1rem 1.5rem;
      padding-right: 4rem;
      border-bottom: 1px solid #b9b9b9;
      border-right: 1px solid #b9b9b9;
      text-align: left;
      color: var(--sec-black);

      :last-child {
        border-right: 0;
      }
    }
    th {
      font-weight: 500;
      background-color: var(--ter-black);
      color: var(--pure-white);
    }
  }
`;

function TableSub({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function Table({ columns, data }) {
  return (
    <Styles>
      <TableSub columns={columns} data={data} />
    </Styles>
  );
}
