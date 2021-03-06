import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { HomePage } from './routes/HomePage'
import { RecipeDetails } from './routes/RecipeDetails'

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav className="d-flex justify-content-center">
          <Link to="/react-recipes" className="h1 my-4 text-primary">
            React Recipes
          </Link>
        </nav>
        <div className="container">
          <Route exact path="/react-recipes" component={HomePage} />
          <Route exact path="/react-recipes/recipe/:id" render={routeProps => (<RecipeDetails {...routeProps} />)} />
        </div>
      </Router>
    )
  }
}

export default App
