
import React from 'react'

import { ItemContainer } from './style';

function ItemRepo ({repo, handleRemoveRepo}) {

  const handleRemove = () =>{
    
    handleRemoveRepo(repo.id)


  }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a> <br/>
        <button onClick={handleRemove}><a href='#' className="remover">remover</a></button>
        <hr/>
    </ItemContainer>
  )
}

export default ItemRepo

// https://api.github.com/repos/pablohdev/dio-clone