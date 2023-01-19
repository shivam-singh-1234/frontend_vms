import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Footer = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        appBar: {
          top: 'auto',
          bottom: 0,
          background: theme.palette.text.secondary,
          color: theme.palette.primary.contrastText
        },
        toolbar: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        title: {
          flexGrow: 1,
          textAlign: 'center',
          fontWeight: 'bold'
        },
      }));
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
            Copyright &copy; 2023 Company_name  
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
export default Footer;