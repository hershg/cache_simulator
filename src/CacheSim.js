import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CacheDrawer from './CacheDrawer';
import CacheMenu from './CacheMenu';
import CacheTable from './CacheTable';

const styles = theme => ({
    openRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
});

class App extends React.Component {
  state = {
    open: false,
    numWays: 1,    // associativity
    cacheSize: 128,
    blockSize: 32,
    numBlocks: 4,
    tagBits: 9,
    indexBits: 2,
    offsetBits: 5,
    addrBits: 16,
    numSets: 4,
    errorsText: [],
    numWaysError: false,
    cacheSizeError: false,
    blockSizeError: false,
    numBlocksError: false,
    tagBitsError: false,
    indexBitsError: false,
    offsetBitsError: false,
    addrBitsError: false,
    numSetsError: false,
  };

  toggleDrawer = isOpen => () => {
    this.setState({
      "open": isOpen,
    });
  };

  validateCache = () => () => {
    if (this.state.numWays < 1 || this.state.numWays > 1024 ||
        (this.state.numSets * this.state.numWays !== this.state.numBlocks)) {
      this.setState({
        numWaysError: true,
      });
    } else {
      this.setState({
        numWaysError: false,
      });
    }
    if (this.state.cacheSize < 1 || this.state.cacheSize > 1048576 ||
        (this.state.numBlocks * this.state.blockSize !== this.state.cacheSize)) {
      this.setState({
        cacheSizeError: true,
      });
    } else {
      this.setState({
        cacheSizeError: false,
      });
    }
    if (this.state.blockSize < 1 || this.state.blockSize > 1048576 ||
        (this.state.numBlocks * this.state.blockSize !== this.state.cacheSize) ||
        (2 ** this.state.offsetBits !== this.state.blockSize)) {
      this.setState({
        blockSizeError: true,
      });
    } else {
      this.setState({
        blockSizeError: false,
      });
    }
    if (this.state.numBlocks < 1 || this.state.numBlocks > 1024 ||
        (this.state.numBlocks * this.state.blockSize !== this.state.cacheSize) ||
        (this.state.numSets * this.state.numWays !== this.state.numBlocks)) {
      this.setState({
        numBlocksError: true,
      });
    } else {
      this.setState({
        numBlocksError: false,
      });
    }
    if (this.state.tagBits < 1 || this.state.tagBits > 128 || 
        ((this.state.addrBits - (this.state.indexBits + this.state.offsetBits)) !== this.state.tagBits)) {
      this.setState({
        tagBitsError: true,
      });
    } else {
      this.setState({
        tagBitsError: false,
      });
    }
    if (this.state.indexBits < 1 || this.state.indexBits > 128 || 
        ((this.state.addrBits - (this.state.tagBits + this.state.offsetBits)) !== this.state.indexBits) ||
        (2 ** this.state.indexBits !== this.state.numSets)) {
      this.setState({
        indexBitsError: true,
      });
    } else {
      this.setState({
        indexBitsError: false,
      });
    }
    if (this.state.offsetBits < 1 || this.state.offsetBits > 128 || 
        ((this.state.addrBits - (this.state.tagBits + this.state.indexBits)) !== this.state.offsetBits) ||
        (2 ** this.state.offsetBits !== this.state.blockSize)) {
      this.setState({
        offsetBitsError: true,
      });
    } else {
      this.setState({
        offsetBitsError: false,
      });
    }
    if (this.state.addrBits < 1 || this.state.addrBits > 128 || 
        ((this.state.tagBits + this.state.indexBits + this.state.offsetBits) !== this.state.addrBits)) {
      this.setState({
        addrBitsError: true,
      });
    } else {
      this.setState({
        addrBitsError: false,
      });
    }
    
    if (this.state.numSets < 1 || this.state.numSets > 1024 ||
        (this.state.numSets * this.state.numWays !== this.state.numBlocks) ||
        (2 ** this.state.indexBits !== this.state.numSets)) {
      this.setState({
        numSetsError: true,
      });
    } else {
      this.setState({
        numSetsError: false,
      });
    }
  } 

  settingsErrors = () => () => {
    var errorsList = []
    if (this.state.tagBits + this.state.indexBits + this.state.offsetBits !== this.state.addrBits) {
      errorsList.push({key: "err1", value: "Tag + Index + Offset != Address Bits!"});
    }
    if (2 ** this.state.indexBits !== this.state.numSets) {
      errorsList.push({key: "err2", value: "2^(# Index Bits) != # Sets!"});
    }
    if (2 ** this.state.offsetBits !== this.state.blockSize) {
      errorsList.push({key: "err3", value: "2^(# Offset Bits) != Block Size!"});
    }
    if (this.state.numBlocks * this.state.blockSize !== this.state.cacheSize) {
      errorsList.push({key: "err4", value: "# Blocks * Block Size != Cache Size!"});
    }
    if (this.state.numSets * this.state.numWays !== this.state.numBlocks) {
      errorsList.push({key: "err5", value: "# Sets * # Ways != # Blocks!"});
    }
    this.setState(
      {
        errorsText: errorsList,
      },
      this.validateCache()
    );
  };

  handleChange = name => event => {
    this.setState(
      {
        [name]: parseInt(event.target.value, 10),
      },
      this.settingsErrors()
    );
  };

  render() {
    return (
        <div>
            <CacheMenu    toggleDrawer={this.toggleDrawer} />
            <CacheDrawer  toggleDrawer={this.toggleDrawer} 
                          handleChange={this.handleChange}
                          cacheState={this.state} />
            <CacheTable   toggleDrawer={this.toggleDrawer} />
        </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
