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
    errorsText: [
      {key: "err1", isErr: false, value: "#Tag + #Index + #Offset = #Address Bits!"},
      {key: "err2", isErr: false,  value: "2^(#Index Bits) = #Sets!"},
      {key: "err3", isErr: false,  value: "2^(#Offset Bits) = Block Size!"},
      {key: "err4", isErr: false,  value: "#Blocks * Block Size = Cache Size!"},
      {key: "err5", isErr: false,  value: "#Sets * #Ways = #Blocks!"}],
    numWaysError: false,
    cacheSizeError: false,
    blockSizeError: false,
    numBlocksError: false,
    tagBitsError: false,
    indexBitsError: false,
    offsetBitsError: false,
    addrBitsError: false,
    numSetsError: false,
    isDMSel: true,
    isFASel: false,
  };

  toggleDrawer = isOpen => () => {
    this.setState({
      "open": isOpen,
    });
  };

  DMSel = isSel => () => {
    this.setState({
      isDMSel: isSel,
    });
  };

  FASel = isSel => () => {
    this.setState({
      isFASel: isSel,
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
    if (this.state.tagBits < 0 || this.state.tagBits > 128 || 
        ((this.state.addrBits - (this.state.indexBits + this.state.offsetBits)) !== this.state.tagBits)) {
      this.setState({
        tagBitsError: true,
      });
    } else {
      this.setState({
        tagBitsError: false,
      });
    }
    if (this.state.indexBits < 0 || this.state.indexBits > 128 || 
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
    if (this.state.offsetBits < 0 || this.state.offsetBits > 128 || 
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

    if (this.state.numWays === 1) {
      this.setState({
        isDMSel: true,
      });
    } else {
      this.setState({
        isDMSel: false,
      });
    }

    if (this.state.numWays === this.state.numBlocks) {
      this.setState({
        isFASel: true,
      });
    } else {
      this.setState({
        isFASel: false,
      });
    }
  } 

  settingsErrors = () => () => {
    var errorsList = []
    if (this.state.tagBits + this.state.indexBits + this.state.offsetBits !== this.state.addrBits) {
      errorsList.push({key: "err1", isErr: true, value: "#Tag + #Index + #Offset != #Address Bits!"});
    } else {
      errorsList.push({key: "err1", isErr: false, value: "#Tag + #Index + #Offset = #Address Bits!"});
    }
    if (2 ** this.state.indexBits !== this.state.numSets) {
      errorsList.push({key: "err2", isErr: true,  value: "2^(#Index Bits) != #Sets!"});
    } else {
      errorsList.push({key: "err2", isErr: false,  value: "2^(#Index Bits) = #Sets!"});
    }
    if (2 ** this.state.offsetBits !== this.state.blockSize) {
      errorsList.push({key: "err3", isErr: true,  value: "2^(#Offset Bits) != Block Size!"});
    } else {
      errorsList.push({key: "err3", isErr: false,  value: "2^(#Offset Bits) = Block Size!"});
    }
    if (this.state.numBlocks * this.state.blockSize !== this.state.cacheSize) {
      errorsList.push({key: "err4", isErr: true,  value: "#Blocks * Block Size != Cache Size!"});
    } else {
      errorsList.push({key: "err4", isErr: false,  value: "#Blocks * Block Size = Cache Size!"});
    }
    if (this.state.numSets * this.state.numWays !== this.state.numBlocks) {
      errorsList.push({key: "err5", isErr: true,  value: "#Sets * #Ways != #Blocks!"});
    } else {
      errorsList.push({key: "err5", isErr: false,  value: "#Sets * #Ways = #Blocks!"});
    }
    this.setState(
      {
        errorsText: errorsList,
      },
      this.validateCache()
    );
  };

  handleChangeNum = name => event => {
    this.setState(
      {
        [name]: parseInt(event.target.value, 10),
      },
      this.settingsErrors()
    );
  };

  handleDM = () => event => {
    this.setState(
      {
        isDMSel: event.target.checked,
        numWays: 1,
      },
      this.settingsErrors()
    );
  };

  handleFA = () => event => {
    this.setState(
      {
        isFASel: event.target.checked,
        numWays: this.state.numBlocks,
      },
      this.settingsErrors()
    );
  };

  render() {
    return (
        <div>
            <CacheMenu    toggleDrawer={this.toggleDrawer} />
            <CacheDrawer  toggleDrawer={this.toggleDrawer} 
                          handleChangeNum={this.handleChangeNum}
                          handleDM={this.handleDM}
                          handleFA={this.handleFA}
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
