import React from 'react';
import ListItem from './ListItem.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ul>
      {props.repos.map(repo => {
        return <ListItem key={repo.url} name = {repo.name} url={repo.url} watchers={repo.watchers}/>})}
    </ul>
  </div>
)

export default RepoList;