import React from 'react';
import PropTypes from 'prop-types';

import Chip from '@material-ui/core/Chip';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
  },
   card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  chip: {
    margin: theme.spacing.unit * 2,
  },
});

class Repository extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes, repo } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardMedia
              className={classes.cover}
              image={repo.owner ? repo.owner.avatar_url : 'https://github.com/github.png?size=200'}
              title="owner avatar"
            />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {repo.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {repo.description}
                <Chip label={repo.stargazers_count} className={classes.chip} variant="outlined" />
                <Chip label={repo.forks_count} className={classes.chip} variant="outlined" />
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

Repository.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Repository));
