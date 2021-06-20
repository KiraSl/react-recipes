import React from 'react'
import PropTypes from 'prop-types'
import { gql, useQuery } from '@apollo/client'

const RecipeDetails = (props) => {
  const recipe = gql`
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
  `
  const { loading, error, data } = useQuery(recipe)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <div className="text-center">
        <h2 className="text-secondary text-uppercase mb-4">{data.recipe.title}</h2>
        <p>{data.recipe.description}</p>
        <img src={`/react-recipes${data.recipe.recipeDetail?.image}`} alt={data.recipe.title} className="pb-4" />
      </div>
      <div className="border-bottom pb-4" dangerouslySetInnerHTML={{ __html: data.recipe.recipeDetail?.description }}></div>
      <h6 className="text-secondary text-uppercase my-4">{data.recipe.title}</h6>
      <div className="row">
        <div className="col-md-4">
          <p className="font-italic">Serves {data.recipe.recipeDetail?.serves}</p>
          <ul className="list-unstyled">
            {data.recipe.recipeDetail?.ingredients.map((ingredient, index) => (
              <li className="font-weight-bold" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
          {data.recipe.recipeDetail?.subRecipeDetail && (
            <>
              <p className="font-italic">For the {data.recipe.recipeDetail.subRecipeDetail.title}</p>
              <ul className="list-unstyled">
                {data.recipe.recipeDetail.subRecipeDetail.ingredients.map((ingredient, index) => (
                  <li className="font-weight-bold" key={index}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="col-md-8">
          {data.recipe.recipeDetail?.preparationSteps.map((step, index) => (
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
