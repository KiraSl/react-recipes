import React from 'react'
import { Category } from '../Components/Category/Category'
import { RecipeCard } from '../Components/RecipeCard/RecipeCard'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [],
      recipeCategories: [
        { name: 'speedy', isSelected: false },
        { name: 'slow', isSelected: false },
        { name: 'side', isSelected: false },
        { name: 'small', isSelected: false },
        { name: 'sweet', isSelected: false },
      ],
    }
  }

  async componentDidMount() {
    const response = await fetch('/api/recipes/all.json')
    const recipes = await response.json()
    this.setState({ recipes })
  }

  toggleSelectedCategory() {
    // if (title === this.state.recipeCategories.name) {
    //   this.setState({ recipeCategories.isSelected: true})
    //   console.log('>>>>', this.state)
    // }
    console.log('!!!', this.state)
  }

  render() {
    const { recipes, recipeCategories } = this.state
      return (
      <>
        <p className="text-center mb-4">Browse all the recipes here, select a category or search for an ingredient.</p>
        <div className="row d-flex justify-content-around">
          {recipeCategories.map(({ name, isSelected}) => (
            <Category title={name} key={name} isSelected={isSelected} onClick={() => this.toggleSelectedCategory()}></Category>
          ))}
        </div>
        <div className="row">
          {recipes.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)}
        </div>
      </>
    )
  }
}

export { HomePage }
