import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 100,
    },
});

let id = 0;
function createRow(a, b, c, d, e) {
  id += 1;
  return { id, a, b, c, d, e };
}

const rows = [
    createRow('Frozen yogurt', 159, 6.0, 24, 4.0),
    createRow('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createRow('Eclair', 262, 16.0, 24, 6.0),
    createRow('Cupcake', 305, 3.7, 67, 4.3),
    createRow('Gingerbread', 356, 16.0, 49, 3.9),
];

function CacheTable(props) {
    const { classes } = props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Button onClick={props.toggleDrawer(true)}>
                                Open
                            </Button>
                        </TableCell>
                        <TableCell align="right">A</TableCell>
                        <TableCell align="right">B</TableCell>
                        <TableCell align="right">C</TableCell>
                        <TableCell align="right">D</TableCell>
                        <TableCell align="right">E</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => {
                    return (
                    <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                        {row.id}
                        </TableCell>
                        <TableCell align="right">{row.a}</TableCell>
                        <TableCell align="right">{row.b}</TableCell>
                        <TableCell align="right">{row.c}</TableCell>
                        <TableCell align="right">{row.d}</TableCell>
                        <TableCell align="right">{row.e}</TableCell>
                    </TableRow>
                    );
                })}
                </TableBody>
            </Table>
        </Paper>
      </div>
    );
  }
  
  CacheTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CacheTable);
  