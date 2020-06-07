import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

const RecipeCard = ({ imageUrl, title, description }) => {
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

RecipeCard.propTypes = propTypes

export { RecipeCard }
