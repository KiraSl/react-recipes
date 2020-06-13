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
      <div className="text-center">
        <h2 className="text-secondary text-uppercase mb-4">{recipe.title}</h2>
        <p>{recipe.description}</p>
        <img
          src={recipeDetail?.image}
          alt={recipe.title}
          className="pb-4"
        />
        <div className="text-left border-bottom pb-4">
          {recipeDetail?.description}
        </div>
      </div>
    )
  }
}

RecipeDetails.propTypes = {
  match: PropTypes.object,
}

export { RecipeDetails }
