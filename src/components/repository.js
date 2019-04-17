import React from 'react';

import Chip from '@material-ui/core/Chip';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Link from '@material-ui/core/Link';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import moment from 'moment';

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
  link: {
    margin: theme.spacing.unit,
  },
});

const kFormatter = (num) => Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)

const Repository = ({classes, repo}) =>
      (<div className={classes.root}>
        <Card className={classes.card}>
          <CardMedia
              className={classes.cover}
              image={repo.owner ? repo.owner.avatar_url : 'https://github.com/github.png?size=200'}
              title="owner avatar"
            />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Link href={repo.html_url} variant="h5" className={classes.link}>
                {repo.name}
              </Link>
              <Typography variant="subtitle1" color="textSecondary">
                {repo.description}
                <div>
                  <Chip label={'Stars: '+kFormatter(repo.stargazers_count)} className={classes.chip} variant="outlined" />
                  <Chip label={'Issues: '+kFormatter(repo.open_issues_count)} className={classes.chip} variant="outlined" />
                  
                  Subbmited {moment(repo.created_at).fromNow()} by {repo.owner.login}
                </div>
                
                
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
);

export default withRoot(withStyles(styles)(Repository));