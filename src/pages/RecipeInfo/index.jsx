import {Container, PresentationContainer, PrepareContainer,FlexContainerIngredient, FlexContainerTips,MainContainer, TipsContainer, MetaDataContainer} from './styles'
import Header from '../../components/Header'
import { useParams } from "react-router-dom";
import {getRecipeView} from '../../services/getRecipeView'
import { AiFillStar, AiOutlineArrowRight, AiOutlineCaretRight } from 'react-icons/ai'

export default function RecipeInfo() {
    let params = useParams()
    params.recipeName = params.recipeName.replaceAll('-', ' ')

    var recipe = getRecipeView(params.recipeName)
    console.log(recipe)
    
    var stars = []
    for(var i = 0; i < recipe.rate; i++){
        stars.push(<AiFillStar key={i} color={'#FFD700'} size={25}/>)
    }

    return (
        <Container>
            <Header/>
            <PresentationContainer>
                <h1>{recipe.name}</h1>
                <MetaDataContainer>
                    {stars}
                    <p>Tempo de preparo: <span> {recipe.time} </span></p>
                    <p>Tipo: <span>{recipe.type}</span> </p>
                    <p>Serve: <span>{recipe.serves}</span> </p>
                </MetaDataContainer>
            </PresentationContainer>
            <MainContainer>
                <PrepareContainer>
                    <h3>Ingerdientes:</h3>
                    {recipe.ingredients.map((ingredient) => (
                        <FlexContainerIngredient>
                            <AiOutlineArrowRight size={18}/>
                            <p className="ingredient" key={ingredient.id}>{ingredient.quantity} {ingredient.name}</p>
                        </FlexContainerIngredient>
                    ))}

                    <h3 class="stepHeader">Preparo:</h3>
                    {recipe.preparation.map((step) => (
                        <p className="step" key={step.id}>{step.id} - {step.description}</p>
                    ))}
                </PrepareContainer>
                
                <TipsContainer>
                    <h3>Combina com:</h3>
                    {recipe.goodWith.map((recipe) => (
                        <FlexContainerTips>
                            <AiOutlineCaretRight/>
                            <p className="recipe" key={recipe.id}>{recipe.recipe}</p>
                        </FlexContainerTips>
                    ))}

                    <h3 class="margin-top">Quando fazer:</h3>
                    {recipe.goodWere.map((local) => (
                        <FlexContainerTips>
                            <AiOutlineCaretRight/>
                            <p className="local" key={local.id}>{local.local}</p>
                        </FlexContainerTips>
                    ))}

                    <h3 class="margin-top">O que beber:</h3>
                    {recipe.drinksWith.map((drink) => (
                        <FlexContainerTips>
                            <AiOutlineCaretRight/>
                            <p className="drink" key={drink.id}>{drink.drink}</p>
                        </FlexContainerTips>
                    ))}
                </TipsContainer>
            </MainContainer>
        </Container>
    )
}
