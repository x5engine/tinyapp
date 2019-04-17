import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Repository from './repository';
import moment from 'moment';
import 'moment-timezone';


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Repositories extends React.Component {
  state = {
    repositories: [],
    total_count: 0,
    currentPage: 1
  };

  componentDidMount = () => {
    const date = moment().format('YYYY-MM-DD');
    console.log('gettin repos of ',date)
    
    const url = 'https://api.github.com/search/repositories?q=created:<'+date+'&sort=stars&order=desc'
    fetch(url)
      .then(response => {
        console.log(response);
        return response.json() 
      })
      .then(data => this.setState({ repositories: data.items, total_count: data.total_count }))
      .catch(error => console.error(error));
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
      <h2>{this.state.repositories.length} repositories</h2>
        {this.state.repositories.map( (repo,index) => (<Repository key={index} repo={repo} />) )}
      </div>
    );
  }
}

Repositories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Repositories));
