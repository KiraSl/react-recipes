import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Category = ({ isSelected, title }) => {

  return (
    <NavLink
      className="text-uppercase h6 border-bottom mb-3"
      to={isSelected ? '' : `?category=${title}`}
      activeClassName="border-secondary"
      // onClick={() => setParams(title)}
    >
      {title}
    </NavLink>
  )
}

Category.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}

export { Category }