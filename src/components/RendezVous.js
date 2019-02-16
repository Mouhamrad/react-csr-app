import React from 'react';
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin:"70px 70px 70px 70px",
    },
    dived: {

    },
    input: {
      display: 'none',
    },
  });



function RendezVous (props) {

    const { classes } = props;

return (
    <React.Fragment>
        <Grid container >
         <Grid item xs={6}>
          <Grid container >
                
                <Grid item xs={4} style={{}}>

                <Button variant="contained" color="primary" className={classes.button}>
                    Primary
                </Button>

                </Grid>

                <Grid item xs={4}>

                <Button variant="contained" color="primary" className={classes.button}>
                    Primary
                </Button>

                </Grid>

                <Grid item xs={4}>

                <Button variant="contained" color="primary" className={classes.button}>
                    Primary
                </Button>
                
                </Grid>

           

        

       
         </Grid>
        </Grid>

        <Grid item xs={6}>
        <Grid container>
            <Grid item xs={4}>

                <Button variant="contained" color="primary" className={classes.button}>
                    Primary
                </Button>
                </Grid>

                <Grid item xs={4}>

                <Button variant="contained" color="primary" className={classes.button}>
                    Primary
                </Button>
                </Grid>

                <Grid item xs ={4}>

                <Button variant="contained" color="primary" className={classes.button}>
                    Primary
                </Button>
                </Grid>

           

        

       
        </Grid>
        </Grid>
        </Grid>
            <Divider />
    </React.Fragment>

    // <React.Fragment>
      
        
    //       <Grid container spacing={16} alignItems="center">
    //         <Grid item xs={6}>

    //             <Button variant="contained" color="primary" className={classes.button}>
    //                 Primary
    //             </Button>

    //         </Grid>

    //         <Grid item xs={6}>

    //             <Button variant="contained" color="primary" className={classes.button}>
    //                 Primary
    //             </Button>

    //         </Grid>

    //         <Grid item xs={6}>

    //             <Button variant="contained" color="primary" className={classes.button}>
    //                 Primary
    //             </Button>

    //         </Grid>

    //         <Grid item xs={6}>

    //             <Button variant="contained" color="primary" className={classes.button}>
    //                 Primary
    //             </Button>

    //         </Grid>
    //       </Grid>
          
        
      
  
    // </React.Fragment>
);
}



export default withStyles(styles)(RendezVous);
