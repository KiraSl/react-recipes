import React from 'react'
import { RecipeCard } from './RecipeCard'

class App extends React.Component {
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
        <nav className="d-flex justify-content-center">
          <a href="#" className="h1 my-4 text-primary">
            React Recipes
          </a>
        </nav>
        <div className="container">
          <p className="text-center mb-4">Browse all the recipes here, select a category or search for an ingredient.</p>
          <div className="row">
            {recipes.map((recipe, i) =>
              <RecipeCard
                imageUrl={recipes[i].image}
                title={recipes[i].title}
                description={recipes[i].description}
                key={i}
              />
            )}
          </div>
        </div>
      </>
    )
  }
}

export default App
