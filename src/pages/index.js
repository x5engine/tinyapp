import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';
import Repositories from '../components/repositories';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const Index = ({classes}) => 
  (<div className={classes.root}>
    <Typography variant="h4" gutterBottom>
      StarHub
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Most starred repositories in the last 30 days
    </Typography>
    <Repositories />
  </div>
);

export default withRoot(withStyles(styles)(Index));