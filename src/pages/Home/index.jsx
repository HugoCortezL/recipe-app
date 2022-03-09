import {Container, RecipesContainer} from './styles'
import RecipeCard from '../../components/RecipeCard'
import Header from '../../components/Header'

import {loadRecipes} from '../../services/Recipes'

export default function Home() {
    const recipes = loadRecipes()
    return (
        <Container>
            <Header/>
            <RecipesContainer>
                
                {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}
            </RecipesContainer>
        </Container>
    )
}
