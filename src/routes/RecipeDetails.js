import React from 'react'
import PropTypes from 'prop-types'

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipeDetails: {},
    }
  }

  async componentDidMount() {
    const response = await fetch(`/api/recipes/${this.props.match.params.id}.json`)
    const recipeDetails = await response.json()
    this.setState({ recipeDetails })
  }

  render() {
    const { recipeDetails } = this.state
    const recipeInfo = recipeDetails.recipeDetail

    return (
      <>
        <div className="text-center container">
          <h2 className="text-secondary text-uppercase mb-4">{recipeDetails.title}</h2>
          <p>{recipeDetails.description}</p>
          <img
            src={recipeInfo && recipeInfo.image}
            alt={recipeDetails.title}
            className="pb-4"
          />
          <div className="border-bottom pb-4 w-100">
            {recipeInfo && recipeInfo.description}
          </div>
        </div>
      </>
    )
  }
}

RecipeDetails.propTypes = {
  match: PropTypes.object,
}

export { RecipeDetails }
