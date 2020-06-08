import React from 'react'
import PropTypes from 'prop-types'

const RecipeDetails = props => {
  const { id } = props.match.params
  
  return (
    <h1 className="text-center">{id}</h1>
  )
}

RecipeDetails.propTypes = {
  match: PropTypes.object,
}

export { RecipeDetails }
