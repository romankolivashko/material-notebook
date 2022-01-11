import React from "react";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer'
import { Typography } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import  { useHistory, useLocation } from 'react-router-dom';


const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9f',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
  },
  active: {
    background: '#f4f4f4'
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    }
  ]

  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5">
            Notes
          </Typography>
        </div>

        {/* list / links */}
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path) }
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          ))}
        </List>

        <List>
          <ListItem>
            <ListItemText primary="hello" />
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText primary="hello" />
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText primary="hello" />
          </ListItem>
        </List>


      </Drawer>

      <div className={classes.page}>
        {children}
      </div>
    </div>
  );
}