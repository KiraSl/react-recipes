import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HomePage } from './routes/HomePage'
import { RecipeDetails } from './routes/RecipeDetails'


class App extends React.Component {
  render() {
    return (
      <>
        <nav className="d-flex justify-content-center">
          <a href="#" className="h1 my-4 text-primary">
            React Recipes
          </a>
        </nav>
        <div className="container">
          <Router>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/recipe/:id" render={routeProps => (<RecipeDetails {...routeProps}/>)}>
            </Route>
          </Router>
        </div>
      </>
    )
  }
}

export default App
