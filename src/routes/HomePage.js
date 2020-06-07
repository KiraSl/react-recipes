import React from 'react'
import { RecipeCard } from '../RecipeCard'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [],
    }
  }

  async componentDidMount() {
    const response = await fetch('/api/recipes/all.json')
    const recipes = await response.json()
    this.setState({ recipes })
  }

  render() {
    const { recipes } = this.state

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

export { HomePage }
