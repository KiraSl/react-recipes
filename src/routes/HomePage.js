import React from 'react'
import PropTypes from 'prop-types'
import { RecipeCard } from '../RecipeCard'

class HomePage extends React.Component {
  render() {
    const { recipes } = this.props

    return (
      <>
        <p className="text-center mb-4">Browse all the recipes here, select a category or search for an ingredient.</p>
        <div className="row">
          {recipes.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)}
        </div>
      </>
    )
  }
}

HomePage.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
}

export { HomePage }
