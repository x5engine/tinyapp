import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Repository from './repository';
import moment from 'moment';
import qwest from 'qwest';
import InfiniteScroll from 'react-infinite-scroller';



const styles = theme => ({
  root: {
    textAlign: 'center',
    // paddingTop: theme.spacing.unit * 2,
  },
});

const api = {
    baseUrl: 'https://api.github.com/search/repositories'
};

class Repositories extends React.Component {
  state = {
    repositories: [],
    total_count: 0,
    currentPage: 1,
    hasMoreItems: true,
  };

  // componentDidMount = () => {
  //   const date = moment().format('YYYY-MM-DD');
  //   console.log('gettin repos of ',date)
    
  //   const url = api+'?q=created:>'+date+'&sort=stars&order=desc'
  //   fetch(url)
  //     .then(response => {
  //       console.log(response);
  //       return response.json() 
  //     })
  //     .then(data => this.setState({ repositories: data.items, total_count: data.total_count }))
  //     .catch(error => console.error(error));
  // };
  
  loadItems = () => {
    const { currentPage, repositories } = this.state;
    const date = moment().subtract(30,'day').format('YYYY-MM-DD');
    console.log('gettin repos of ',date)
    qwest.get(api.baseUrl, {
        q: 'created:>'+date,
        sort: 'stars',
        order: 'desc',
        page: this.state.currentPage,
    }, {
        cache: true
    })
    .then((xhr, response) => {
      console.log(xhr,response);
      this.setState({ repositories: [...repositories, ...response.items], total_count: response.total_count, currentPage : currentPage+1 })
    })
    .catch(error => console.error(error));
    
  };

  render() {
    const { classes } = this.props;
    const { repositories, hasMoreItems } = this.state;
    const loader = <div className="loader">Loading ...</div>;

    return (
      <div className={classes.root}>
      {!!repositories.length && <h2>{repositories.length} repositories</h2>}
       <InfiniteScroll
                pageStart={1}
                loadMore={this.loadItems}
                hasMore={hasMoreItems}
                loader={loader}>

                <div className="repositories" key={1}>
                    {repositories.map( (repo,index) => (<Repository key={index} repo={repo} />) )}
                </div>
            </InfiniteScroll>
      </div>
    );
  }
}

Repositories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Repositories));
