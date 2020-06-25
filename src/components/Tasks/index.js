import React from 'react'

function Tasks(props) {
  const {filter} = props
  return (
    <p>Soy tasks con el filtro: {filter}</p>
  )
}

export default Tasks;