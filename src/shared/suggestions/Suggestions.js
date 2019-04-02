import React from 'react'

export const Suggestions = (props) => { 
  var options = (props.results.map(radios => (
    <li key={radios.id}>
      {radios.name}
    </li>
  )));

  return <ul >{options}</ul>

} 
