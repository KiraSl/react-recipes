import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
  const { id, image, title, description } = recipe

  return (
    <div className="col-sm-6 col-lg-4 mb-4 d-flex">
      <div className="card">
        <Link to={`/react-recipes/recipe/${id}`}>
          <img src={`/react-recipes${image}`} className="card-img-top" alt={title} />
        </Link>
        <div className="card-body">
          <Link to={`/react-recipes/recipe/${id}`} className="h5 text-uppercase">
            {title}
          </Link>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
}

export { RecipeCard }
