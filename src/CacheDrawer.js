import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    list: {
        width: 350,
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

const ErrorsTextList = props => {
    const errorsList = props.cacheState.errorsText.map((errorText, index) => {
        return (
            <ListItem key={errorText.key}>
                <Typography color="error">
                    {errorText.value}
                </Typography>
            </ListItem>
        );
    });
    return errorsList
};

function CacheDrawer(props) {
    const { classes } = props;

    const sideList = (
        <div className={classes.list}>
            <List>
                <ListItem button key="close" onClick={props.toggleDrawer(false)}>
                    <ListItemText primary="Close Settings" color="error" />
                </ListItem>
            </List>
            <Divider />
            <List dense={true}>
                <ErrorsTextList cacheState={props.cacheState} />
                <ListItem key="numWays">
                    <TextField
                        error={props.cacheState.numWaysError}
                        id="standard-number"
                        label="Associativity (# Ways)"
                        value={props.cacheState.numWays}
                        onChange={props.handleChange("numWays")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </ListItem>
                <ListItem key="cacheSize">
                    <TextField
                        error={props.cacheState.cacheSizeError}
                        id="standard-number"
                        label="Size of Cache (Bytes)"
                        value={props.cacheState.cacheSize}
                        onChange={props.handleChange("cacheSize")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </ListItem>
                <ListItem key="blockSize">
                    <TextField
                        error={props.cacheState.blockSizeError}
                        id="standard-number"
                        label="Size of Each Block (Bytes)"
                        value={props.cacheState.blockSize}
                        onChange={props.handleChange("blockSize")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </ListItem>
                <ListItem key="numBlocks">
                    <TextField
                        error={props.cacheState.numBlocksError}
                        id="standard-number"
                        label="Number of Blocks"
                        value={props.cacheState.numBlocks}
                        onChange={props.handleChange("numBlocks")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </ListItem>
                <ListItem key="tagBits">
                    <TextField
                        error={props.cacheState.tagBitsError}
                        id="standard-number"
                        label="Number of Tag Bits"
                        value={props.cacheState.tagBits}
                        onChange={props.handleChange("tagBits")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </ListItem>
                <ListItem key="indexBits">
                    <TextField
                        error={props.cacheState.indexBitsError}
                        id="standard-number"
                        label="Number of Index Bits"
                        value={props.cacheState.indexBits}
                        onChange={props.handleChange("indexBits")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </ListItem>
                <ListItem key="offsetBits">
                    <TextField
                        error={props.cacheState.offsetBitsError}
                        id="standard-number"
                        label="Number of Offset Bits"
                        value={props.cacheState.offsetBits}
                        onChange={props.handleChange("offsetBits")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </ListItem>
                <ListItem key="addrBits">
                    <TextField
                        error={props.cacheState.addrBitsError}
                        id="standard-number"
                        label="Memory Address Size (Bits)"
                        value={props.cacheState.addrBits}
                        onChange={props.handleChange("addrBits")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </ListItem>
                <ListItem key="numSets">
                    <TextField
                        error={props.cacheState.numSetsError}
                        id="standard-number"
                        label="Number of Sets"
                        value={props.cacheState.numSets}
                        onChange={props.handleChange("numSets")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </ListItem>
            </List>
        </div>
    );    

    return (
        <div className={classes.root}>
            <Drawer open={props.cacheState.open} onClose={props.toggleDrawer(false)}>
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
