import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    list: {
        width: 300,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

function CacheDrawer(props) {
    const { classes } = props;

    const sideList = (
        <div className={classes.list}>
            <List>
                <ListItem button key="close" onClick={props.toggleDrawer('left', false)}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Close Settings" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem key="addrSize">
                    <ListItemIcon></ListItemIcon>
                    <TextField
                        error={props.addrSizeError}
                        id="standard-number"
                        label="Memory Address Size"
                        value={props.addrSize}
                        onChange={props.handleChange('addrSize')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                </ListItem>
            </List>
        </div>
    );    

    return (
        <div className={classes.root}>
            <Drawer open={props.isOpen} onClose={props.toggleDrawer('left', false)}>
                <div
                    tabIndex={0}
                    role="button"
                >
                    {sideList}
                </div>
            </Drawer>
        </div>
    );
  }
  
  CacheDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CacheDrawer);
