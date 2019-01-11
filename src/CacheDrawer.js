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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    list: {
        width: 390,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 190,
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
        if (errorText.isErr) {
            return (
                <ListItem key={errorText.key}>
                    <Typography color="error">
                        {errorText.value}
                    </Typography>
                </ListItem>
            );
        } else {
            return (
                <ListItem key={errorText.key}>
                    <Typography color="normal">
                        {errorText.value}
                    </Typography>
                </ListItem>
            );
        }
    });
    return errorsList
};

function CacheDrawer(props) {
    const { classes } = props;

    const sideList = (
        <div className={classes.list}>
            <List>
                <ListItem button key="close" onClick={props.toggleDrawer(false)}>
                    <ListItemText primary="Close Configurator" color="error" />
                </ListItem>
            </List>
            <Divider />
            <List dense={true}>
                <ErrorsTextList cacheState={props.cacheState} />
                <ListItem key="numWays">
                    <TextField
                        error={props.cacheState.numWaysError}
                        disabled={props.cacheState.isNumWaysDisabled}
                        id="standard-number"
                        label="Associativity (# Ways)"
                        value={props.cacheState.numWays}
                        onChange={props.handleChangeNum("numWays")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        //variant="outlined"
                    />
                    <FormControlLabel
                        control={<Checkbox
                            checked={props.cacheState.isDMSel}
                            onChange={props.handleDM()}
                            value="isDMSel"
                            color="primary"
                        />}
                        label="DM"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        control={<Checkbox
                            checked={props.cacheState.isFASel}
                            onChange={props.handleFA()}
                            value="isFASel"
                            color="primary"
                        />}
                        label="FA"
                        labelPlacement="start"
                    />
                </ListItem>
                <ListItem key="cacheSize">
                    <TextField
                        error={props.cacheState.cacheSizeError}
                        id="standard-number"
                        label="Size of Cache (Bytes)"
                        value={props.cacheState.cacheSize}
                        onChange={props.handleChangeNum("cacheSize")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        //variant="outlined"
                    />
                </ListItem>
                <ListItem key="blockSize">
                    <TextField
                        error={props.cacheState.blockSizeError}
                        id="standard-number"
                        label="Size of Each Block (Bytes)"
                        value={props.cacheState.blockSize}
                        onChange={props.handleChangeNum("blockSize")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        //variant="outlined"
                    />
                </ListItem>
                <ListItem key="numBlocks">
                    <TextField
                        error={props.cacheState.numBlocksError}
                        id="standard-number"
                        label="Number of Blocks"
                        value={props.cacheState.numBlocks}
                        onChange={props.handleChangeNum("numBlocks")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        //variant="outlined"
                    />
                </ListItem>
                <ListItem key="numSets">
                    <TextField
                        error={props.cacheState.numSetsError}
                        id="standard-number"
                        label="Number of Sets"
                        value={props.cacheState.numSets}
                        onChange={props.handleChangeNum("numSets")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        //variant="outlined"
                    />
                </ListItem>
                <ListItem key="tagBits">
                    <TextField
                        error={props.cacheState.tagBitsError}
                        id="standard-number"
                        label="Number of Tag Bits"
                        value={props.cacheState.tagBits}
                        onChange={props.handleChangeNum("tagBits")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        //variant="outlined"
                    />
                </ListItem>
                <ListItem key="indexBits">
                    <TextField
                        error={props.cacheState.indexBitsError}
                        id="standard-number"
                        label="Number of Index Bits"
                        value={props.cacheState.indexBits}
                        onChange={props.handleChangeNum("indexBits")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        //variant="outlined"
                    />
                </ListItem>
                <ListItem key="offsetBits">
                    <TextField
                        error={props.cacheState.offsetBitsError}
                        id="standard-number"
                        label="Number of Offset Bits"
                        value={props.cacheState.offsetBits}
                        onChange={props.handleChangeNum("offsetBits")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        //variant="outlined"
                    />
                </ListItem>
                <ListItem key="addrBits">
                    <TextField
                        error={props.cacheState.addrBitsError}
                        id="standard-number"
                        label="Memory Addr Size (Bits)"
                        value={props.cacheState.addrBits}
                        onChange={props.handleChangeNum("addrBits")}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        //variant="outlined"
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
