import React, { useState, useEffect } from 'react'
import { RecipeCard } from '../RecipeCard'
import { query } from '../utils/helpers'

const HomePage = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await query`
      {
        recipes {
          id
          title
          image
          description
        }
      }
    `

      setRecipes(data.recipes)
    }
    fetchData()
  })

  return (
    <>
      <p className="text-center mb-4">Browse all the recipes here, select a category or search for an ingredient.</p>
      <div className="row">
        {recipes.map((recipe, i) => (
          <RecipeCard recipe={recipe} key={i} />
        ))}
      </div>
    </>
  )
}

export { HomePage }
