import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, calories, fat) {
  id += 1;
  return { id, name, calories, fat};
}

const data = [
  createData('Annulation', 0, 0),
  createData('Pas de spécacle', 0, 0)
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell align="right">{n.calories}</TableCell>
              <TableCell align="right">{n.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);