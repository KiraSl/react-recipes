import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HomePage } from './routes/HomePage'

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
            <Route path="/">
              <HomePage recipes={recipes}/>
            </Route>
          </Router>
        </div>
      </>
    )
  }
}

export default App
