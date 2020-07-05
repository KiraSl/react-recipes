import React from 'react'
import PropTypes from 'prop-types'

const RecipeCard = ({ recipe }) => {
  const { image, title, description } = recipe

  return (
    <div className="col-sm-6 col-lg-4 mb-4 d-flex">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
}

export { RecipeCard }
