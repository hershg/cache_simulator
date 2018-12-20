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
    left: false,
    addrSize: 16,
    addrSizeError: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    if (name === "addrSize") {
      if (event.target.value < 0) {
        this.setState({
          addrSizeError: true,
        });
      } else {
        this.setState({
          addrSizeError: false,
        });
      }
    }
  };

  render() {
    return (
        <div>
            <CacheMenu    toggleDrawer={this.toggleDrawer} 
                          isOpen={this.state.left} />
            <CacheDrawer  toggleDrawer={this.toggleDrawer} 
                          isOpen={this.state.left} 
                          handleChange={this.handleChange} 
                          addrSize={this.state.addrSize}
                          addrSizeError={this.state.addrSizeError} />
            <CacheTable   toggleDrawer={this.toggleDrawer} />
        </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
