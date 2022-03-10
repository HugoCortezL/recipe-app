import {loadRecipes} from './Recipes'
import {loadIngredients} from './Ingredients'
import {loadRecipesIngredients} from './RecipesIngredients'

function getIngredients(recipeId){
    var ingredients = []
    var idIngredients = 1
    const allRecipesIngredients = loadRecipesIngredients()
    const allIngredients = loadIngredients()
    for (const recipeIngredient of allRecipesIngredients){
        if (recipeIngredient.recipe == recipeId){
            for(const ingredient of allIngredients){
                if (ingredient.id == recipeIngredient.ingredient){
                    var addIngredient = {
                        id: idIngredients,
                        quantity: recipeIngredient.text,
                        name: ingredient.ingredient
                    }
                    ingredients.push(addIngredient)
                    idIngredients += 1
                }
            }
        }
    }
    return ingredients
}

export function getRecipeView(recipeName){
    const recipes = loadRecipes()
    var getRecipe = {}
    for (const recipe of recipes){
        if (recipe.name == recipeName){
            getRecipe = recipe
            break
        }
    }

    const ingredients = getIngredients(getRecipe.id)
    getRecipe.ingredients = ingredients
    return getRecipe
}