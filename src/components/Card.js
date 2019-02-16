import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SimplePieChart from './PieChart';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';

const styles = ({
  root: {
    flexGrow: 1,
      overflow: 'hidden',
  },
  card: {
      minHeight: '400px'
  },
  card1: {
    height: '200px'
  }
});

class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };



  render() {
    const { classes } = this.props;

    return (
      <Grid container  spacing={24}>
          <Grid container  justify="center" spacing={24}>
              <Grid item xs={6}>
                <Card className={classes.card}>
                  <CardContent className={classes.actions}>
                    <p>Disponibilité aujour'hui</p>
                    <SimplePieChart />
                  </CardContent>

                 </Card>
              </Grid>

              <Grid item xs={6}>
                <Card className={classes.card}>

                  <CardContent className={classes.actions}>
                    <p>Revenus futurs réservés</p>
                    <SimpleLineChart />
                  </CardContent>

                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card className={classes.card}>

                  <CardContent className={classes.actions}>
                   <p>Activité de rendez-vous</p>
                  </CardContent>

                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card className={classes.card}>

                  <CardContent className={classes.actions}>
                    <p>Prochains rendez-vous</p>
                  </CardContent>

                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card className={classes.card}>

                  <CardContent className={classes.actions}>
                    <p>Ventes récentes</p>
                    <SimpleLineChart />
                  </CardContent>

                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card className={classes.card}>

                  <CardContent className={classes.actions}>
                    <p>Alertes de faible stock</p>
                  </CardContent>

                </Card>
              </Grid>
              
              <Grid item xs={6}>
              <Grid
  container
  direction="column"
  justify="center"
  alignItems="stretch"
  spacing={24}
>
              <Grid item>
                <Card >

                  <CardContent className={classes.actions}>
                  <p>Pert de revenu</p>
                    <SimpleTable />
                  </CardContent>

                </Card>
              </Grid> 


              <Grid item>
                <Card >

                  <CardContent className={classes.actions}>
                  <p>Visites de clients</p>
                  <SimpleTable />
                  </CardContent>

                </Card>
              </Grid> 
                   
              
              </Grid>
              </Grid>

              <Grid item xs={6}>
                <Card className={classes.card}>

                  <CardContent className={classes.actions}>
                    <p>Total des revenus</p>
                    <SimplePieChart />
                  </CardContent>

                </Card>
              </Grid>
              
             <Grid item xs={12}>
              <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  spacing  = {24}
>
     <Grid item xs={6}>
     <Grid   container
  direction="column"
  justify="center"
  alignItems="stretch"
  spacing  = {24}>
              <Grid item>
                <Card >

                  <CardContent className={classes.actions}>
                    <p>Top Services</p>
                  </CardContent>

                </Card>
              </Grid>

              <Grid item>
                <Card >

                  <CardContent className={classes.actions}>
                    <p>Top produits au détail</p>
                  </CardContent>

                </Card>
              </Grid>
              </Grid>
              </Grid>
              
<Grid item xs = {6}>
<Grid   container
  direction="column"
  justify="center"
  alignItems="stretch"
  spacing = {24}>
            <Grid item>
                <Card >

                  <CardContent className={classes.actions}>
                    <p>Top Staff</p>
                  </CardContent>

                </Card>
              </Grid>

              <Grid item>
                <Card >

                  <CardContent className={classes.actions}>
                    <p>Satisfaction de client</p>
                  </CardContent>

                </Card>
              </Grid>
              
              </Grid>
              </Grid>
              </Grid>
                </Grid>
              </Grid>
          </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);
