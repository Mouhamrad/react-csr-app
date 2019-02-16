import React, { Component } from 'react';
import MyDialog from './Dialog';
import RendezVous from './RendezVous';
import Grid from '@material-ui/core/Grid';
import ChannelCalendar from "./Basic";
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        zIndex: '10000'
        
    },
    card:{
      display: 'none',
    },
    card_opened:{
      display:'inline',
      position: 'absolute',
      bottom: '75px',
      right: '15px',
      zIndex: '10000' 
    },
  });



class Calender extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            openButton: false,
            opened: false,
        
    events: [
        {
          id: 1,
          start: "2018-12-10",
          end: "2018-12-15",
          title: "Event 01"
        }
      ]
    };
    this.onToggle = this.onToggle.bind(this);
}
    addEvents = () => {
      const newEvent = {
        id: 2,
        start: "2018-12-15",
        end: "2018-12-20",
        title: "Event 02"
      };
      this.setState({ events: this.state.events.concat(newEvent) });
    };
    
    toggleOpen = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    };


    onToggle() {
      const { opened } = this.state;
      this.setState({ opened: !opened });
    };

    render() {
        const { open } = this.state;
        const { classes } = this.props;
        const { opened } = this.state;

        return (
            <div style={{position: 'relative'}}>
            {/* <Fab color="primary" aria-label="Add" onClick={this.toggleOpen} className={classes.fab}>
               +
               </Fab> */}

              <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.onToggle}>
               +
               </Fab>


          
                <div className={opened ? classes.card_opened : classes.card}>

                <Grid   container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing = {16}>

                 <Grid item>
                    <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin} onClick={this.toggleOpen}>
                      1
                    </Fab>
                  </Grid>

                  <Grid item>
                    <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin}>
                      2
                    </Fab>
                  </Grid>

                  <Grid item>
                    <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin}>
                      3
                    </Fab>
                  </Grid>

                    </Grid>
                </div>
               

               
            <MyDialog handleClose={this.toggleOpen} open={open} title="Nouveau rendez-vous" body={<RendezVous />}/>

            <ChannelCalendar events={this.state.events}  />

            </div>
        )
    }
}

export default withStyles(styles)(Calender);
