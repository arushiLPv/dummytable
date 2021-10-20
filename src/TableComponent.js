import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { AutoSizer } from 'react-virtualized';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';
import "./TableComponent.css"



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

export default function TableComponent() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

   const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

  return (
    <Paper sx={{ overflowY: 'auto', backgroundColor:"#f5f5f5" , width:"85%"}} className="paper">
      <div className="paperContent">History</div>
      <TableContainer sx={{ maxHeight: 450 , maxWidth:1200, backgroundColor:"white"}} className="TableContainer">
                {/* <AutoSizer> */}
            {/* {({ height, width }) => ( */}
    


<Table stickyHeader aria-label="sticky table"   >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color:"blue" }}
                className="tableColumns"
                >
                  <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : 'asc'}
              onClick={createSortHandler(column.id)}
            >
{column.label}
              {orderBy === column.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
                  
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
            // rows
            stableSort(rows, getComparator(order, orderBy))
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>


    {/* )} */}
        
              {/* </AutoSizer> */}

      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}

    



const columns = [
  { id: 'DeploymentVersionNumber', label: 'Deployment\u00a0Version\u00a0Number', minWidth: 170 , Headers},
  { id: 'DeploymentEnvironment', label: 'Deployment\u00a0Environment', minWidth: 100 },
  {
    id: 'user',
    label: 'User',
    minWidth: 170,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'dateAndTime',
    label: 'Date\u00a0&\u00a0Time',
    minWidth: 170,
    // align: 'right',
    sortType: (a, b) => {
                        // var a1 = new Date(a).getTime();
                        // var b1 = new Date(b).getTime();
                        var a1=a;
                        var b1=b;
                      if(a1<b1)
                      return 1;
                      else if(a1>b1)
                      return -1;
                      else
                      return 0;
                      },
    // format: (value) => value.toLocaleString('en-US'),
  },
 
];

function createData(DeploymentVersionNumber, DeploymentEnvironment, user, dateAndTime) {
//   const density = population / size;
  return { DeploymentVersionNumber, DeploymentEnvironment, user, dateAndTime};
}
let idNumber=1;
const rows = [
  // createData(idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2021'),
  // createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2020'),
  // createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2021'),
  // createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2001'),
  // createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2019'),
  // createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2002'),
  // createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2018'),
  // createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2003'),
  // createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2017'),
  // createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2004'),
  // createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2016'),
  // createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2005'),
  // createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2015'),
  // createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2006'),
  // createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2014'),
  // createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2007'),
  // createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2013'),
  // createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2008'),
  // createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2012'),
  // createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2009'),
  // createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2011'),
  // createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2010'),


// createData(idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2021'),
//   createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2020'),
//   createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2021'),
//   createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2001'),
//   createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2019'),
//   createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2002'),
//   createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2018'),
//   createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2003'),
//   createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2017'),
//   createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2004'),
//   createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2016'),
//   createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2005'),
//   createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2015'),
//   createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2006'),
//   createData(++idNumber,'Test', 'Lincoln', 'Wednesday, June 02 2014'),
//   createData(++idNumber,'User', 'Ryan', 'Wednesday, June 02 2007'),
  createData(idNumber,'Development', 'Lincoln', 2013),
  createData(++idNumber,'User', 'Ryan', 2008),
  createData(++idNumber,'Test', 'Lincoln', 2012),
  createData(++idNumber,'User', 'Ryan', 2009),
  createData(++idNumber,'Test', 'Lincoln', 2011),
  createData(++idNumber,'User', 'Ryan', 2010),
    createData(++idNumber,'User', 'Ryan', 2008),
  createData(++idNumber,'Test', 'Lincoln', 2012),
  createData(++idNumber,'User', 'Ryan', 2009),
  createData(++idNumber,'Test', 'Lincoln', 2011),
  createData(++idNumber,'User', 'Ryan', 2010),  
  createData(++idNumber,'User', 'Ryan', 2008),
  createData(++idNumber,'Test', 'Lincoln', 2012),
  createData(++idNumber,'User', 'Ryan', 2009),
  createData(++idNumber,'Test', 'Lincoln', 2011),
  createData(++idNumber,'User', 'Ryan', 2010), 
   createData(++idNumber,'User', 'Ryan', 2008),
  createData(++idNumber,'Test', 'Lincoln', 2012),
  createData(++idNumber,'User', 'Ryan', 2009),
  createData(++idNumber,'Test', 'Lincoln', 2011),
  createData(++idNumber,'User', 'Ryan', 2087),
];

