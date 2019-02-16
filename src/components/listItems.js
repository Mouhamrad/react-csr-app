import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Calendar from '@material-ui/icons/CalendarToday';
import Home from '@material-ui/icons/Home';
import Book from '@material-ui/icons/Book';
import ShowChart from '@material-ui/icons/ShowChart';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Person from '@material-ui/icons/Person';
import Tune from '@material-ui/icons/Tune'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Edit from '@material-ui/icons/Edit';
import Lock from '@material-ui/icons/Lock';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Settings from '@material-ui/icons/Settings';

const MainListItems = () => (
  <div style={{ height: '100vh' }}>
    <ListItem button>
        <NavLink to={"/click-and-cut/dashboard"} style={{ display: 'flex', textDecoration: 'none' }} >
      <ListItemIcon>
        <Home />
      </ListItemIcon>
            <ListItemText primary="Tableau de bord"  />
        </NavLink>

    </ListItem>
    <ListItem button>
        <NavLink to={"/click-and-cut/calender"} style={{ display: 'flex', textDecoration: 'none' }} >
      <ListItemIcon>
        <Calendar />
      </ListItemIcon>
            <ListItemText primary="Calendrier" />
        </NavLink>

    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Book />
      </ListItemIcon>
      <ListItemText primary="Les clients" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShowChart />
      </ListItemIcon>
      <ListItemText primary="Faire rapport" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ThumbUp />
      </ListItemIcon>
      <ListItemText primary="Avis" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary="Personnel" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Tune />
      </ListItemIcon>
      <ListItemText primary="Prestations de service" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCart />
      </ListItemIcon>
      <ListItemText primary="Des produits" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Edit />
      </ListItemIcon>
      <ListItemText primary="Reservation en ligne" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Lock />
      </ListItemIcon>
      <ListItemText primary="Les permissions" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalOffer />
      </ListItemIcon>
      <ListItemText primary="Des remises" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Réglages" />
    </ListItem>
  </div>
);

export default MainListItems;
