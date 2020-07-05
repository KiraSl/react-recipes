import React from 'react'
import PropTypes from 'prop-types'
import { Category } from '../Components/Category/Category'
import { RecipeCard } from '../Components/RecipeCard/RecipeCard'

class HomePage extends React.Component {
  constructor(props) {
    super(...arguments)
    const isSelected = category => props.location.search.includes(`?category=${category}`)

    this.state = {
      recipes: [],
      recipeCategories: [
        { name: 'speedy', isSelected: isSelected('speedy') },
        { name: 'slow', isSelected: isSelected('slow') },
        { name: 'side', isSelected: isSelected('side') },
        { name: 'small', isSelected: isSelected('small') },
        { name: 'sweet', isSelected: isSelected('sweet') },
      ],
    }
  }


  async componentDidMount() {
    const response = await fetch('/api/recipes/all.json')
    const recipes = await response.json()
    this.setState({ recipes })
  }

  toggleSelectedCategory(title) {
    this.state.recipeCategories.map(category => {
      category.isSelected = title === category.name && !category.isSelected
      return category
    })
  }

  render() {
    const { recipes, recipeCategories } = this.state
    return (
      <>
        <p className="text-center mb-4">Browse all the recipes here, select a category or search for an ingredient.</p>
        <div className="row d-flex justify-content-around">
          {recipeCategories.map(({ name, isSelected}) => (
            <Category title={name} key={name} isSelected={isSelected} setParam={() => this.toggleSelectedCategory(name)} />
          ))}
        </div>
        <div className="row">
          {recipes.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)}
        </div>
      </>
    )
  }
}

HomePage.propTypes = {
  location: PropTypes.shapeOf({
    search: PropTypes.string.isRequired,
  }).isRequired,
}

export { HomePage }
