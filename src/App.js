import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { HomePage } from './routes/HomePage'
import { RecipeDetails } from './routes/RecipeDetails'

const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <Router>
      <nav className="d-flex justify-content-center">
        <Link to="/react-recipes" className="h1 my-4 text-primary">
          React Recipes
        </Link>
      </nav>
      <div className="container">
        <ApolloProvider client={client}>
          <Route exact path="/react-recipes" component={HomePage} />
          <Route exact path="/react-recipes/recipe/:id" render={routeProps => (<RecipeDetails {...routeProps} />)} />
        </ApolloProvider>
      </div>
    </Router>
  )
}

export default App
