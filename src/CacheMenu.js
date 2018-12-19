import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    
});

function CacheMenu(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} onClick={props.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Cache Simulator
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* <Paper className={classes.openRoot} elevation={24}>
                <Typography variant="h5" component="h3">
                This is a sheet of paper.
                </Typography>
                <Typography component="p">
                Paper can be used to build surface or other elements for your application.
                </Typography>

                <Button onClick={this.toggleDrawer('left', true)}>
                    Open
                </Button>
                
            </Paper> */}
        </div>
    );
  }
  
  CacheMenu.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CacheMenu);
