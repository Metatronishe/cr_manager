import React from 'react';
import { useTable, useSortBy } from 'react-table';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from "@material-ui/core/TableSortLabel";

function getColumns() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: "name",
                sortType: "basic"
            },
            {
                Header: 'Tag',
                accessor: "tag"
            },
            {
                Header: 'Role',
                accessor: "role",
                sortType: "basic"
            },
            {
                Header: 'Donations',
                accessor: "donations",
                sortType: "basic"
            },
            {
                Header: 'Cards Received',
                accessor: "donationsReceived",
                sortType: "basic"
            },
            {
                Header: 'War Days Win',
                accessor: "warDayWins",
                sortType: "basic"
            },
            {
                Header: 'Progress',
                accessor: "progressLevel",
                sortType: "basic"
            }
        ],
        []
    )

    return columns;
}

export default function Table({ data }) {
    let columns = getColumns();

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    }, useSortBy)

    return (
        <MaUTable {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell {...(column.id === "selection"
                                ? column.getHeaderProps()
                                : column.getHeaderProps(column.getSortByToggleProps()))}
                            >
                                {column.render("Header")}
                                {column.id !== "selection" ? (
                                    <TableSortLabel
                                        active={column.isSorted}
                                        // react-table has a unsorted state which is not treated here
                                        direction={column.isSortedDesc ? "desc" : "asc"}
                                    />
                                ) : null}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </MaUTable>
    )
}