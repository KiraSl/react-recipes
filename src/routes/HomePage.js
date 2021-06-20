import { gql, useQuery } from '@apollo/client'
import React from 'react'

import { RecipeCard } from '../RecipeCard'

const RECIPES = gql`
  {
    recipes {
      id
      title
      image
      description
    }
  }
`

const HomePage = () => {
  const { loading, error, data } = useQuery(RECIPES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <p className="text-center mb-4">Browse all the recipes here, select a category or search for an ingredient.</p>
      <div className="row">
        {data.recipes.map((recipe, i) => (
          <RecipeCard recipe={recipe} key={i} />
        ))}
      </div>
    </>
  )
}

export { HomePage }
