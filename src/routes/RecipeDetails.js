import React from 'react'
import PropTypes from 'prop-types'

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: {},
    }
  }

  async componentDidMount() {
    const response = await fetch(`/api/recipes/${this.props.match.params.id}.json`)
    const recipe = await response.json()
    this.setState({ recipe })
  }

  render() {
    const { recipe, recipe: {recipeDetail} } = this.state

    return (
      <div>
        <h2 className="text-center text-secondary text-uppercase mb-4">{recipe.title}</h2>
        <p className="text-center">{recipe.description}</p>
        <div className="text-center">
          <img
            src={recipeDetail && recipeDetail.image}
            alt={recipe.title}
            className="pb-4"
          />
        </div>
        <div className="border-bottom pb-4 w-100">
          {recipeDetail && recipeDetail.description}
        </div>
      </div>
    )
  }
}

RecipeDetails.propTypes = {
  match: PropTypes.object,
}

export { RecipeDetails }
