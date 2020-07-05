import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Category = ({ isSelected, title, setParam }) => {
  return (
    <NavLink
      className={`${isSelected ? 'border-secondary' : ''} text-uppercase h6 border-bottom mb-3`}
      to={isSelected ? '' : `?category=${title}`}
      onClick={() => setParam()}
    >
      {title}
    </NavLink>
  )
}

Category.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  setParam: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export { Category }
