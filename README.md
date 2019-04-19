# TinyApp : StarHub

## The idea behind the app

Implement a small web app that will list the most starred Github repos that were created in the last 30 days. You'll be fetching the sorted JSON data directly from the Github API (Github API explained down below).

## Try it!

[Starhub Demo](https://starhub.ucefkh.now.sh/)

## How to use

Clone the repo :

```sh
git clone git@github.com:x5engine/tinyapp.git
cd tinyapp
```

Install it and run:

```sh
npm i
npm start
```

## Features
* As a User I should be able to list the most starred Github repos that were created in the last 30 days. 
* As a User I should see the results as a list. One repository per row. 
* As a User I should be able to see for each repo/row the following details :
  * Repository name
  * Repository description 
  * Number of stars for the repo. 
  * Number of issues for the repo.
  * Username and avatar of the owner. 
* As a User I should be able to keep scrolling and new results should appear (pagination).

## Technologies used :

* React
* Material UI
* Caching fetched items


## How to get the data from Github 
To get the most starred Github repos created in the last 30 days (relative to 2017-11-22), you'll need to call the following endpoint : 

`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`

The JSON data from Github will be paginated (you'll receive around 100 repos per JSON page). 

To get the 2nd page, you add `&page=2` to the end of your API request : 

`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2`

To get the 3rd page, you add `&page=3` ... etc

You can read more about the Github API over [here](https://developer.github.com/v3/search/#search-repositories
).

## Mockups
![alt text](https://raw.githubusercontent.com/hiddenfounders/frontend-coding-challenge/master/mockup.png)

Here's what each element represents :

![alt text](https://raw.githubusercontent.com/hiddenfounders/frontend-coding-challenge/master/row_explained.png)


## Contributing

Generally open an issue (or comment on an issue if there's one already) before starting work on a PR.

## License

GPL 3

