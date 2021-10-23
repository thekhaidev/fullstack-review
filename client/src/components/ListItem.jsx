import React from 'react'

const ListItem = (props) => (
  <li>
    <p>
      Name: {props.name}
      <br />
      URL: {props.url}
      <br />
      WATCHES: {props.watchers ? props.watchers: 0}
    </p>
  </li>
)


export default ListItem