import React from 'react'

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
    console.log(this.state.recipes)
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
            <div className="col-sm-6 col-lg-4 mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default App
