import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    list: {
        width: 300,
    }
});

function CacheDrawer(props) {
    const { classes } = props;

    const sideList = (
        <div className={classes.list}>
        <List>
            {['Close'].map((text, index) => (
                <ListItem button key={text} onClick={props.toggleDrawer('left', false)}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
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
