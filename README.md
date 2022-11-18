# Project Title

Fetching Repositories using github public api



## API Reference

#### Get all items

```http
  GET https://api.github.com/users/${searchInput}
```

| Parameter | Type     | 
| :-------- | :------- |
| `searchInput` | `string` | 

#### Get item

```http
  GET https://api.github.com/users/${searchInput}/repos
```

| Parameter | Type     |
| :-------- | :------- | 
| `searchInput`| `string`|





## Demo

You can see live version here,

 https://63776b8cc7fd92009ec4fee5--fetch-repo.netlify.app

## Installation

Install my-project with npm

```bash
  1. Fork this project then run below commands
  npm install
  2. for running locally
  npm start
```
    
## Documentation

1. refer api documentation - [Documentation](https://docs.github.com/en/rest/reference)
2. There are 4 components in this webpage
3. SearchBar,Profile,Result,Pagination.
