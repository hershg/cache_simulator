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
    },
    list: {
        width: 300,
    }
});

class App extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
        <div>
            <CacheMenu toggleDrawer={this.toggleDrawer} isOpen={this.state.left}  />
            <CacheDrawer toggleDrawer={this.toggleDrawer} isOpen={this.state.left} />
            <CacheTable toggleDrawer={this.toggleDrawer} isOpen={this.state.left} />
        </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
