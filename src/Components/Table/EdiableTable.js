import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const Styles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid #b9b9b9;
    font-size: 1.6rem;
    border-radius: 0.7rem;
    overflow: hidden;

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
      padding-right: 0;
      border-bottom: 1px solid #b9b9b9;
      border-right: 1px solid #b9b9b9;
      text-align: left;
      color: var(--sec-black);
      width: fit-content;

      :last-child {
        border-right: 0;
      }

      input {
        padding: 0.6rem 1.5rem;
        font-size: 1.6rem;
        margin: 0;
        border: 0;
        width: 14rem;
      }
    }

    th {
      font-weight: 500;
      background-color: var(--ter-black);
      color: var(--pure-white);
      padding: 0.7rem 1.5rem;
    }
  }
`;

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
};

// Be sure to pass our updateMyData and the skipPageReset option
function EditableTableSub({ columns, data, updateMyData }) {
  // For this example, we're using pagination to illustrate how to stop
  // the current page from resetting when our data changes
  // Otherwise, nothing is different here.
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    rows,
    state: { pageIndex, pageSize },
  } = useTable({
    columns,
    data,
    defaultColumn,
    // use the skipPageReset option to disable page resetting temporarily
    // updateMyData isn't part of the API, but
    // anything we put into these options will
    // automatically be available on the instance.
    // That way we can call this function from our
    // cell renderer!
    updateMyData,
  });

  // Render the UI for your table
  return (
    <>
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default function Table({ columns, data, updateMyData }) {
  return (
    <Styles>
      <EditableTableSub
        columns={columns}
        data={data}
        updateMyData={updateMyData}
      />
    </Styles>
  );
}
