import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { query } from '../utils/helpers'

const RecipeDetails = (props) => {
  const [recipe, setRecipe] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { recipe },
      } = await query(`
        {
          recipe(id: ${props.match.params.id}) {
            id
            title
            image
            description
            recipeDetail {
              description
              image
              ingredients
              preparationSteps
              serves
              subRecipeDetail {
                title
                ingredients
              }
            }
          }
        }
      `)
      setRecipe(recipe)
    }
    fetchData()
  })

  return (
    <>
      <div className="text-center">
        <h2 className="text-secondary text-uppercase mb-4">{recipe.title}</h2>
        <p>{recipe.description}</p>
        <img src={`/react-recipes${recipe.recipeDetail?.image}`} alt={recipe.title} className="pb-4" />
      </div>
      <div className="border-bottom pb-4" dangerouslySetInnerHTML={{ __html: recipe.recipeDetail?.description }}></div>
      <h6 className="text-secondary text-uppercase my-4">{recipe.title}</h6>
      <div className="row">
        <div className="col-md-4">
          <p className="font-italic">Serves {recipe.recipeDetail?.serves}</p>
          <ul className="list-unstyled">
            {recipe.recipeDetail?.ingredients.map((ingredient, index) => (
              <li className="font-weight-bold" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
          {recipe.recipeDetail?.subRecipeDetail && (
            <>
              <p className="font-italic">For the {recipe.recipeDetail.subRecipeDetail.title}</p>
              <ul className="list-unstyled">
                {recipe.recipeDetail.subRecipeDetail.ingredients.map((ingredient, index) => (
                  <li className="font-weight-bold" key={index}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="col-md-8">
          {recipe.recipeDetail?.preparationSteps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </div>
    </>
  )
}

RecipeDetails.propTypes = {
  match: PropTypes.object,
}

export { RecipeDetails }
